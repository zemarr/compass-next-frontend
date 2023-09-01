import Image from 'next/image'
import { Inter, Roboto_Serif } from 'next/font/google'
import { getArticles } from '@/lib/articles'
import {
  // ImageFormat,
  // FeaturedImage,
  // User,
  // ArticleAttributes,
  // Article,
  // Pagination,
  // Meta,
  ApiResponse
} from '@/lib/types'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import axios from 'axios'
import {
  // CardDescription,
  // CardHeader,
  // CardTitle,
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'


export const getServerSideProps: GetServerSideProps<{ apiResponse: ApiResponse }> = async (context) => {
  const res = await axios.get('http://127.0.0.1:1337/api/articles?populate=*') // for some reason localhost gives more problems of you need to use the ip your server is running on
  const apiResponse = await res?.data

  if (!apiResponse) {
    return {
      notFound: true
    }
  }
  return {
    props: { apiResponse }
  }
}

export default function Home({ apiResponse }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <section className="articles">
        <div className='header'></div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 max-w-[1660px] w-full mx-auto ">
          {apiResponse?.data?.map((article) => (
            <Link
              href={`/articles/${encodeURIComponent(article.attributes.slug)}`}
              key={article.attributes.title}
              className='lg:w-[100%] md:max-w-full w-full min-h-[330px] rounded-[4px] hover:scale-[1.01] transition-all cursor-pointer block mb-4"'>
              <Card className='overflow-hidden border-none shadow-none'>
                {/* <CardHeader>
              <CardTitle>{article.attributes.title}</CardTitle>
              <CardDescription>By {article.attributes.createdBy.data.attributes.firstname}</CardDescription>
            </CardHeader> */}
                <CardContent className='p-0'>
                  <div className='h-[330px] w-full'>
                    <Image
                      priority
                      src={`http:127.0.0.1:1337${article.attributes.featuredImage.data.attributes.url}`}
                      alt={article.attributes.featuredImage.data.attributes.name}
                      width={300}
                      height={300}
                      style={{ objectFit: "cover", objectPosition: "top", height: "100%", width: "100%" }}
                      className='rounded-lg'
                      quality={80}
                      placeholder="empty" />
                  </div>
                </CardContent>
                <CardFooter className='py-4 px-0 flex flex-col items-start'>
                  <div className="meta flex items-center justify-between w-full">
                    <Badge className='text-xs font-normal'>GENERAL</Badge>
                    <span className='text-sm font-normal w-[max-content]'>31 August 2023</span>
                  </div>
                  <h4 className='mt-3 text-[18px]'>{article.attributes.title}</h4>
                  <p className='!mt-0 text-sm'>{article.attributes.description}</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>

    </main>
  )
}
