import React, { Component } from 'react';
import { CartesianGrid, ResponsiveContainer , LineChart, XAxis, YAxis, Legend, Line, Tooltip} from 'recharts';

import './stattrend.css'

class StatTrend extends Component {

  render() {
    const data = [
      {year: '11', empty: 40, half: 24, full: 36},
      {year: '12', empty: 30, half: 13, full: 67},
      {year: '13', empty: 20, half: 80, full: 0},
      {year: '14', empty: 27, half: 39, full: 20},
      {year: '15', empty: 18, half: 48, full: 21},
      {year: '16', empty: 23, half: 38, full: 25},
      {year: '17', empty: 34, half: 43, full: 21},
    ];
    return (
        <div className="parent">
        <h4> Trend of Food Wastage </h4>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart data={data}>
            <XAxis dataKey="year" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="empty" stroke="#8884d8" />
            <Line type="monotone" dataKey="half" stroke="#82ca9d" />
            <Line type="monotone" dataKey="full" stroke="#FF7373" />
          </LineChart>
        </ResponsiveContainer>
        </div>

    )
  }
}

export default StatTrend
