import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbAlienFilled } from "react-icons/tb";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import {BiSolidLogIn} from "react-icons/bi";
 
const Header = () => {

    const [open, setOpen] = useState(false);


  
    return (
        <nav className="flex gap-5 justify-center items-center justify-between">
            <div className="flex-grow">
                <Link to="/" className="text-4xl">
                    <TbAlienFilled/>
                </Link>
            </div>
            <div className={`md:flex lg:flex lg:flex-row lg:sticky lg:bg-white gap-5 flex-grow absolute duration-1000 bg-red-400 flex flex-col right-0 top-16 ${open? 'right-0 top-20': '-top-20'}`}>
                <Link to="/">
                    First Page
                </Link>
                <Link to="/foods">
                    Foods
                </Link>
                <Link to='/my_gym'>Gym</Link>
                <Link to='/countries'>Countries</Link>
                <Link to='/rechart'>Rechart</Link>
            </div>
            <div className='text-3xl md:hidden ' onClick={() => setOpen(!open)}>
                <Link>
                    {
                        open === true ? <AiOutlineClose/>: <AiOutlineBars/>
                    }
                </Link>
            </div>
            <div className='text-3xl md:block hidden'>
                <Link to='/login_page'>
                    <BiSolidLogIn/>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
