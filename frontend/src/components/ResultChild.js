import React from 'react';

import './resultchild.css';

const url = 'http://localhost:8001'
const ResultChild = (props) => {
  const {preview, filename, prediction} = props;
  console.log(preview);
  return (
    <div className="parent">
      <div className="child">
        <h5>Image name</h5>
        <span>{filename}</span>
      </div>
      <div className="child">
        <h5> prediction</h5>
        <span>{prediction}</span>
      </div>
      <div className="img-par">
        <img src={url+preview} alt={filename} />
      </div>
    </div>
  )
}

export default ResultChild;
