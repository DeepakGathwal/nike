import React from 'react'
import { navLinks } from '../commonJSON'

export const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
       <nav className='flex justify-between items-center max-container j'>
        <a href="/">
            <img src="/assets/images/header-logo.svg" alt="logo" width={130} height={29} />
        </a>
    <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
        {navLinks.map((el) =>(
          <li key={el.label}>
            <a href={el.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:text-black hover:text-border'>
            {el.label}
            </a>
          </li>
        )

        )}
    </ul>
    <div className='hidden max-lg:block'> 
      <img src="/assets/icons/hamburger.svg" alt="hambarger" width={25} height={25}/>
    </div>
       </nav>
    </header>
  )
}

