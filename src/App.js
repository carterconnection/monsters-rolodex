import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { CardListFamily } from './components/card-list/card-list-family.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchField: '',
      monsters: [],
      family: [
        {
          id: 'car12',
          name: 'Falon Carter'
        },
        {
          id: 'car9872',
          name: 'Nyasia Carter'
        },
        {
          id: 'car324',
          name: 'Branden Carter'
        },
        {
          id: 'car2347',
          name: 'Clarence Carter'
        },
        {
          id: 'car254652',
          name: 'Teddie Battle'
        }
        
      ]
    }

    // this.handleChange = this.handleChange.bind(this);
  }

  // lifecycle method
  // when component does mount  - other words when the page is given the new data. Or when the page is refreshed
  componentDidMount() {
    // grab user list from this api end
    fetch('https://jsonplaceholder.typicode.com/users')
      // turn response intro a readable json object
      .then(response => response.json())
      // set our monsters (within our state) to our new list our users grabbed from the api end
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, family, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    const filteredFamily = family.filter(fam =>
      fam.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>

        <SearchBox 
          placeholder='search fucker' 
          handleChange={this.handleChange} 
        />

        <CardList monsters={filteredMonsters} />

        <CardListFamily family={filteredFamily} />
      </div>
    )
  }
}

export default App;
