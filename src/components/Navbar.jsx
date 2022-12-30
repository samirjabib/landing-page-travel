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
    return(
        <div>
            <h1>Experiencies</h1>
            <HiMenuAlt3/>
            <div>
                <ul>
                    {links.map( (link, index) => {
                        return(
                            <li key={index}>
                                {link.display}
                            </li>
                        )
                    } )}
                </ul>
            </div>
        </div>
    )
}