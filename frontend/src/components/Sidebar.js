import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const Sidebar = () => {
  return (
    <div className="menu">
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/messages">Messages</Link> </li>
        <li> <Link to="/about">About</Link> </li>
      </ul>
    </div>
  )

}

export default Sidebar
