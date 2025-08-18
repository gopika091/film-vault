//entry point
import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from './components/navbar';
import Movies from './components/movies';
import Watchlist from './components/watchlist';
import Banner from './components/banner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//imported by "npm install react-router-dom # always need this!" google
function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path="/" element={<> <Banner /> <Movies /> </>} />
          <Route path="/watchlist" element={<Watchlist />} />
      


        </Routes>

      </BrowserRouter>


    </>
  );
}

export default App;


//https://api.themoviedb.org/3/movie/popular?api_key=48a11fca7e22309ba86b205b65b86de2&language=en-US&page=2
