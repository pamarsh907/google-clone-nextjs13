import React from 'react'
import ImageSearchResults from '@/app/components/image-search-results';

export default async function ImageSearchPage({searchParams}) {
  //added so not too many api requests are made
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image`
  )

  if(!response.ok){
    throw new Error("Something went wrong");
  }
  const data = await response.json()
  const results = data.items

  if(!results){
    return <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>No results found</h1>
        <p className='text-lg'>
            Try searching for something else or return to the {" "}
            <Link href="/" className='text-blue-500'>
                homepage
            </Link>
        </p>
    </div>
  }
    return (
    <div>
        {results && <ImageSearchResults results={data}/>}
    </div>
  )
}
