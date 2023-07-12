import React from 'react'
import HomeHeader from './components/home-header'
import Image from 'next/image'
import HomeSearch from './components/home-search'

export default function Home() {
  return (
    <>
      {/*header*/}
      <HomeHeader/>

      {/*body*/}

      <div className='flex flex-col items-center mt-24'>
        <Image
          alt="google"
          width="300"
          height="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
        />

        <HomeSearch/>
      </div>
    </>
  )
}

