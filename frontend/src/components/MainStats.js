import React, {Component} from 'react';

class MainStats extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {empty, full, half} = this.props;
    return (
      <div>
        <p>Empty: {empty}</p>
        <p>Full: {full}</p>
        <p>Half-eaten: {half}</p>
      </div>
    )
  }
}

export default MainStats;
