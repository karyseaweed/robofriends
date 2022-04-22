import { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
// we have to destructure it with the {} because robots.js didn't use export default, so technically it can export more than 1 thing and we have to specify which variable it is that we want to use
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
    console.log(count);
  }, [count]);

  const onSearchChange = (e) => {
    setSearchfield(e.target.value);
  };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me to increase count!
      </button>
      <SearchBox searchChange={onSearchChange} />
      {/* to make CardList a scrollable element */}
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
