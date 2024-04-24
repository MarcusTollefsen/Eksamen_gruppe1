import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Pokemon from './components/Pokemon';
import SearchResult from './components/SearchResult';
import Teams from './components/Teams';
import Type from './components/Type';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

function App() {
  return (
    <Router>
        <Header />
        <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/:type" element={<Type />} />
        <Route path="/searchresults/:pokemon" element={<SearchResult />} />
        <Route path="/pokemons/:pokemon" element={<Pokemon />} />
      </Routes>
    </Router>
  );
}

export default App;
