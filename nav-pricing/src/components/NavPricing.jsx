import React from 'react'
import NavPricingCard from './NavPricingCard';

function NavPricing() {
    return (
        <>
            <div className='w-full'>
                <div className='text-center text-gray-800'>
                    <h1 className='my-5 text-4xl' >Pricing</h1>
                    <p className='my-5 max-w-lg mx-auto'>4 out of 5 professionals said that intervue was <span className='font-bold'>‘not that expensive’</span>.
                        Don't be that one person, checkout our plans</p>
                    <div className="flex px-2 justify-center">
                        <button
                            className=" flex items-center  gap-2 bg-gray-300 text-gray-600 antialiased font-bold hover:bg-gray-400  px-4 py-4">
                            <img src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64acff23b879772c572488ed_on-demand.svg" alt="on-demand"></img>
                            Outsource interviews
                        </button>
                        <button
                            className=" flex items-center  gap-2 bg-gray-200 font-bold text-gray-600 hover:bg-gray-400 px-4 py-4">
                            <img src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64acff233343f7de91af31cb_live-interviews.svg" alt="live-interview"></img>
                            Evaluation platform
                        </button>
                    </div>
                </div>

                <p className='text-xl font-semibold mt-10 mx-5'>Outsource interviews</p>
                <p className='text-gray-500 mb-10 mx-5'>Save 90% of engineering & recruitment bandwidth, outsource candidate interviews to us</p>

                <NavPricingCard />

            </div>
            <div class="container-fluid main">
        
        <div class="container cont1 m-5 w-1/2">
           <h1 class="text-4xl font-bold">Why should I buy a paid <br/> plan?</h1>
           <p class="text-muted text-gray-600">Our free plans have a limit of max 3 interviews/assignments per day. In addition to that you have unlimited access to interview playback and history that you can access in our paid plans. To see a detailed comparison, refer the chart above.</p>
        </div>

        <div class="container cont2 mt-5">
            <hr/>
            <div class="item m-4 text-lg">
                <div class="question flex items-center">
                    <div class="content ">Will I be charged for a test invite that the candidate did not attempt?</div>
                    <div class="icon ms-auto" id="i1"><i class="fas fa-plus"></i></div>
                </div>
                <div id="answer1"></div>
            </div>
            <hr/>

           
            <div class="item m-4 text-lg">
                <div class="question flex items-center">
                    <div class="content">Can I add more team members than my limit on the plan?</div>
                    <div class="icon ms-auto" id="i2"><i class="fas fa-plus"></i></div>
                </div>
                <div id="answer2"></div>
            </div>
            <hr/>

           
            <div class="item m-4 text-lg">
                <div class="question flex items-center">
                    <div class="content">When is an interview deducted from my quota?</div>
                    <div class="icon ms-auto" id="i3"><i class="fas fa-plus"></i></div>
                </div>
                <div id="answer3"></div>
            </div>
            <hr/>

    
            <div class="item m-4 text-lg">
                <div class="question flex items-center">
                    <div class="content">Why should I buy a paid plan?</div>
                    <div class="icon ms-auto" id="i4"><i class="fas fa-plus"></i></div>
                </div>
                <div id="answer4"></div>
            </div>
            <hr/>

           
            <div class="item m-4 text-lg">
                <div class="question flex items-center">
                    <div class="content">What are my payment options?</div>
                    <div class="icon ms-auto" id="i5"><i class="fas fa-plus"></i></div>
                </div>
                <div id="answer5"></div>
            </div>
            <hr/>

        
            <div class="item m-4 text-lg">
                <div class="question flex items-center">
                    <div class="content">Can we take concurrent interviews on one account?</div>
                    <div class="icon ms-auto" id="i6"><i class="fas fa-plus"></i></div>
                </div>
                <div id="answer6"></div>
            </div>
            <hr/>

          
            <div class="item m-4 text-lg">
                <div class="question flex items-center">
                    <div class="content">What happens when I add my team members?</div>
                    <div class="icon ms-auto" id="i7"><i class="fas fa-plus"></i></div>
                </div>
                <div id="answer7"></div>
            </div>
            <hr/>

            
            <div class="item m-4 text-lg">
                <div class="question flex items-center">
                    <div class="content">How is interview on Intervue different than zoom, google meets and teams?</div>
                    <div class="icon ms-auto" id="i8"><i class="fas fa-plus"></i></div>
                </div>
                <div id="answer8"></div>
            </div>
            <hr/>

       
            <div class="item m-4 text-lg">
                <div class="question flex items-center">
                    <div class="content">Is the interview and assignment quota in my plan same?</div>
                    <div class="icon ms-auto" id="i9"><i class="fas fa-plus"></i></div>
                </div>
                <div id="answer9"></div>
            </div>
            <hr/>

        </div>

    </div>
        </>
    )
}

export default NavPricing;
