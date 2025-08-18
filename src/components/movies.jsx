import React, { useState, useEffect } from 'react';
import MoviesCard from './moviescard';
import axios from 'axios';
import Pagination from './pagination';
function Movies() {

    const [movies, setMovies] = useState([]);  //lets set this movies by setmovies
    const [pageNo, setPageNo] = useState(1);

    const handlePrev = () => {
        if(pageNo<=1){
            setPageNo(1);
        }
        else{
            setPageNo(pageNo-1);
        } 
    };

    const handleNext = () => {
        setPageNo(pageNo+1);
    };

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=48a11fca7e22309ba86b205b65b86de2&language=en-US&page="+pageNo)
            .then((response) => {    // or res
                // console.log(response.data.results); //see the data in console inside the object for console.log(response)
                setMovies(response.data.results);
            })
    }, [pageNo])

    return (
        <div className='p-5'>


            <div className='text-2xl font-bold text-center' >
                Trending Movies

            </div>



            <br></br>
            <div className='flex flex-row flex-wrap justify-around gap-5'>

                {/* <MoviesCard /> */}


                {movies.map((movieObj) => (
                    <MoviesCard poster_path={movieObj.poster_path} name={movieObj.original_title}/>
                ))}

                {/*mapping all movies, for every movieObj we are returning a moviescard component  */}


            </div>


            <Pagination handlePrev={handlePrev} handleNext={handleNext} pageNo={pageNo} />
        </div>
    );
}

export default Movies;


//https://api.themoviedb.org/3/movie/popular?api_key=48a11fca7e22309ba86b205b65b86de2&language=en-US&page=2
