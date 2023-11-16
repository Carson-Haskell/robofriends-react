import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { Component } from 'react';
import './app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) =>
    this.setState({ searchfield: event.target.value });

  render() {
    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchfield.toLowerCase()),
    );

    if (!robots.length) {
      return <h1 id="loading">Loading...</h1>;
    }

    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        {filteredRobots.length > 0 ? (
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        ) : (
          <p>No robots found!</p>
        )}
      </div>
    );
  }
}

export default App;
