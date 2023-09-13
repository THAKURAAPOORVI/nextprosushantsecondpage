import React from 'react'
import '../Css/Banner.css'
import Image from 'next/image'

const RecentlyUnsold = ({ imageUrl, title, EndTime, status,CurrentPrice, numberOfBids, driveMode, numberOfMiles, description }) => {
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
                                <p>STATUS</p>
                                <p className='endstime'>{status}</p>
                            </div>
                            <span style={{color:'#f0f0f0'}}>|</span>
                            <div className='col-4 currentbid'>
                                <p>CURRENT BID</p>
                                <p className='rupess'>£ {CurrentPrice}</p>
                            </div>
                            <span style={{color:'#f0f0f0'}}>|</span>
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
                                    <span>
                                        <img src='../asset/wheel (2).png'>
                                        </img> </span><span className='lhd' style={{ marginLeft: "21px" }}><h5>{driveMode}</h5></span>
                                </div></div>
                            <span style={{color:'#f0f0f0'}}>|</span>

                            <div className='col-4 speedimg speedometer'>
                                <span><img src='../asset/icon miles.png'></img> </span><span className='speeds' style={{ marginLeft: "21px" }}><h5>{numberOfMiles} Miles</h5></span>
                            </div>
                            <span style={{color:'#f0f0f0'}}>|</span>
                            <div className='col-4'>
                                <span><img src='../asset/flag.png'></img> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default RecentlyUnsold