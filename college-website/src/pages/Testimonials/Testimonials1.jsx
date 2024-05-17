import React from 'react'
import img1 from "../../assets/CardAssets/city1.png"
import testimonialLogo from "../../assets/testimonialLogo.png"
import quote from "../../assets/quote.png"

const Testimonials1 = () => {
  return (
    <div className=' text-gray-700 '>
      <div className="container px-5 py-24 mx-auto">
          <h1 className="text-7xl title-font border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200 pb-16 px-16 "> Testimonials</h1>
          {/* <h1 class="text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200">
    Heading Example
</h1> */}
          <div className="flex flex-wrap -m-4">
            {/* Card1 */}
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-300 p-8 rounded">
               {/* <p className='&";'></p> */}
                <img src={quote} alt="image1" className='h-12 w-12'/>
                <p className="font-semibold mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolor eaque optio aperiam, ex aliquid nobis voluptatibus necessitatibus amet recusandae?
                </p>
                <div className="inline-flex item-center">
                  <img src={img1} alt="images" className='w-12 h-12 rounded-full object-cover object-center'/>
                  <span className='flex flex-col pl-4'>
                    <span className='font-bold text-gray-600'>
                        Tejus Chaturvedi
                    </span>
                    <span className='text-sm'>Customer</span>
                  </span>
                </div>
              </div>
            </div>
            {/* Card2 */}
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-300 p-8 rounded">
                <img src={quote} alt="image1" className='h-12 w-12'/>
                <p className="font-semibold mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolor eaque optio aperiam, ex aliquid nobis voluptatibus necessitatibus amet recusandae?
                </p>
                <div className="inline-flex item-center">
                  <img src={img1} alt="images" className='w-12 h-12 rounded-full object-cover object-center'/>
                  <span className='flex flex-col pl-4'>
                    <span className='font-bold text-gray-600'>
                        Tejus Chaturvedi
                    </span>
                    <span className='text-sm'>Customer</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Testimonials1
