import Card1 from './Card1'
import Card2 from './Card2'
function Home() {


    return (
        <>
            <div className=' text-center my-10'>
                <p className="text-3xl tracking-wider">Pricing</p>
                <p className="text-gray-500">4 out of 5 professionals said that intervue was <span className='font-bold text-black'>‘not that expensive’</span>.</p>
                <p className="text-gray-500">Don’t be that one person, Checkout our plans</p>
            </div>

            <div className='md:flex   gap-3 justify-center'>
                <div>
                    <p className=" mt-5 flex gap-2 items-center text-xl font-bold text-gray-500"><span>
                        <img className="flex lg:hidden" width={"20px"} src="https://www.svgrepo.com/show/13695/star.svg" alt="star" />
                    </span>Outsource interviews</p>
                    <p className="text-gray-500">Expert interviewers to take interviews on your behalf</p>
                    <Card1 />
                </div>
                <div>
                    <p className=" mt-5 flex gap-2 items-center text-xl font-bold text-gray-500"><span>
                        <img className="flex lg:hidden" width={"20px"} src="https://www.svgrepo.com/show/13695/star.svg" alt="star" />
                    </span>Platform</p>
                    <p className="text-gray-500">Platform</p>
                    <Card2 />
                </div>
            </div>
        </>
    )
}

export default Home;