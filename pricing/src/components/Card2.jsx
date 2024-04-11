import React from 'react'
import { cardData2 } from '../CardData/CardData'

function Card2() {

    return (
        <>
            {
                cardData2.map((items) => (
                    <div  key={items.id} className="mt-2" >
                        <div className="max-w-lg mb-3 px-4 flex gap-3 border border-gray-300 rounded-md overflow-hidden items-center justify-end  hover:bg-gray-100 cursor-pointer">

                            <div className="bg-red-600 px-4 text-white font-bold rounded-md">
                                <h1>{items.textIcon}</h1>
                            </div>

                            <div className="flex flex-col gap-1 py-2">
                                <p className="text-md font-semibold">{items.description}</p>
                                <p className="text-gray-500">{items.heading} </p>
                            </div>

                            <div className="flex flex-col gap-1 py-2">
                                <svg width="1.3333em" height="1em" viewBox="0 0 16 12" fill="none" xmlns={items.svgicon}><path d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </div>


                        </div>
                        <div className=" max-w-lg px-4 flex gap-3 border border-gray-300 rounded-md overflow-hidden items-center justify-end  hover:bg-gray-100">
                            <div className="flex flex-col gap-1 py-2">
                                <svg width="1.3333em" height="1em" viewBox="0 0 16 12" fill="none" xmlns={items.svgicon}><path d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    )
}

export default Card2;
