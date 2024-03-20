import React from 'react'
import { images } from '../../constants'
import {FiSearch} from 'react-icons/fi'

const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col px-6 py-6 lg:flex-row'>
        <div className='mt-10 lg:w-1/2'>
            <h1 className='font-roboto font-bold text-3xl md:text-5xl text-center lg:text-left lg:text-4xl xl:text-5xl text-dark-soft lg:max-w-[460px]'>Read the most interesting articles</h1>
            <p className='text-dark-light text-center mt-4 md:text-xl lg:text-left lg:text-base'
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>


<div className='flex flex-col mt-10 gap-y-2.5 relative'>
            <div className='relative'>
                <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]'/>
                <input type="text" className='paceholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4 ' placeholder='Search Articles' />
            </div>
            <button className='w-full bg-primary text-white font-semibold rounded px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2'>Search</button>
            </div>       
            <div className='flex mt-4 flex-col lg:flex-row lg:flex-nowrap lg:gap-x-4 lg:mt-7'>
                <span className='text-dark-soft font-semibold italic lg:mt-4 lg:text-sm xl:text-base'>Popular tags</span>
                <ul className='flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3'>
                    <li className='bg-primary bg-opacity-10 text-primary rounded px-3 py-1.5 font-semibold'>Design</li>
                    <li className='bg-primary bg-opacity-10 text-primary rounded px-3 py-1.5 font-semibold'>User Experience</li>
                    <li className='bg-primary bg-opacity-10 text-primary rounded px-3 py-1.5 font-semibold'>User interface</li>
                </ul>
            </div>

        </div>



        <div className='hidden lg:block lg:1/2' >
          <img src={images.HeroImage} alt="users are reading articles" />
       </div>

        

       

        
    </section>
  )
}

export default Hero