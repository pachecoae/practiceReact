import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url:'https://facebook.github.io/react/',
    author: 'Person One',
    num_comments: 1,
    points: 1,
    objectID: 0,
  },
  {
    title: 'Redux',
    url:'https://github.com/reactjs/redux',
    author: 'Person Two',
    num_comments: 2,
    points: 2,
    objectID: 1,
  },
  {
    title: 'React',
    url:'https://facebook.github.io/react/',
    author: 'Person Three',
    num_comments: 3,
    points: 3,
    objectID: 2,
  },
  {
    title: 'Redux',
    url:'https://github.com/reactjs/redux',
    author: 'Person Four',
    num_comments: 4,
    points: 4,
    objectID: 3,
  },
]

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

// function isSearched(searchTerm) {
//   return function(item) {
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   }
// }

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
    }

  }

  onDismiss = (id) => {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList })
  }

  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    const {
      searchTerm,
      list
    } = this.state;
    return (
      <div className="App">
        <form>
          <input
            type="text"
            onChange={this.onSearchChange}
          />
        </form>
        {list.filter(isSearched(searchTerm)).map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span> </span>
            <span>{item.author}</span>
            <span> </span>
            <span>{item.num_comments}</span>
            <span> </span>
            <span>{item.points}</span>
            <span> </span>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                Dismiss
              </button>
            </span>
          </div>
        )}
      </div>
    );
  }

}

export default App;
