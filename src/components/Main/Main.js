import React, { useEffect, useState } from 'react';
import './Main.css';
import Result from "../../components/Results/Result";
import Nomination from "../../components/Results/Nomination";


const MainApp = () => {

  const APP_KEY = '654e4133';

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("avenge");

  useEffect( () => {
    getMovies();
    console.log("fetching data");
  }, [query]);

    const getMovies = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${APP_KEY}&s=${query}&type=movie`
        );
      const data = await response.json();
      console.log(data.Search);
      setMovies(data.Search);

    };

    const updateSearch = (e) => {
      setSearch(e.target.value);
      console.log(search);
    }

    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch("");
    }

    return (
      <div className="mt-5 container">
        <h1 className="section_heading">The Shoppies</h1>
        <div className="card container card_light">
          <div className="card-title pt-3">
            Movie Title
          </div>
          <form onSubmit={getSearch} className="input-group input-group-lg col mb-3 pl-0 pr-0      search_bar card-body">
            <input className="search_bar col p-1" type="text" placeholder="search" value={search} onChange={updateSearch} />
            <button className="btn d-flex flex-row-reverse btn nominate_button search_button" type="submit">Search</button>
          </form>
        </div>
        <div className="d-flex flex-md-row justify-content-between          flex-column pl-0 pr-0 container mt-5">

          <div className="card card_light mt-1 mb-3">
            <div className="card-body">
            <h3>Results for {query}</h3>
          {movies.map(movie =>(
            <Result 
            key={movie.imdbID}
            title={movie.Title} 
            year={movie.Year} 
            poster={movie.Poster}/>
                ))}
            </div>
          </div>
          
          <div className="card card_light mb-3">
            <div className="card-body">
              <h3>Nominations</h3>
              <Nomination />
          </div>
          </div>
        </div>
      </div>

    );

  }

export default MainApp;
