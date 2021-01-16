import React from 'react';

const NominationList = (props) =>  {
  const ButtonNominate = props.buttonComponent;
        

  return(
  <div >
    <ul>
      <li>{props.title} {props.year}</li>
      <button disabled={props.disableButtons && props.disableButtons.includes(props.imdbID)} id={props.buttonId} onClick={() => props.handleNominationsClick(props)} className={`btn ${props.color} badge-pill search_button`}>{props.buttonName}</button>
    </ul>
  </div>
  );
}

export default NominationList;