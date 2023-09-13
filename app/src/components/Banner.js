import React from 'react'
import '../Css/Banner.css'
import Image from 'next/image'



const Banner = ({ imageUrl, title, EndTime, CurrentPrice, numberOfBids, driveMode, numberOfMiles, description }) => {
    return (
        <>
     
            <div className='cardsection'>
                <div className="card">
                    <div className="card-image">
                        <Image className='cardimg' src={imageUrl} sizes="100vw" alt={title} width={0} height={0} style={{ width: '100%', height: 'auto' }}/>
                    </div>
                    <div className='radiopill'>
                    <div className='main-pill'>
                        <div className='pill-text row'>
                            {/* <div className='col-4 para-text'>
                                    <p>Ends in</p>
                                    <h1 className='time'>{EndTime}</h1>

                                </div> */}

                            <div className='col-4 currentbid'>
                                <p  className='endsin'>ENDS IN</p>
                                <p className='endstime'>{EndTime}</p>
                            </div>
                            <span  className='bar'>|</span>
                            <div className='col-4 currentbid'>
                                <p className='currentsbids'>CURRENT BID</p>
                                <p className='rupess'>£ {CurrentPrice}</p>
                            </div>
                                 <span className='bar'>|</span>
                            <div className='col-4'>
                                <p className='bids'>
                                    BIDS
                                </p>
                                <p className='notime'>{numberOfBids}</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="card-content">

                        <div className='TITLE-DESC '>
                            <h2 className="card-title">{title}</h2>
                            <p className="card-description">{description}</p>

                        </div>

                        <div className='row lastrow'>
                            <div className='col-4 last-col'>
                                <div className='wheelimg'>
                                    <span><Image src='/asset/wheel (2).png' width={17} height={17}></Image> </span><span className='lhd' style={{ marginLeft: "21px" }}><h5>{driveMode}</h5></span>
                                </div></div>
                                 <span  className='bar'>|</span>

                            <div className='col-4 speedimg speedometer'>
                                <span><Image src='/asset/icon miles.png' width={23} height={14}></Image> </span><span className='speeds' style={{ marginLeft: "21px" }}><h5>{numberOfMiles} Miles</h5></span>
                            </div>
                                 <span  className='bar'>|</span>
                            <div className='col-4'>
                                <span><Image src='/asset/flag.png' width={20} height={20}></Image> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
          
        </>
    )
}

export default Banner