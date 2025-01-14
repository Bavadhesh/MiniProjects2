import React, { useState } from 'react';
import {images} from '../constants/index.js'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {MdKeyboardArrowDown} from 'react-icons/md'

const navItemInfo = [
  {name:"Home",type:"link"},
  {name:"Articles",type:"link"},
  {name:"Pages",type:"dropdown",items:["About us","Contact us"]},
  {name:"Pricing",type:"link"},
  {name:"FAQ",type:"link"},
]

const Header = () => {
  const [navIsVisible,setNavIsVisible] = useState(false)

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState
    })
  }

const NavItem = ({item}) =>{
  const [dropdown,setDropdown] = useState()
  const ToggleDropDownHandler = () => {
    setDropdown((curState)=>{
      return !curState;
    })
  }
  return (
    <li className='relative group'>
    {item.type === "link" ? (<>
    <a href="/" className='px-4 py-2'>{item.name}</a>
    <span className='cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold top-0 right-0 opacity-0 group-hover:right-[90%] group-hover:opacity-100'>/</span>
 </>):( 
    <div>
       <button href="/" className='px-4 py-2 flex gap-x-1 items-center' onClick={ToggleDropDownHandler}>{item.name} <MdKeyboardArrowDown/></button>
       <div className={`${dropdown? 'block' : 'hidden'} lg:hidden transition-all duration-500 pt-4 lg:absolute lg:right-0 lg:bottom-0 lg:transform lg:translate-y-full lg:group-hover:block lg:w-max`}>
                 
             <ul className='bg-dark-soft lg:bg-transparent flex flex-col text-center shadow-lg rounded-lg overflow-hidden'>
                     {item.items.map( (pages) =>{
                      
                      
                    
                        return(<a href="/" className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'>{pages}</a>)
                      
            
                         
                        
                      
                     }
                        
                     )}
                   </ul>
    
       </div>
    </div>)
  }
  </li>
    
  )
}




  return (
    <section className='sticky left-0 right-0 top-0'>
      <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
        <div>
          <img className='w-16' src={images.logo} alt="logo" />
        </div>
        <div className='z-[50] lg:hidden'>
          {navIsVisible ? (
            <AiOutlineClose className='w-6 h-6'
            onClick={navVisibilityHandler}
            />
          ):<AiOutlineMenu className='w-6 h-6'
          onClick={navVisibilityHandler} />}
        </div>
        <div className={`${navIsVisible ? "right-0" : "-right-full"} 
        flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed 
        top-0 bottom-0 lg:static gap-x-9 items-center z-[49] bg-dark-hard lg:bg-transparent mt-[56px] lg:mt-0 transition-all duration-300`}>
           <ul className='flex flex-col items-center gap-y-5 lg:flex-row gap-x-2 text-white lg:text-dark-soft'>
           {navItemInfo.map((item)=>{
             return <NavItem key={item.name} item={item}/>
           })}
           </ul>
           <button className='mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition duration-500'>Sign in</button>
        </div>
      </header>
    </section>
  )
}

export default Header