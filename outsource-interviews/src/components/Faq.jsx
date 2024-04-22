import React, { useState } from 'react'

function Faq({ items }) {
    const [faq, setFaq] = useState(false);
    return (
        <>
            <div className=' w-full'>

                <div className=' border-t-2 p-2 border-black'>
                    <button onClick={() => setFaq(!faq)} className='font-bold flex justify-between p-2 w-full items-center '>
                        <span>{items.title}</span>
                        {faq ? <span className='font-bold text-3xl'>-</span> : <span className='font-bold text-3xl' >+</span>}
                    </button>
                    <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${faq ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}>
                        <h1 className='overflow-hidden p-2'>{items.content}</h1>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Faq;
