import React from 'react';

function MoviesCard({ poster_path, name, handleAddToWatchlist, handleRemoveFromWatchlist, movieObj, watchlist }) {

  function doesContain(movieObj){
    for(let i=0; i<watchlist.length; i++){
      if(watchlist[i].id === movieObj.id){
        return true;
      }
    }
    return false;
    
  }



    return (
        <div
            className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 
                       hover:cursor-pointer relative flex flex-col "
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>
            {doesContain(movieObj) ? (
                <div onClick={() => handleRemoveFromWatchlist(movieObj)} className='m-2 flex justify-center items-center rounded-xl h-12 w-12 '>
                  &#x274C;</div> 
            ) : (
              <div onClick={() => handleAddToWatchlist(movieObj)} className='m-2 flex justify-center items-center rounded-xl h-12 w-12 '>
              {'\u{1F60D}'} 
          </div>
             
            )}
        
            
          


            {/* Title anchored at bottom */}
            <div className="absolute bottom-0 left-0 right-0 text-center p-2 bg-black/60">
                <h1 className="text-white text-lg font-bold">{name}</h1>
            </div>
        </div>
    ); 
}   

export default MoviesCard;
//http://www.impawards.com/2025/posters/superman.jpg