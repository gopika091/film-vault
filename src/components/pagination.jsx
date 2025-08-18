import React from 'react';
import { Link } from 'react-router-dom';

function Pagination({handlePrev, handleNext, pageNo}) {
    return (
        <div className='bg-gray-800 p-4 justify-center flex'>
            <div onClick={handlePrev} className='px-8'><i className="fa-solid fa-arrow-left "></i></div>
            <div className='font-bold'>{pageNo}</div>
            <div onClick={handleNext} className='px-8'><i className="fa-solid fa-arrow-right"></i></div>
           
        </div>
    );
}
export default Pagination;  