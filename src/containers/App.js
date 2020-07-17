import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users =>  this.setState({robots: users}))
  }
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    });
    return !robots.length ?
      <h1>Loading</h1>
     :       
      (
        <div className="App tc">
          <h1 className="f1 ">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      ); 
  }
}

export default App;
