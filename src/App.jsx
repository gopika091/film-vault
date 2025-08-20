//entry point
import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from './components/navbar';
import Movies from './components/movies';
import Watchlist from './components/watchlist';
import Banner from './components/banner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
//imported by "npm install react-router-dom # always need this!" google
function App() {

  let [watchlist, setWatchlist] = useState([]);

  let handleAddToWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    setWatchlist(newWatchlist);
    console.log(watchlist);
  }
    
  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) =>{
        return movie.id !== movieObj.id;
    });
   setWatchlist(filteredWatchlist);
   console.log(watchlist);
  }
    


  return (

    <>
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path="/" element={
            <> 
            <Banner /> 
          <Movies watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />
           </>
          } 
          />

          <Route path="/watchlist" element={<Watchlist />} />
      


        </Routes>

      </BrowserRouter>


    </>
  );
}

export default App;



//https://api.themoviedb.org/3/movie/popular?api_key=48a11fca7e22309ba86b205b65b86de2&language=en-US&page=2
