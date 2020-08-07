import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/Search-box/search.component.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchState: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  stateFunction = (e) => {
    this.setState({ searchState: e.target.value });
  };

  render() {
    const { monsters, searchState } = this.state;
    const newMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchState.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          stateFunction={this.stateFunction}
        />
        <CardList monsters={newMonsters} />
      </div>
    );
  }
}
export default App;
