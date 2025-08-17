import React from 'react';
import movieLogo from '../imgs/movie-logo.png';
import { Link } from 'react-router-dom'; 
//as this import for link instead of anchor tag

const Navbar = () => {
    return (
        <div className='flex border space-x-8 items-center pl-3 py-1'>
           <img className='w-[90px]' src={movieLogo} alt="Movie Logo" />
           <Link to="/" className='text-blue-400 font-bold text-2xl'    >Movies</Link>
           {/* <a href="/watchlist" className='text-blue-400 font-bold text-2xl' >Watchlist</a> */}

           <Link to="/watchlist" className='text-blue-400 font-bold text-2xl' >Watchlist</Link>
          
           </div>
    );
};

export default Navbar;
