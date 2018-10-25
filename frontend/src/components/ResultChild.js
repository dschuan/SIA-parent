import React from 'react';

import './resultchild.css';

const ResultChild = (props) => {
  const {preview, filename, prediction} = props;
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
        <img src={preview} alt={filename} />
      </div>
    </div>
  )
}

export default ResultChild;
