import React from 'react';
import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <div className="shadow py-4">
        <div className="container px-4 2x1:px-20 mx-auto flex justify-between items-center">
            <img src={assets.logo} alt="" />
            <div>
                <button className='flex gap-4 max-sm:text-xs'>Recruiter login</button>
                <button>Login</button>
            </div>
        </div>
    </div>
    )
}

export default Navbar