import React, { useEffect, useState } from 'react';
import './Main.css';
import Result from "../../components/results/Result";
import NominationList from "../../components/results/NominationList";
import SearchBox from "../../components/Search";


// Things to do
// max-width for nominations
// align buttons
// fix max no. of nominations




const MainApp = () => {

  const APP_KEY = '654e4133';

  const [movies, setMovies] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const [nominations, setNominations] = useState([]);
  const [disableButtons, setDisableButtons] = useState([]);

    const getMovies = async () => {
      const url = `https://www.omdbapi.com/?apikey=${APP_KEY}&s=${searchValue}&type=movie`;
      const response = await fetch(url);

      const data = await response.json();
       if(data.Search){
        setMovies(data.Search);
      }
    };

    useEffect( () => {
    getMovies(searchValue);
  }, [searchValue]);

  useEffect( () => {
    const movieNomination = JSON.parse(localStorage.getItem('Shoppies-nomination')
    );
    setNominations(movieNomination);
    
  }, []);
    const saveToLocalStorage = (items) => {
      localStorage.setItem('Shoppies-nomination', JSON.stringify(items)
      );
    }

    const nominateMovie = (movie) => {
      const nominatedList = [...nominations, movie];
      setNominations(nominatedList);
      saveToLocalStorage(nominatedList);
      console.log(nominatedList);
    };

    const removeMovie = (props) => {
      const nominatedList = nominations.filter(
        (nomination) =>
          nomination.imdbID !== props.imdbID
         
      );
      setNominations(nominatedList);
      saveToLocalStorage(nominatedList);
    };

    return (
    <div className="mt-5 container">
        <h1 className="section_heading">The Shoppies</h1>
        <div className="card container card_light">
          <div className="card-title pt-3">
            Movie Title
          </div>
          <SearchBox searchValue={searchValue} setsearchValue={setsearchValue} />
        </div>
      <div className="d-flex flex-md-row justify-content-between          flex-column pl-0 pr-0 container mt-5">


                        {/* movielist */}
          <div className="card card_light col-12 col-md-6 mr-md-2 mb-3">
            <div className="card-body">
              <h3>Results for {searchValue}</h3>
              {movies.map((movie, index) => (
              <Result 
              movies={movies}
              title={movie.Title}
              year={movie.Year}
              key={index}
              imdbID={movie.imdbID}
              disableButtons={disableButtons}
              setDisableButtons={setDisableButtons}
              handleNominationsClick={nominateMovie}
              buttonName="Nominate"             
              color="nominate_button"
              buttonId="nominate_button"
              
              />
                ))}
                
            </div>
          </div>
          
          {/* Nomination list */}
          <div className="card col-12 col-md-6 ml-md-2 card_light mb-3">
            <div className="card-body">
              <h3>Nominations</h3>
              {nominations &&nominations.map((nominated, index) => (
              <NominationList 
              nominations={nominations}
              title={nominated.title}
              year={nominated.year}
              key={index}
              imdbID={nominated.imdbID}
              buttonName="remove"
              handleNominationsClick={removeMovie}
              color="remove_button" 
              buttonId="remove_button" 
              />
              ))}          
            </div>
          </div>
      </div>
    </div>
  );

}

export default MainApp;
