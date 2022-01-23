# SORTING VISUALIZER

### Video Demo: <URL HERE>

## Description:

### About the project:

Sorting Visualizer is a Website That tries to visualize 6 different Sorting algorithms.

the reason i decided to do a Sorting Visualizer for my final CS50 project was so that i could learn more about front end developement and also to fully understand some of the sorting algorithms. namely Insertion, Selection, Bubble, merge, Quick and heap sort. it was a real challenge trying to animate the sorting algorithm as they were happening, which led me to learn a lot about React.js and JavaScript.

### Built With:

- [JavaScript](https://www.javascript.com/)
- [React.js](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)

### Usage

press the Reset Array button to make a new list of elements with random heights.

Use the Speed slider to change the speed of animations.

use the drop down menu to select the sorting algorithm you wish to see animated.

### Files

- **App.js** is the main part of the site as it gets called when user wants to sort or change animation speed and sortHandlers are in it, it also has functions for making the random array and for disabling and enabling buttons while a sort is ongoing.

- **navbar.jsx** is a component which contains navbar and the buttons therein and is responsible for calling different sortHandlers.

- **sortingbvisualizer.jsx** is a component that contains the container for the array and the bars which represent the array.

- **Algorithms folder** contains the helper files for each of the 6 algorithms written in js which include the functions for the sorts and also sometimes additional functions to make a list of animations or to swap two elements.

### Design Choices

most of the sorting animations in this project are done using only delays (async functions returning promises) in swaps of the elements, but for some sorts (Merge & Quick) i had to do additional steps to make an array of animations and later loop through those with a delay.
