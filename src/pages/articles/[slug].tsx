import React from 'react'
import { useRouter } from 'next/router'

const Articles = () => {
  const router = useRouter()
  return (
    <div className='font-sans'>Article: {router.query.slug}</div>
  )
}

export default Articles