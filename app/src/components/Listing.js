// import React from 'react'
// import '../CSS/Listing.css'
// const Listing = () => {
//   return (
//   <>
//  <div className='mainarea'>
//  <div className='coverarea'>
//   <div className='row mainrowarea'>
//   <div className='col-lg-4'>
//     <div className='previouscar'> <p style={{color:"#E8DECF"}}>Previous car</p>
// </div>

// <div className='icimage'> 
//   <div className='imgpart'>
//         <img src='../asset/leftarrow.png'></img>
//     </div>
//     <div className='mer'>
//         <h3 style={{color:"#E8DECF"}}>1973 Mercedez Benz</h3>
//     </div>
//  </div>
//  </div>

//  <div className='col-lg-4'>
//     {/* <div className='previouscar'> <p style={{color:"#E8DECF"}}>Previous car</p>
// </div> */}

// <div className='closeimage'>   <div className='closebutton'>
//         <img src='../asset/closebutton.png'></img>
//     </div>
//     <div className='cls'>
//         <h3 style={{color:"#E8DECF"}}>Close</h3>
//     </div>
//  </div>
//  </div>






//  <div className='col-lg-4'>
//     <div className='previouscar'> <p style={{color:"#E8DECF"}}>Previous car</p>
// </div>

// <div className='icimage'>   <div>
//         <img src='../asset/leftarrow.png'></img>
//     </div>
//     <div className='mer'>
//         <h3 style={{color:"#E8DECF"}}>1973 Mercedez Benz</h3>
//     </div>
//  </div>
//  </div>

//     </div>


//   </div>


//   <div className='containerbox'>
//     <div className='headingarea'>
//         <h1>
//         1967 Mercedes-Benz 250 SL Pagoda
//         </h1>
//         <div className='heading4'>
//         <h4>A largely original example of this stylish 1970s coupe, refinished in a classic period colour.</h4>
//     </div>
//   </div>
//   </div>


//     {/* cell part  */}
// <div className='conbox'>

//     <div className='cellpart'>
//         <div className='pillarea'>
//             <div className='row'>
//                 <div className='col-3'>
               
//                 </div>
//                 <div className='col-3'>
//                     dfd
//                 </div>
//                 <div className='col-3'>
//                     dfd
//                 </div>
//                 <div className='col-3'>
//                     dfd
//                 </div>
//             </div>
//         </div>
//     </div>
//   </div>
//   </div>
  
  

  

  
  
  
//   </>
//   )
// }

// export default Listing
import React from "react";
import "../CSS/Listing.css";
import Carsection from "./Carsection";
import Image from "next/image";
const Listing = () => {
  return (
    <>
      <div className="headersection">
        <div className="rowheader">
          <div className="col-4">
            <div className="firstpart">
                <div className="previouscar">
                    <text>Previous car</text>
                </div>
                <div className="arrbenz">
              <div className="imagepart">
                <Image src="/asset/leftside.png" width={27} height={19}></Image>
              </div>
              <div className="benz">
                <text>1973 Mercedez Benz</text>
              </div>
             
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="firstpart">
              <div className="closeimage">
                <Image src="/asset/cross.png" width={28} height={30}></Image>
              </div>
              <div className="benz">
                <text>Close</text>
              </div>
             
            </div>
          </div>
          <div className="col-4">
            <div className="firstpart">
            <div className="nextcar">
                    <text>Next car</text>
                </div>
              <div className="arrbenz">
              <div className="benz">
                <text>Porsche 911 Carrera</text>
              </div>
              <div className="imagenextcar">
                <Image  src="/asset/buttonlastarrow.png" width={27} height={19}></Image>
              </div>
             
             
              </div>
            </div>
          </div>
        </div>
        <section className="pt-4">
        <div class="container mt-5">
<h1 className="fira-sans">1967 Mercedes-Benz 250 SL Pagoda</h1>
<div className="founders">
<h1 className="
Founders-Grotesk">A largely original example of this stylish 1970s coupe, refinished in a classic period colour.</h1>
<div className="x">
  <div className="rounded-full">
    <div className="rowcol">
      <div className="col-3">
        <h1 className="text-current	">ENDS IN</h1>
        <h1 className="timeperiod">6:05:35</h1>
      </div>
      <span className="line"></span>
      <div className="col-3">
        <h1 className="text-current	">CURRENT BID</h1>
        <h1 className="price">£35,000</h1>
      </div>
      <span className="line"></span>
      <div className="col-3">
        <h1 className="text-current	">BIDS</h1>
        <h1 className="timeperiod">11</h1>
      </div>
     <div className="bgcolor">
      <div className="col-3 ">
        <h1 className="text-current bidnow	">Bid Now</h1>
        <h1 className="site">(collectingcars.com)</h1></div>
      </div>
    </div>
  </div>
</div>
</div></div></section>
      </div>
<Carsection/>

    
     
    </>
  );
};

export default Listing;