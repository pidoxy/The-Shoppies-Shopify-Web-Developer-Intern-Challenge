import React from 'react';


const SearchBox = (props) =>  {


  return (
    <div>
      <form className="input-group input-group-lg col mb-3 pl-0 pr-0 search_bar card-body">
            <input className="search_bar col p-1" type="text" placeholder="enter a search term..." value={props.value} onChange={(e) => props.setsearchValue(e.target.value)} >
            </input>
            <button className="btn d-flex flex-row-reverse btn nominate_button search_button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBox;