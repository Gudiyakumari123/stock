import React, { useEffect, useState } from 'react'
import Home from './course/Home'
import v1 from "../video/6799742-uhd_2160_3840_30fps.mp4"
import v2 from "../video/5716227-uhd_2160_3840_30fps.mp4"
import v3 from "../video/6799666-uhd_3840_2160_30fps.mp4"
import v4 from "../video/6799748-uhd_2160_3840_30fps.mp4"
import v5 from "../video/7947481-hd_1920_1080_30fps.mp4"
import Courses from './course/Courses'
import Home2 from './course/Home2'
import Faq from './course/Faq'
import DigitalCourse from './course/DigitalCourse'
import TestiMain from './TestiMain'
import Carousel from './course/Carosel'
import { CourseCard } from './course/CourseCard'
import TestimonialH from './TestimonialH'
import NoSpeak from './NoSpeak'
function Dashboard() {

  const [count, setCount] = useState(0);
  const Cards=[
    {
        "count":'4000+',
        message:'Students Trained',
        img:'https://media.istockphoto.com/id/1040865674/photo/stock-market-report.jpg?s=612x612&w=0&k=20&c=QTt58tCVedSw3_dEipQIG9Xj8vXnhDR_285RNgMvZys='
    },
    {
        "count":'6000+',
        message:'Happy Review',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjdmr13k0eQB0U4YSqRbI5bMjrnH5a6g24BQ&s'
    },
    {
        "count":'9000+',
        message:'Support',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wpnCFzxL-NYxXY_7ZDPnVr-1OQafv_zXgg&s'
    },
    {
        "count":'50+',
        message:'Experienced Trainer',
        img:'data:image/jpeg;base64,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'

    }
]
  useEffect(() => {
      if (count < 1000) {
        const interval = setInterval(() => {
          setCount(prevCount => prevCount + 1);
        }, 20); // Adjust the interval speed here
        return () => clearInterval(interval);
      }
    }, [count]);
  return (
    <>
    <div>
      {/* section one that is home  */}
        <Carousel/>
        {/* <Home2/> */}



      {/* section two that is cards  */}
      {/* <section className="text-white bg-gray-900 py-10 mb-5 bg-[linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://media.istockphoto.com/id/1322479796/photo/glowing-light-market-chart-of-business-glowing-stock-graph-or-investment-financial-data.jpg?s=612x612&w=0&k=20&c=XuaFYq_mwNOeI8F8bXKYOQbrT3vHYIyA7WIC8Wmbun8=')] body-font">
  <div className="container px-5  mx-auto">
    <div className="flex flex-col text-center w-full ">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Numbers Speak for themselves</h1>
    </div>

    <div className="flex flex-wrap -m-2">

        {
            Cards.map((card)=>{
                return(<>
                  <div className="p-2 lg:w-1/4 md:w-1/2 w-full 
       text-white font-bold py-2 px-4 transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-110
      ">
        <div className="h-full flex items-center border-gray-800 hover:border-red-500 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={card.img}/>
          <div className="flex-grow">
            <h2 className="text-gray-600 text-[18px] title-font font-medium">{card.message}</h2>
            <p className=" text-2xl">{count}+</p>
          </div>
        </div>
      </div>
                </>)
            })
        }

    </div>
  </div>
    </section> */}
        <NoSpeak/>



      {/* section 3 that courses we offer  */}
      {/* <section className="text-gray-400 sm:rounded-3xl bg-gray-900 body-font mb-5">
  <div className="container px-5 py-10 mx-auto flex flex-wrap">
  <div className="flex flex-col text-center w-full ">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Courses We Offer</h1>
    </div>
    <div className="flex flex-wrap w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div className="flex relative pb-12 ">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0  w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="flex-grow bg-[#ffffff]  rounded-md pl-4 p-4 ml-4">
            <h2 className=" font-bold title-font text-lg text-black mb-1 tracking-wider">Stock Market Investment Course</h2>
            <p className="leading-relaxed mb-2">(Learn to Create Wealth)</p>
            <button className="bg-black text-white border hover:border-red-700 font-bold py-2 px-6 rounded-full transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-110">
     Register Now For 3000/
    </button>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow bg-[#ffffff]  rounded-md pl-4 p-4 ml-4">
            <h2 className=" font-bold title-font text-lg text-black mb-1 tracking-wider">Swing Trading Course</h2>
            <p className="leading-relaxed mb-2">(Learn to Create Wealth)</p>
            <button className="bg-black text-white border hover:border-red-700 font-bold py-2 px-6 rounded-full transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-110">
     Register Now For 3000/
    </button>
          </div>
        </div>
        
        
        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div className="flex-grow bg-[#ffffff]  rounded-md pl-4 p-4 ml-4">
            <h2 className=" font-bold title-font text-lg text-black mb-1 tracking-wider">Options Mastery Course</h2>
            <p className="leading-relaxed mb-2">(Learn to Create Wealth)</p>
            <button className="bg-black text-white border hover:border-red-700 font-bold py-2 px-6 rounded-full transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-110">
     Register Now For 3000/
    </button>
          </div>
        </div>
      </div>
      <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFM_ASQZJdO1CiB_sbUvDNKiXmyjYiXxioXQ&s"
       alt="step"/>
    </div>
  </div>
      </section> */}

      <DigitalCourse/>

      {/* section 4 that is course instructor  */}
      <section className="text-gray-400 bg-gray-900 body-font mb-5">

<div className="container px-5 py-10 mx-auto">
<div className="flex flex-col text-center w-full ">
      <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-white">Our <span className='text-[#FFAA33]'>Course</span>  Instructors</h1>
    </div>

  <div className="flex flex-wrap -mx-4 -mb-10 text-center">
    <div className="sm:w-1/2 mb-10 px-4">
      <div className="rounded-lg flex justify-center  overflow-hidden">
        <img alt="content" className=" object-center rounded-xl h-[150px] w-[150px]" src="data:image/jpeg;base64,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" />
      </div>
      <h2 className="title-font text-2xl font-medium text-white mt-3 mb-2">I'm <span className='text-[#FFAA33]'> Ashish Agarwal</span> </h2>
      <p className=" mb-2">I’m a B.E. ,MBA graduate in Finance , NCFM certified Technical Analyst and NISM certified Research Analyst ( RA ) with 3+ years of experience in Stock market!</p>
      {/* <button className="bg-white text-black font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
           Learn more
    </button> */}
     <button
            style={{
              backgroundImage: "linear-gradient(130deg, #FFAA33, #ffff 50%, #ffff)",
              boxShadow: '0 3px 20px rgba(0, 0, 0, .1)',
              textTransform: 'uppercase',
              position: 'relative',
              minWidth: '160px',
              height: '40px',
              padding: '0 20px',
              fontWeight: '600',
              border: 'none',
              letterSpacing: '1px',
              display: 'inline-block',
              backgroundSize: '200% auto',
              color: 'black',
              borderRadius: '10px',
              transition: 'all .5s',
            }}
            className="font-bold py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
           Learn More
          </button>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 py-2 px-4 justify-center sm:justify-start">
      <a className="text-gray-400">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-400">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-400">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-400">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
    </div>
    <div className="sm:w-1/2 mb-10 px-4">
      <div className="rounded-lg flex justify-center overflow-hidden">
        <img alt="content" className="object-center rounded-xl h-[150px] w-[150px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHiS0UN-E_yJNuRVhxIPgAsoOQYn_riMetQ&usqp=CAU"/>
      </div>
      <h2 className="title-font text-2xl font-medium text-white mt-3 mb-2">I'm <span className='text-[#FFAA33]'>Saranya Gopikrishna</span> </h2>
      <p className=" mb-2">I’m a B.E. ,MBA graduate in Finance , NCFM certified Technical Analyst and NISM certified Research Analyst ( RA ) with 9+ years of experience in Stock market!</p>
      <div className=''>
      {/* <button className="bg-white text-black font-bold py-2 px-4 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
           Learn more
    </button> */}
     <button
            style={{
              backgroundImage: "linear-gradient(130deg, #FFAA33, #ffff 50%, #ffff)",
              boxShadow: '0 3px 20px rgba(0, 0, 0, .1)',
              textTransform: 'uppercase',
              position: 'relative',
              minWidth: '160px',
              height: '40px',
              padding: '0 20px',
              fontWeight: '600',
              border: 'none',
              letterSpacing: '1px',
              display: 'inline-block',
              backgroundSize: '200% auto',
              color: 'black',
              borderRadius: '10px',
              transition: 'all .5s',
            }}
            className="font-bold py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Learn More
          </button>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 py-2 px-4 justify-center sm:justify-start">
      <a className="text-gray-400">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-400">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-400">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-400">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
      </div>
     
    </div>
  </div>
</div>
      </section>

      {/* section 5 that happy client  */}
      <section className="text-gray-400 bg-[#03091f]  body-font sm:rounded-3xl ">
  <div className="container px-5 py-5 mx-auto flex flex-wrap">
   
    <div className="flex flex-col text-center w-full ">
      <h1 className="sm:text-3xl text-4xl font-medium title-font mb-4 text-white">Our <span className='text-[#FFAA33]'>Happy</span>  Clients</h1>
    </div>

    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex  flex-wrap w-1/1">
        <div className="md:p-2 p-1 w-1/4">
        <video className="w-full h-full" controls>
        <source src={v1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
        <div className="md:p-2 p-1 w-1/4">
        <video className="w-full h-full" controls>
        <source src={v2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
        <div className="md:p-2 p-1 w-1/4">
        <video className="w-full h-full" controls>
        <source src={v1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
        <div className="md:p-2 p-1 w-1/4">
        <video className="w-full h-full" controls>
        <source src={v4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
       
        
      </div>
     
    </div>
  </div>
      </section>

      {/* section 6 faq  */}
      <section>
       {/* <Courses/> */}
       <Faq/>
      </section>

      {/* <TestiMain/> */}

      {/* section 7 that is Footer  */}
      <footer className="text-gray-400 bg-gray-900 body-font mb-5">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" className='w-7' />
      <span className="ml-3 text-xl">Aura Edu</span>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
      <a href="#" className="text-white ml-1" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
    </p>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
      <a href="#" className="text-white ml-1" target="_blank" rel="noopener noreferrer">Terms & Condition</a>
    </p>

    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
      <a href="#" className="text-white ml-1" target="_blank" rel="noopener noreferrer">About Us</a>
    </p>

    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
      <a href="#" className="text-white ml-1" target="_blank" rel="noopener noreferrer">Contact Us</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-white">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-white">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-white">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-white">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
      </footer>
    </div>
    
    </>
  )
}

export default Dashboard
