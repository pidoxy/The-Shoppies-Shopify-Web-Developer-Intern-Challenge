import React from 'react';



const Nomination = ({title,year,poster}) =>  {


  return(
  <div >
      <ul>
        <li>{title} {year}</li>
        <button className="btn nominate_button">Remove</button>
      </ul>
  </div>
  );
}

export default Nomination;