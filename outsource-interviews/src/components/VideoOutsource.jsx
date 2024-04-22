import React from 'react'

function VideoOutsource() {
  return (
   <>
    <div className='w-full md:flex justify-center items-center gap-3 mt-10 mb-10'>
      <div className='w-full relative'>
<video className='rounded-r-full' disablePictureInPicture autoPlay loop muted src="https://d26rchw36216zf.cloudfront.net/public/assets/homepage_temp_assets/b970b78d-517b-4a9e-be2f-fad79e018e5a.mp4">
</video>
<button className='absolute inset-0 flex items-center justify-center'>▶</button>
      </div>
      <div className='mt-5 md:mt-0 p-5'>
        <p className='mb-5 text-gray-800'>After interviewing qualified candidates on Intervue, we were able to convert at least 5% of people from our application base to hires.</p>
        <p className='font-bold'>Niket Gupta</p>
        <p className='mb-2 text-gray-800'>Group head of talent acquisition, Yubi</p>
        <div className='flex gap-2 items-center text-blue-600 font-bold cursor-pointer border-b-4 border-transparent hover:border-blue-500 transition duration-300'>
        <p>See more customer stories </p> <svg width="1.3333em" height="1em" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
      </div>
      </div>
   </>
  )
}

export default VideoOutsource;
