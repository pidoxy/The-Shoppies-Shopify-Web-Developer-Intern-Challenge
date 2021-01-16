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
      <button disabled={props.disableButtons && props.disableButtons.includes(props.imdbID)} id={props.buttonId} onClick={() => {
        // if(props.disableButtons.length > 5) return;
        props.handleNominationsClick(props);
      // props.setDisableButtons([...props.disableButtons, props.imdbID]);

      } } className={`btn ${props.color} badge-pill search_button`}>{props.buttonName}</button>
    </ul>
  </div>
  );
}

export default Result;