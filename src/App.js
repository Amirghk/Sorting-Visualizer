import './App.css';
import Navbar from './components/navbar';
import SortingVisualizer from './components/sortingvisualizer';
import React, { Component } from 'react';
import {selectionSort} from './algorithms/Selection'
import { heapSort } from './algorithms/Heap';
import { bubbleSort } from './algorithms/Bubble';
import { insertionSort } from './algorithms/insertion';
import { mergeSort } from './algorithms/Merge';
import { quickSort } from './algorithms/Quick';

const LENGTH = 60;


class App extends Component {

    state = {
      array: [],
      count: LENGTH,
      speed: 50,
    };


  componentDidMount() { // Reset The array as soon as DOM is mounted
    this.handleReset();
  }


  handleSpeed = (n) => { // function to set speed of slider to state
    let p = 100 - n;
    this.setState({ speed:p })
    console.log(this.state.speed)
  }


  handleRandom = (min, max) => { // function to generate a random number between min and max
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    
  }


  handleReset = () => { // function to generate a new random array 
    const array = [];
    for (let i = 0; i < 60; i++) {
      array.push(this.handleRandom(10, 1000));
    }
    this.setState({ array });
  }


  buttonDisabler = (n) => { // function to make buttons not work while sorting is going on
    
    let buttons = document.getElementsByClassName('btn');
    let slider = document.getElementById('slider');
    if (n === 0) {
      slider.disabled = true;
      for (let i = 0; i < buttons.length; i++)  {
        buttons[i].disabled = true;
    }
    }
    else if (n === 1) {
      slider.disabled = false;
      for (let i = 0; i < buttons.length; i++)  {
        buttons[i].disabled = false;
    }
    } 
  }

  
  handleSelection = async() => { // Selection Sort
    
    let { array } = this.state;
    this.buttonDisabler(0);
    await selectionSort(array, this.state.speed);   
    this.buttonDisabler(1);
}


  delay = (time) => { // returns an async timeout promise to make delays possible
  return new Promise(resolve => setTimeout(resolve, time));
}


  handleBubble = async() => { // Bubble Sort
    
    let { array } = this.state;
    this.buttonDisabler(0);
    await bubbleSort(array, this.state.speed);
    this.buttonDisabler(1);
  }
  

  handleMerge = async() => {  // Merge Sort
    this.buttonDisabler(0);
    let { array } = this.state;
    await mergeSort(array, this.state.speed);
    this.buttonDisabler(1);
  }


  handleQuick = async() => { // Quick Sort
    this.buttonDisabler(0);
    let { array } = this.state;
    await quickSort(array, this.state.speed);
    this.buttonDisabler(1);
  }
  


  handleHeap = async() => { // Heap Sort
    const { array } = this.state;
    this.buttonDisabler(0);
    await heapSort(array, this.state.speed);
    this.buttonDisabler(1);
  }


  handleInsertion = async() => { // Insertion Sort
    const { array } = this.state;
    this.buttonDisabler(0)
    await insertionSort(array, array.length, this.state.speed);
    this.buttonDisabler(1);

  }


  render() {
    return (
      <div>
        <Navbar onReset={this.handleReset}
        onSelection={this.handleSelection}
        onBubble={this.handleBubble}
        onMerge={this.handleMerge}
        onQuick={this.handleQuick}
        onHeap={this.handleHeap}
        onInsertion={this.handleInsertion}
        onSpeed={this.handleSpeed}/>
        <SortingVisualizer array={this.state.array}/>
      </div>
    );
  }
}

export default App;
