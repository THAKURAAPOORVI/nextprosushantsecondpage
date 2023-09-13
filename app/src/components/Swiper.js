import { Swiper, SwiperSlide } from 'swiper/react';
import Recentlysold from './Recentlysold';
import RecentlyUnsold from './RecentlyUnsold';
import Banner from './Banner';
import 'swiper/css';
import 'swiper/css/pagination';
import '../CSS/swiper.css';

const solddata = [
    {
        "image": "../asset/Bitmap (1).png",
        "soldPrice": "270000",
        "numberOfBids": 5,
        "currentBidPrice": 15000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 25000,
        "countryIconImage": "https://example.com/flags/usa.png"
    },
    {

        "image": "../asset/2007.png",
        "soldPrice": "270000",
        "numberOfBids": 12,
        "currentBidPrice": 27000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 1500,
        "countryIconImage": "https://example.com/flags/china.png"
    },
    {
        "image": "../asset/Bitmap (1).png",
        "soldPrice": "270000",
        "numberOfBids": 5,
        "currentBidPrice": 15000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 25000,
        "countryIconImage": "https://example.com/flags/usa.png"
    },
    {

        "image": "../asset/2007.png",
        "soldPrice": "270000",
        "numberOfBids": 12,
        "currentBidPrice": 27000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 1500,
        "countryIconImage": "https://example.com/flags/china.png"
    },  {
        "image": "../asset/Bitmap (1).png",
        "soldPrice": "270000",
        "numberOfBids": 5,
        "currentBidPrice": 15000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 25000,
        "countryIconImage": "https://example.com/flags/usa.png"
    },
    {

        "image": "../asset/2007.png",
        "soldPrice": "270000",
        "numberOfBids": 12,
        "currentBidPrice": 27000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 1500,
        "countryIconImage": "https://example.com/flags/china.png"
    }

]

const unsolddata = [
    {
        "image": "../asset/Bitmap (1).png",
        "status": "Unsold",
        "numberOfBids": 5,
        "currentBidPrice": 15000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 25000,
        "countryIconImage": "https://example.com/flags/usa.png"
    },
    {
        "image": "../asset/americascope.png",
        "status": "Unsold",
        "numberOfBids": 10,
        "currentBidPrice": 18000,
        "title": "America Sport Coupe",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "RHD",
        "numberOfMiles": 15000,
        "countryIconImage": "https://example.com/flags/uk.png"
    },
    {
        "image": "../asset/porsche2.png",
        "status": "Unsold",
        "numberOfBids": 3,
        "currentBidPrice": 12000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 30000,
        "countryIconImage": "https://example.com/flags/germany.png"
    },
    {
        "image": "../asset/ferrari.png",
        "status": "Unsold",
        "numberOfBids": 7,
        "currentBidPrice": 22000,
        "title": "Ferrari 250 GT Lusso 1964 ",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 40000,
        "countryIconImage": "https://example.com/flags/canada.png"
    },
    {
        "image": "../asset/rollsro.png",
        "status": "Unsold",
        "numberOfBids": 2,
        "currentBidPrice": 13500,
        "title": "Rolls-Royce Ghost 2016 ",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "RHD",
        "numberOfMiles": 12000,
        "countryIconImage": "https://example.com/flags/japan.png"
    },
    {
        "image": "../asset/214turbo.png",
        "status": "Unsold",
        "numberOfBids": 4,
        "currentBidPrice": 9000,
        "title": "2014 | Porsche 911 Turbo",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 5000,
        "countryIconImage": "https://example.com/flags/france.png"
    },
    {
        "image": "../asset/lg.png",
        "status": "Unsold",
        "numberOfBids": 6,
        "currentBidPrice": 15800,
        "title": "Lamborghini Aventador LP 780-4 ",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "RHD",
        "numberOfMiles": 18000,
        "countryIconImage": "https://example.com/flags/italy.png"
    },
    {
        "image": "../asset/2009pr.png",
        "status": "Unsold",
        "numberOfBids": 9,
        "currentBidPrice": 10500,
        "title": "2009 | Porsche 911 Carrera",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 32000,
        "countryIconImage": "https://example.com/flags/spain.png"
    },
    {
        "image": "../asset/1973.png",
        "status": "Unsold",
        "numberOfBids": 1,
        "currentBidPrice": 7500,
        "title": "1973 BMW 3.0",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "RHD",
        "numberOfMiles": 8000,
        "countryIconImage": "https://example.com/flags/australia.png"
    },
    {
        "image": "../asset/2007.png",
        "status": "Unsold",
        "numberOfBids": 12,
        "currentBidPrice": 27000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 1500,
        "countryIconImage": "https://example.com/flags/china.png"
    }
]






const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {/* Sold Data */}
        <SwiperSlide className={SwiperSlide}>
          {solddata.map((item, index) => (
            <Recentlysold
              key={index}
              imageUrl={item.image}
              soldPrice={item.soldPrice}
              CurrentPrice={item.currentBidPrice}
              numberOfBids={item.numberOfBids}
              title={item.title}
              description={item.subheading}
              driveMode={item.lhdOrRhdDrive}
              numberOfMiles={item.numberOfMiles}
            />
          ))}
        </SwiperSlide>

        {/* Unsold Data */}
        <SwiperSlide className={SwiperSlide}>
          {unsolddata.map((item, index) => (
            <RecentlyUnsold
              key={index}
              imageUrl={item.image}
              status={item.status}
              CurrentPrice={item.currentBidPrice}
              numberOfBids={item.numberOfBids}
              title={item.title}
              description={item.subheading}
              driveMode={item.lhdOrRhdDrive}
              numberOfMiles={item.numberOfMiles}
            />
          ))}
        </SwiperSlide>

        {/* Coming Soon Data
        <SwiperSlide className={SwiperSlide}>
          {comingSoonData.map((item, index) => (
            <ComingSoonComponent
              key={index}
              imageUrl={item.image}
              
            />
          ))}
        </SwiperSlide> */}

        {/* Other Slides */}
        <SwiperSlide className={SwiperSlide}>
          {/* Content for other slides */}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
