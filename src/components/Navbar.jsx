import { HiMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';


const links = [
    {display:'Home'},
    {display:'Destinations'},
    {display:'Reservations'},
    {display:'Amenities'},
    {display:'Rooms'}
]


export const Navbar = () => {

    const handleNav = () => {
        setNav(!nav);
        if(!nav) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
      };
    

    return(
        <div className='absolute w-full flex justify-between p-4 items-center'>
            <h1>Experiencies</h1>
            <HiMenuAlt3 onClick={handleNav} className='z-20 cursor-pointer'/>
            <div>
                <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
                    {links.map( (link, index) => {
                        return(
                            <li key={index} className='font-bold text-3xl p-8'>
                                {link.display}
                            </li>
                        )
                    } )}
                </ul>
            </div>
        </div>
    )
}