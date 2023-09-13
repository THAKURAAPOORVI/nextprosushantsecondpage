"use client"
import React ,{useState} from "react";
import "../CSS/Carsection.css";
import Image from "next/image";
const Carsection = () => {
  const [isReadMoreVisible, setIsReadMoreVisible] = useState(false);

  const toggleReadMore = () => {
    setIsReadMoreVisible(!isReadMoreVisible);
  };
  return (
    <>
      <div className="container  w-full">
        <div className="image w-full">
          <Image
            src="/asset/ferrari.png" // Path relative to the public directory
            alt="Next Image"
            layout="responsive"
            width={300}
            height={200}
            className="image-with-margin"
          />
        </div>
      </div>

      {/* nextpart   */}

      <div class="p-4">
        <div class="flex justify-between">
          {/* <div class="w-7/12 ml-44 mt-8">
            <h1 class="text-2xl font-bold">Description</h1>
            <h4 class="mt-4 w-[29rem] text-gray-600">
              This is a handsome and substantially restored example of the
              characterful and highly sought-after Mercedes-Benz 250 SL. While
              some attention could next be paid to the interior to restore the
              vehicle to its full former glory, this stylish 1960s convertible
              is offered with an appealing specification, and is ready to
              delight another enthusiast.
            </h4>
          </div> */}
        <div className="w-7/12 ml-44 mt-8">
  <h1 className="text-2xl font-bold">Description</h1>
  <h4 className={`mt-4 w-[29rem] text-gray-600 ${isReadMoreVisible ? '' : 'truncate'}`}>
    This is a handsome and substantially restored example of the characterful
    and highly sought-after Mercedes-Benz 250 SL. While some attention could
    next be paid to the interior to restore the vehicle to its full former
    glory, this stylish 1960s convertible is offered with an appealing
    specification, and is ready to delight another enthusiast.
   
       
       
   
  </h4>
 
 
  <hr className="border-t border-gray-300 w-[29rem] mt-7" />
  
  <h1 className="text-2xl font-bold mt-9">Mileage</h1>
  <h4 className="w-[29rem] text-gray-600 mt-5">This car had done 100,000 miles at its last MOT on DATE with 10,000 of those in the <strong className="text-black">past year</strong> </h4>
  <hr className="border-t border-gray-300 w-[29rem] mt-7" />
  <h1 className="text-2xl font-bold mt-9">Average price</h1>
  <h4 className=" text-gray-600 mt-5">Average price for all vehicles of this type In the last <strong className="text-black"> 12 months </strong> </h4>
<div class="flex mt-7 ">
  <div class="text-5xl">
    <h1 class="text-5xl md:text-2xl">£35,000</h1>
    <h5 class="text-md md:text-sm text-gray-600 mt-3">From Auction</h5>
  </div>

  <div class="mx-60">
  <h1 class="text-5xl md:text-2xl">£28,000</h1>
  <h5 class="text-md md:text-sm text-gray-600 whitespace-nowrap mt-3">From Classified listings</h5>
</div>
</div>
<hr className="border-t border-gray-300 w-[31rem] mt-7" />
<div className="block">
          <h1>Price history</h1>
         </div>
</div>

    {/* right side partt  */}

          <div class="w-1 h-screen border-l  mt-9 border-gray-300 mx-8"></div>
          <div class="w-5/12 mt-8 font-bold">
            <h1>Car specifications</h1>
            <div class="mt-4">
              <h3 class="font-normal text-gray-600 uppercase">Make</h3>
              <h5 class="font-medium">Mercedes-Benz</h5>
              <h3 class="font-normal text-gray-600 mt-4 uppercase">Model</h3>
              <h5 class="font-medium">Pagoda</h5>
              <h3 class="font-normal text-gray-600 mt-4 uppercase">Year</h3>
              <h5 class="font-medium">1967</h5>
              <h3 class="font-normal text-gray-600 mt-4 uppercase">Reg</h3>
              <h5 class="font-medium">NSC 215F</h5>
              <h3 class="font-normal text-gray-600 mt-4 uppercase">
                Driver’s side
              </h3>
              <h5 class="font-medium">LHD</h5>
              <h3 class="font-normal text-gray-600 mt-4 uppercase">Mileage</h3>
              <h5 class="font-medium">65/88 kw/hp</h5>
              <h3 class="font-normal text-gray-600 mt-4 uppercase">Location</h3>
              <h5 class="font-medium mt-3"> <Image src='/asset/flag.png' width={20} height={20}></Image> </h5>
            </div>
          
          </div>
         
          
        </div>
      </div>
    </>
  );
};

export default Carsection;
