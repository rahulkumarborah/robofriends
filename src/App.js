import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './CardList';
import Searchbox from "./Searchbox";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=> response.json())
    .then(data=>setRobots(data))
  },[])

  const onSearchChange = (event) =>{
    const value = event.target.value;
    setSearchValue(value);
  }

  if(robots.length===0){
    return <h1 className="tc">Loading...</h1>
  }else{
    const filteredRobots = robots.filter((robot)=>robot.name.toLowerCase().includes(searchValue.toLowerCase()));
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <Searchbox onSearchChange={onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;
