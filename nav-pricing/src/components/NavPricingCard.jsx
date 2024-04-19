import React from 'react'

function NavPricingCard() {
  const data = [

    {
      id: 1,
      heading: "FAANG",
      description: "Interviewers who have built the best tech products in the world",
      logoImg: "https://dersyb7nfifdf.cloudfront.net/public/assets/interviewer/FAANG.jpg",
      svgPath: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
      svgPath1Content: "Interviewers from companies like Meta, Amazon, Apple, Google & Netflix",
      svgPath2Content: "Outsource your interviewing",
      svgPath3Content: "Detailed report & recording after the interview is done",
      svgPath4Content: "8 minutes to schedule an interview, 5 minutes to share the report",
      btnOne: " Evaluation platform",
      btnOneArrowLogo: "M13.586 7L8.293 1.707A1 1 0 019.707.293l7 7a1 1 0 010 1.414l-7 7a1 1 0 11-1.414-1.414L13.586 9H1a1 1 0 110-2h12.586z",
      btnTwo: "   Download plan details"
    },
    {
      id: 2,
      heading: "FAANG",
      description: "Interviewers who have built the best tech products in the world",
      logoImg: "https://dersyb7nfifdf.cloudfront.net/public/assets/interviewer/Hypergrowth.jpg",
      svgPath: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
      svgPath1Content: "Interviewers from companies like Meta, Amazon, Apple, Google & Netflix",
      svgPath2Content: "Outsource your interviewing",
      svgPath3Content: "Detailed report & recording after the interview is done",
      svgPath4Content: "8 minutes to schedule an interview, 5 minutes to share the report",
      btnOne: " Evaluation platform",
      btnOneArrowLogo: "M13.586 7L8.293 1.707A1 1 0 019.707.293l7 7a1 1 0 010 1.414l-7 7a1 1 0 11-1.414-1.414L13.586 9H1a1 1 0 110-2h12.586z",
      btnTwo: "   Download plan details"
    },
    {
      id: 3,
      heading: "FAANG",
      description: "Interviewers who have built the best tech products in the world",
      logoImg: "https://dersyb7nfifdf.cloudfront.net/public/assets/interviewer/Startups.jpg",
      svgPath: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
      svgPath1Content: "Interviewers from companies like Meta, Amazon, Apple, Google & Netflix",
      svgPath2Content: "Outsource your interviewing",
      svgPath3Content: "Detailed report & recording after the interview is done",
      svgPath4Content: "8 minutes to schedule an interview, 5 minutes to share the report",
      btnOne: " Evaluation platform",
      btnOneArrowLogo: "M13.586 7L8.293 1.707A1 1 0 019.707.293l7 7a1 1 0 010 1.414l-7 7a1 1 0 11-1.414-1.414L13.586 9H1a1 1 0 110-2h12.586z",
      btnTwo: "   Download plan details"
    },
    {
      id: 3,
      heading: "FAANG",
      description: "Interviewers who have built the best tech products in the world",
      logoImg: "https://dersyb7nfifdf.cloudfront.net/public/assets/interviewer/Product-based.jpg",
      svgPath: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
      svgPath1Content: "Interviewers from companies like Meta, Amazon, Apple, Google & Netflix",
      svgPath2Content: "Outsource your interviewing",
      svgPath3Content: "Detailed report & recording after the interview is done",
      svgPath4Content: "8 minutes to schedule an interview, 5 minutes to share the report",
      btnOne: " Evaluation platform",
      btnOneArrowLogo: "M13.586 7L8.293 1.707A1 1 0 019.707.293l7 7a1 1 0 010 1.414l-7 7a1 1 0 11-1.414-1.414L13.586 9H1a1 1 0 110-2h12.586z",
      btnTwo: "   Download plan details"
    }

  ]
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {
        data.map((items) => (
          <div key={items.id}>
            <div class="max-w-64 mx-auto border border-black   rounded-lg overflow-hidden shadow-lg">

              <div class="border-b px-4 pb-6">
                <div class=" my-4">
                  <h3 class="font-serif text-2xl text-gray-800  mb-1">{items.heading}</h3>
                  <p className='text-gray-500'>{items.description}</p>
                  <img class="h-20 w-20 rounded-full border-white dark:border-gray-800 mx-auto my-4"
                    src={items.logoImg} alt="" />
                </div>
              </div>

              <div class=" flex px-4 py-2 gap-2">
                <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="check" width="1.8em" height="1.6em" fill="currentColor" aria-hidden="true"><path d={items.svgPath} ></path></svg> <p className='fon  text-gray-700'>{items.svgPath1Content}</p>
              </div>
              <div class=" flex px-4 py-2 gap-2">
                <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="check" width="1rem" height="1.6em" fill="currentColor" aria-hidden="true"><path d={items.svgPath}></path></svg> <p className='fon  text-gray-700'>{items.svgPath2Content}</p>
              </div>
              <div class=" flex px-4 py-2 gap-2">
                <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="check" width="1.5rem" height="1.6em" fill="currentColor" aria-hidden="true"><path d={items.svgPath}></path></svg> <p className='fon  text-gray-700'>{items.svgPath3Content}</p>
              </div>
              <div class=" flex px-4 py-2 gap-2">
                <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="check" width="1.8em" height="1.6em" fill="currentColor" aria-hidden="true"><path d={items.svgPath}></path></svg> <p className='fon  text-gray-700'>{items.svgPath4Content}</p>
              </div>
              <div class="w-full">
                <button
                  className="min-w-60  m-auto mb-3 flex items-center justify-center  gap-2 bg-blue-500 font-bold text-white hover:bg-blue-400  py-3">
                  {items.btnOne}
                  <svg viewBox="0 0 17 16" width="1em" fill="currentColor"><path d={items.btnOneArrowLogo} ></path></svg>
                </button>
                <button
                  className="min-w-60  m-auto mb-5 flex items-center justify-center gap-2 font-bold border border-black px-3 py-3">
                  {items.btnTwo}

                </button>
              </div>

            </div>
          </div>

        ))
      }
    </div>
  )
}

export default NavPricingCard;
