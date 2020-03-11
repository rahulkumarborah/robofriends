import React from 'react';
import './App.css';
import CardList from './CardList';
import {robots} from "./robots";
import Searchbox from "./Searchbox";

function App() {
  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <Searchbox/>
      <CardList robots={robots}/>
    </div>
  );
}

export default App;
