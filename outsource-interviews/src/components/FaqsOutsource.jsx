import Faq from "./Faq";


function FaqsOutsource() {

  const data = [
    {
      id: 1,
      title: "What is interview as a service?",
      content: "Interview as a Service involves delegating the initial rounds of detailed technical interviews to industry experts. This approach ensures that your in-house hiring team engages with a select group of highly qualified candidates, enhancing the efficiency of the interview-to-job offer conversion process."
    },
    {
      id: 2,
      title: "Who are some top Interview as a Service companies in India",
      content: "Intervue is one of the top Intervue as a Service Companies in India. Headquatered in Bangalore, top companies often choose Intervue's Interview-as-a-Service platform for two key reasons: cost savings and expedited hiring procedures."
    },
    {
      id: 3,
      title: "How do I schedule an interview?",
      content: "Go to intervue.io/homepage and select the profile and rounds you want to schedule the interview for. Add qualified candidate and company details and click 'Schedule Interview."
    },
    {
      id: 4,
      title: "Will I be charged per interview?",
      content: "For interview as a service solution, you will get paid credits to use per month."
    },
    {
      id: 5,
      title: "Can I get a free trial for Interviews as a Service platform?",
      content: "Yes! Enjoy 2 free credits (1 credt = 1 interview) or you can reach out to us."
    }

  ]

  return (
    <>
      <div className=' bg-pink-100 w-full mt-20 md:flex mb-20'>

        <div className='mt-20 p-5 md:w-96'>
          <p className=' text-gray-900 text-3xl mb-10'>FAQs</p>
          <p className='mb-5 text-gray-800'>Some frequently asked questions related to Interview as a Service to clear all your doubts.</p>

          <p className='text-xl text-gray-800'>Still have doubts?</p>
          <div className='flex gap-2 items-center text-blue-600 font-bold cursor-pointer border-b-4 border-transparent hover:border-blue-500 transition duration-300'>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.85615 5.75397C4.32676 6.60709 4.86917 7.42586 5.57338 8.17249C6.27987 8.9237 7.15843 9.60734 8.29565 10.1914C8.37997 10.2326 8.45974 10.2326 8.53153 10.204C8.63978 10.1627 8.75031 10.0723 8.85856 9.96348C8.94289 9.87874 9.04772 9.74361 9.15711 9.59589C9.59468 9.0176 10.1359 8.2996 10.9006 8.65917C10.9176 8.66719 10.9302 8.67635 10.9473 8.68322L13.4975 10.157C13.5055 10.1616 13.5146 10.1696 13.5214 10.1742C13.8576 10.4066 13.9966 10.7651 14 11.1716C14 11.585 13.8484 12.0499 13.6262 12.4427C13.3323 12.9614 12.8992 13.305 12.4001 13.5317C11.925 13.7516 11.3962 13.8695 10.888 13.9451C10.0904 14.0631 9.34285 13.9875 8.57825 13.7516C7.83073 13.5191 7.07752 13.1355 6.2548 12.6248L6.19441 12.5858C5.81723 12.3488 5.40929 12.0957 5.00932 11.7968C3.5462 10.6861 2.05459 9.08173 1.0826 7.31593C0.267855 5.83413 -0.176552 4.23438 0.0661625 2.7102C0.200624 1.87426 0.557288 1.11389 1.17946 0.612319C1.72186 0.172588 2.45228 -0.0678901 3.39807 0.0168497C3.50632 0.0248657 3.60318 0.087848 3.65446 0.181749L5.28964 2.95984C5.52894 3.27132 5.55857 3.5805 5.42752 3.88969C5.31927 4.14277 5.10048 4.37637 4.80194 4.59395C4.71419 4.66953 4.60936 4.74625 4.49883 4.82641C4.13305 5.09323 3.71713 5.40127 3.85957 5.76313L3.85615 5.75397Z" fill="currentColor"></path></svg><p>See more customer stories </p>
          </div>
        </div>
        <div className="block w-full mt-20 px-5">
          {
            data.map((items) => (
              <Faq key={items.id} items={items} />
            ))
          }

        </div>

      </div>
    </>
  )
}

export default FaqsOutsource;





