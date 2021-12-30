import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import SearchView from './components/SearchView';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9d39ef21be32363db42fda6e16991360&language=en-US&query=${searchText}&page=1&include_adult=false`
    ).then((res) =>
      res.json().then((res) => {
        setSearchResults(res['results']);
      })
    );
  }, [searchText]);

  return (
    <>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route
          path='search'
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
