import React, { useState } from 'react';
import './App.css';
import CardList from './CardList';
import robotsArray from "./robots";
import Searchbox from "./Searchbox";

function App() {
  const [robots, setRobots] = useState(robotsArray);

  const onSearchChange = (event) =>{
    const value = event.target.value;
    const filteredRobots = robotsArray.filter((robot)=>robot.name.toLowerCase().includes(value.toLowerCase()));
    setRobots(filteredRobots);
  }

  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <Searchbox onSearchChange={onSearchChange}/>
      <CardList robots={robots}/>
    </div>
  );
}

export default App;
