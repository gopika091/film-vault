import React from 'react';

function MoviesCard({ poster_path, name }) {
    return (
        <div
        className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 
                   hover:cursor-pointer relative"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}
      >
        {/* Title anchored at bottom */}
        <div className="absolute bottom-0 left-0 right-0 text-center p-2 bg-black/60">
          <h1 className="text-white text-lg font-bold">{name}</h1>
        </div>
      </div>
      
    ); 
}   

export default MoviesCard;
//http://www.impawards.com/2025/posters/superman.jpg