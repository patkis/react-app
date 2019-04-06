import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Patrik', age: 30 },
      { id: 2, name: 'Max', age: 28 },
      { id: 3, name: 'Manu', age: 29 },
    ],
    showPersons: true,
    showPersonsText: 'Hide Persons'
  }

  changeNameHandler = (id, event) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const persons = [...this.state.persons];
    const person = persons[personIndex];
    person.name = event.target.value;
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  togglePersonHandler = () => {
    let showPersons = !this.state.showPersons;
    let showPersonsText = (showPersons) ? 'Hide Persons' : 'Show Persons'
    this.setState({
      showPersons: showPersons,
      showPersonsText: showPersonsText
    });
  }

  render() {

    const buttonClassNames = ['btn'];


    let persons = '';
    if (this.state.showPersons) {
      persons = this.state.persons.map(person => {
        return <Person
          key={person.id}
          name={person.name}
          age={person.age}
          delete={this.deletePersonHandler.bind(this, person.id)}
          change={this.changeNameHandler.bind(this, person.id)} />
      });
    }

    return (
      <div className="App">
        <button className={buttonClassNames.join(' ')} onClick={this.togglePersonHandler}>{this.state.showPersonsText}</button>
        {persons}
      </div>
    );
  }
}

export default App;
