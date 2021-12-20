import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
// we have to destructure it with the {} because robots.js didn't use export default, so technically it can export more than 1 thing and we have to specify which variable it is that we want to use
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  // invoked immediately after a component is mounted, which is after render()
  // then it will call render() again, because there's an update to the state
  // no need to use arrow function synctax like below because it's a built in function of react
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  // must use arrow function syntax instead of onSearchChange(e) => {} because then "this" wouldn't be referring to App which causes an error
  onSearchChange = (e) => {
    // must use setState any time you want to update a state
    this.setState({ searchfield: e.target.value })
  }

  render() {
    // use destructuring to avoid having to type "this.state" anymore below this line
    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()));
    return !robots.length ?
    <h1>Loading...</h1> : 
    (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        {/* must use "this." because App is an object */}
        <SearchBox searchChange={this.onSearchChange}/>
        {/* to make CardList a scrollable element */}
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;