import React, {Component} from 'react';
import { RadialBarChart, RadialBar, Legend, Label, Tooltip, Text, ResponsiveContainer } from 'recharts';

class FoodTypeStat extends Component {
  render() {
    const data =
    [{name: 'Singaporean', Wastage: 31.47, fill: '#8884d8'},
      {name: 'Western', Wastage: 26.6, fill: '#83a6ed'},
      {name: 'Chinese', Wastage: 15.69, fill: '#8dd1e1'},
      {name: 'Japanese', Wastage: 8.22, fill: '#82ca9d'}]
    return (
        <RadialBarChart height={500} width={500} innerRadius={50} barSize={20} data={data}>
          <RadialBar minAngle={15} background clockWise={true} nameKey='name' dataKey='Wastage'>
          </RadialBar>
          <Tooltip />
          <Legend />
        </RadialBarChart>
    )
  }
}

export default FoodTypeStat;
