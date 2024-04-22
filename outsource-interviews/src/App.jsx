
import CardsOutsource from './components/CardsOutsource'
import FaqsOutsource from './components/FaqsOutsource'
import VideoOutsource from './components/VideoOutsource'


function App() {


  return (
    <>
      <VideoOutsource />
      <h1 className='text-2xl md:text-4xl text-gray-900 text-center'>Explore more products on intervue</h1>
      <CardsOutsource />
      <FaqsOutsource />
    </>
  )
}

export default App;
