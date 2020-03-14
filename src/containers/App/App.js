import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from '../../components/CardList';
import Searchbox from "../../components/Searchbox";
import Scroll from '../../components/Scroll';
import ErrorBoundary from "../../components/ErrorBoundary";
import { setSearchField } from "../../store/actions";
import { connect } from "react-redux";

function App(props) {
  const [robots, setRobots] = useState([]);
  // const [searchValue, setSearchValue] = useState("");

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=> response.json())
    .then(data=>setRobots(data))
  },[])

  // const onSearchChange = (event) =>{
  //   const value = event.target.value;
  //   setSearchValue(value);
  // }

  if(robots.length===0){
    return <h1 className="tc">Loading...</h1>
  }else{
    const filteredRobots = robots.filter((robot)=>robot.name.toLowerCase().includes(props.searchField.toLowerCase()));
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <Searchbox onSearchChange={props.onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
