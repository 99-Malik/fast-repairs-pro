import React from 'react'
import Image from 'next/image'

export default function Feature() {
  return (
    <div>
      <div className="w-full h-[100px] flex justify-center mt-5 md:mt-12">
        <div className="w-[500px] h-[80px] md:h-full  md:mt-0 flex flex-col text-center align-middle">
          <h5 className="text-base mt-8 text-[#00A4B4]">Our Features</h5>
          <h1 className="text-3xl font-extrabold text-[#012970]">
            Special Features
          </h1>
        </div>
      </div>

      <div className="w-auto mx-2 mt-3 md:mt-0 md:mx-0 md:w-full h-[800px] md:h-[350px] flex flex-col md:flex-row justify-evenly items-center ">
        <div className="w-full px-3 md:p-0 md:w-[300px] h-[300px]">
          <div className="w-full drop-shadow-xl h-[250px] bg-white border-[1px] border-grey flex flex-col justify-center items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 text-[#00A4B4] h-20 hover:scale-110 duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>

            <h1 className="text-xl font-extrabold text-[#012970]">
              Reasonable Price
            </h1>

            <h1 className="px-6 md:p-0">
              We do offer a reasonable price for repair & service of Siemens
              Appliances.
            </h1>
          </div>
        </div>

        <div className="w-full px-3 md:p-0 md:w-[300px] h-[300px]">
          <div className="w-full h-[250px] drop-shadow-xl bg-white border-[1px] border-grey flex flex-col justify-center items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-[#00A4B4] hover:scale-110 duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
            </svg>

            <h1 className="text-xl font-extrabold text-[#012970]">
              Customer Satisfaction
            </h1>

            <h1 className="px-6 md:p-0">
              We maintain a professional workflow for excellent customer
              relationships.
            </h1>
          </div>
        </div>
        
        <div className="w-full px-3 md:p-0 md:w-[300px] h-[300px]">
          <div className="w-full h-[250px] drop-shadow-xl bg-white border-[1px] border-grey flex flex-col justify-center items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-[#00A4B4] hover:scale-110 duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>

            <h1 className="text-xl font-extrabold text-[#012970]">
              24*7 Services
            </h1>

            <h1 className="px-6 md:p-0">
              We are available 24*7, Call us for get repair any Siemens
              Appliances.
            </h1>
          </div>
        </div>
      </div>

      
    </div>
  )
}
