import React, { Component } from 'react';
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import './App.css';

// create navbar here 
// test this
// it's coz it's a function, not a class
// i am such a dumbass

/// EYYYY IT WORKS
class App extends Component {
  // review all of this
  state = {
    counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
    ]
  };

  constructor(){
    super();
    console.log("App - Constructor");
  }

  componentDidMount(){
    console.log("App - Mounted");
  }
  
  handleIncrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);


    counters[index] = { ...counter };
    counters[index].value++;

    console.log("Counters: " + counters + " Counter: " + this.state.counters[index] + " Index: " + index);

    this.setState({ counters })
  };


  handleDelete = (counterId) => {
    console.log("Event handler called");
    console.log(counterId);

    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters })
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({ counters });
  };


  render(){
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
