import React from 'react'
import ArticleCard from '../../components/ArticleCard'
import { FaArrowRight} from 'react-icons/fa'

const Articles = () => {
  return (
    <section className='container mx-auto flex flex-col px-5 py-10'>
      
      <div className='flex flex-wrap 
      md:gap-x-5 gap-y-5 
      pb-10'>
            <ArticleCard className='w-full md:w-[30%] lg:w-[30%]'/>
            <ArticleCard className='w-full md:w-[30%] lg:w-[30%]'/>
            <ArticleCard className='w-full md:w-[30%] lg:w-[30%]'/>
            </div>
            <button className='flex items-center border-2 border-primary text-primary rounded mx-auto px-6 py-2'>
              <span>More items</span>
              <FaArrowRight />
            </button>
    </section>
  )
}

export default Articles