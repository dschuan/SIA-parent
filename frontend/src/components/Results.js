import React from 'react';
import ResultChild from './ResultChild';

const renderData = (data, files) => {
  return data.map((dat) => {
    const images = files.filter(file => {
      let word = file.name;
      console.log(word);
      let filename = dat.filename.slice(3);
      console.log(filename);
      return(word === filename)
    });
    const image = images[0]
    return(
      <ResultChild id={dat.filename} preview={image.preview} filename={dat.filename} prediction={dat.prediction} />

    )
  })
}
const Results = (props) => {
  console.log(props.files);

  return <div>{renderData(props.data, props.files)}</div>;
}

export default Results;
