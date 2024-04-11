import React from 'react'
import {Link} from "react-router-dom"
function Cart() {
  return (
    <>
      <div class="lg:flex gap-5 p-10 mr-4 bg-gray-100">

        <div class="">
          <img className='' src="https://dersyb7nfifdf.cloudfront.net/dev/2146/4158d6c4-c018-42b0-95bd-a1c9dd36dc41.png" alt="Lip-sync detection during the interview" data-aos="fade-up" data-aos-offset="100" draggable="false"></img>
        </div>

        <div className='max-w-xl '>
          <p class="mb-2 text-4xl">Lip-sync detection during the interview</p>
          <p class="mb-4 text-gray-800">During the interview, a candidate can engage with someone for help over a remote connection using a tool like Anydesk or Teamviewer. Our interviewing environment detects the presence of a remote environment and nudges the interviewer. Interviewers are also trained to catch candidates that lip-sync during the interview</p>
          <Link to={"/signup/page"}><button className=" flex items-center gap-2 px-4 py-3 font-semibold bg-black text-white rounded-full hover:bg-gray-600">Request now <svg width="1.3333em" height="1em" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></Link>
        </div>

      </div>
    </>
  )
}

export default Cart;
