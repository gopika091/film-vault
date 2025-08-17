import React from 'react';
function Banner() {
    return (
        <div
        className='h-[15vh] md:h-[75vh] bg-cover bg-center flex items-end'
        style={{ backgroundImage: `url('https://editorial.rottentomatoes.com/wp-content/uploads/2025/05/1qMepRaA.png')` }}
    >
        <div className='text-white text-xl text-center w-full bg-red-900/60 p-2'>Avengers Endgame</div>
    </div>
    )
}

export default Banner;  