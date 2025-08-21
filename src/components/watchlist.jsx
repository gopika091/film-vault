import React from 'react';
import { useState } from 'react';
function Watchlist({watchlist, setWatchlist}) {


    const [search, setSearch] = useState('');

    let handleSearch = (e) => {
        setSearch(e.target.value);
    }

    //function to sort the watchlist(arrow up and down)


   
const sortIncreasing = () => {
  // Create a new array to sort, without mutating the original state
  const sortedList = [...watchlist].sort((MovieA, MovieB) =>
    MovieA.vote_average - MovieB.vote_average
  );
  // Update the state with the new, sorted array
  setWatchlist(sortedList);
};

const sortDecreasing = () => {
  // Create a new array to sort, without mutating the original state
  const sortedList = [...watchlist].sort((MovieA, MovieB) =>
    MovieB.vote_average - MovieA.vote_average
  );
  // Update the state with the new, sorted array
  setWatchlist(sortedList);
};
   
    
    
    return (
        <>

            <div className='flex justify-center flex-wrap m-4 gap-7' >
             <div className='bg-gray-300 flex justify-center h-[2rem] w-[7rem] rounded-lg p-1 text-white font-bold mx-2'>Action</div>
             <div className='bg-blue-400 flex justify-center h-[2rem] w-[7rem] rounded-lg p-1 text-white font-bold mx-2'>Action</div>
             <div className='bg-gray-300 flex justify-center h-[2rem] w-[7rem] rounded-lg p-1 text-white font-bold mx-2'>Action</div>
             
            </div>

            <div className='flex justify-center my-4'>
                <input onChange={handleSearch} value={search} type="text" placeholder='Search for movies' className='h-[2rem] w-[15rem] rounded-lg border border-gray-600 p-5 m-5  placeholder:text-gray-600 bg-gray-200 outline-none  ' />
            </div>

            <div className=' rounded-lg overflow-hidden flex justify-center my-4'>
                <table className='w-full text-center text-gray-500'>
                    <thead className=' border border-gray-400'>
                        <tr>

                            <th>Name</th>
                            <th className='flex justify-center' >
                                <div onClick={sortIncreasing} className='mx-2'><i class="fa-solid fa-arrow-up"></i></div>
                                <div>Rating</div>
                                <div onClick={sortDecreasing} className='mx-2'><i class="fa-solid fa-arrow-down"></i></div>
                            </th>
                            <th>Popularity</th>
                            <th>Genre</th>
                        </tr>

                    </thead>
                    <tbody>
  {watchlist
    .filter((movieObj) => {
      return movieObj.original_title.toLowerCase().includes(search.toLocaleLowerCase());
    })
    .map((movieObj) => {
      return (
        <tr key={movieObj.id} className='border-b-2 '>
          <td className='h-[7rem] w-[40rem] flex items-center my-3' >
            <img className='h-[7rem] w-[10rem]' src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`} alt={movieObj.original_title} />
            <div className='mx-10'>{movieObj.original_title}</div>
          </td>
          <td>{movieObj.vote_average}</td>
          <td>{movieObj.popularity}</td>
          <td>{movieObj.genre_ids}</td>
          <td className='cursor-pointer hover:text-red-500'>delete</td>
        </tr>
      );
    })}
</tbody>
                </table>

            </div>

        </>
    );}



export default Watchlist;       