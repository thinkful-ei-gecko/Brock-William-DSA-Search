import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       input: '',
       searchVal: 0,
    }
  }

  updateInput = (e) => {
    e.preventDefault();
    this.setState({input: e.target.value});
  };

  updateSearchVal = (e) => {
    e.preventDefault();
    this.setState({searchVal: e.target.value});
  };

  binarySearch = (array, value = this.state.input, start = 0, end = array.length -1, counter = 0) => {
    
    this.setState({counter})
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;

    if (start > end) {
      return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    if (item == value) {
      return index;
    } 
    else if (item < value) {
      return this.binarySearch(array, value, index + 1, end, counter + 1);
    } 
    else if (item > value) {
      return this.binarySearch(array, value, start, index , counter + 1);
    }
  };

  linearSearch = (array, value) => {
    let counter = 1;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == value) {
        this.setState({counter})
        return i;
      }
      else {
        counter++;
      }
    }
    this.setState({counter})
    return -1;
  };

  onLinearSubmit = (e) => {
    e.preventDefault();
    let string = this.state.input;
    let newArray = string.split(' ').map(Number);
    let searchVal = this.state.searchVal;

    this.linearSearch(newArray, searchVal)
  }

  onBinarySubmit = (e) => {
    e.preventDefault();
    let string = this.state.input;
    let newArray = string.split(' ').map(Number).sort((a,b) => (a-b));
    let searchVal = this.state.searchVal;

    this.binarySearch(newArray, searchVal)
  }

  render() {
    //console.log(this.state.counter)
    return (
      <div className="App">
        <h1>BST Search React</h1>
        <input
          type="text"
          id="input"
          title="Input"
          placeholder="Input here"
          value={this.state.input}
          onChange={this.updateInput}
        ></input>
        <input
          type="number"
          id="searchVal"
          title="SearchVal"
          placeholder="Search Value"
          value={this.state.searchVal}
          onChange={this.updateSearchVal}
        ></input><br/><br/>
        <button className="linearSearch" onClick={this.onLinearSubmit}>
          Click here to Search Linearly
        </button>
        <button className="binarySearch" onClick={this.onBinarySubmit}>
          Click here to Search Binarily
        </button>
        <div className="LinearSearchOutput">
          <span>
            It Took this many searches: {this.state.counter}
          </span>
        </div>
      </div>
    );
  }
}

export default App;
