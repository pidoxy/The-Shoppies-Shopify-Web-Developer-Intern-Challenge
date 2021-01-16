import React from 'react';

const Result = (props) =>  {
  const ButtonNominate = props.buttonComponent;
 
//  const dis = document.getElementById(`${props.buttonId}`);
//     if(props.handleNominationsClick){
//     dis.setAttribute('disabled');
//     }


  return(
  <div >
    <ul>
      <li>{props.title} {props.year}</li>
      <button id={props.buttonId} onClick={() => props.handleNominationsClick(props) } className={`btn ${props.color} badge-pill search_button`}>{props.buttonName}</button>
    </ul>
  </div>
  );
}

export default Result;