import React from 'react';



const Result = ({title,year,poster}) =>  {


  return(
  <div >
      <ul>
        <li>{title} {year}</li>
        <button className="btn nominate_button">Nominate</button>
      </ul>
  </div>
  );
}

export default Result;