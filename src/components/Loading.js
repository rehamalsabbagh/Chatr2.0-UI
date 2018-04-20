import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'

function Loading(props) {
  return (
    <div className="mx-auto text-center">
      <div className="ourloader" Style="width:300px; height:300px;" ></div>
      <h1>Loading...</h1>
    </div>
  );
}

export default Loading;
