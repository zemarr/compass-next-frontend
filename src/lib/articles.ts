import {
    ImageFormat,
    FeaturedImage,
    User,
    ArticleAttributes,
    Article,
    Pagination,
    Meta,
    ApiResponse
} from '@/lib/types'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import axios from 'axios'

export async function getArticles() {
    // Fetch data from endpoint
    const res = await fetch('http://localhost:1337/api/articles')
    if (!res.ok) throw new Error('Failed to fetch articles data')
}