import React from 'react';
import './App.css';
import Card from './Card';
import {robots} from "./robots"

function App() {
  return (
    <>
        {robots.map((robot,index)=>{
          return <Card key={`${robot.id}-index`} name={robot.name} email={robot.email}/>
        })}
    </>
  );
}

export default App;
