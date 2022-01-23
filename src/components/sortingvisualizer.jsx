import React, { Component } from "react";
import "./sortingvisualizer.css";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { array } = this.props;

    return (
      <div className="array-container">
        {array.map((value, index) => (
          <div
            className="array-bar border border-dark"
            key={index}
            style={{ height: `${value / 10}%`, width: `${100 / 60}%` }}
          ></div>
        ))}
      </div>
    );
  }
}
