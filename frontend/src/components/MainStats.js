import React, {Component} from 'react';
import {ResponsiveContainer, Cell, PieChart, Pie, Label, Legend} from 'recharts';

import './mainstats.css';
class MainStats extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {empty, full, half} = this.props;
    const data = [{name: "Empty", value: empty}, {name: "Half-Eaten", value: half}, {name: "Not Eaten", value:full}]
    const COLORS = ['#3DCC91', '#FFB366', '#FF7373'];
    return (
        <ResponsiveContainer width="50%" aspect={1}>
          <PieChart >
            <Pie data={data}
            dataKey="value"
            nameKey="name"
            fill="#8884d8"
            paddingAngle={5}
            innerRadius={100}
            outerRadius={150}
            legendType="square"
            label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]}  />
              ))}
              <Label value="Food Eaten" offset={0} position="center" />
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
    )
  }
}

export default MainStats;
