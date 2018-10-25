import React from 'react';
import ResultChild from './ResultChild';

const renderData = (data) => {
  return data.map((dat) => {
    return(
      <ResultChild id={dat.filename} preview={dat.image} filename={dat.filename} prediction={dat.prediction} />

    )
  })
}
const Results = (props) => {
  console.log(props.data);

  return <div>{renderData(props.data)}</div>;
}

export default Results;
