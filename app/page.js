import Image from 'next/image'
import Header from './src/components/Header'
import CallBanner from './src/components/CallBanner'
import Abc from './src/components/Slider'
import Listing from './src/components/Listing'
export default function Home() {
  return (
    <>
    <div className='w-100'>
    <div className='main'>
     {/* <Header/> 
     <CallBanner/> */}
    {/* <Abc/>  */}
    <Listing/>
    
        </div></div>
    </>
  )
}
