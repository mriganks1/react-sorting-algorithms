import React, { Component } from "react";
import SortingArea from "../SortingArea/SortingArea";
import { bubbleSort, selectionSort, insertionSort } from "../SortAlgorithms";

class SortingApp extends Component {
  state = {
    values: Array(100)
      .fill(1)
      .map((x, i) => {
        return { height: Math.floor(Math.random() * 200), id: i };
      }),
    sort: "0",
    sorted: false
  };

  render() {
    return (
      <div>
        <SortingArea {...this.state} />
        <div className="sort-actions">
          <select onChange={this.handleSortChange} value={this.state.sort}>
            <option value="0">Bubble Sort</option>
            <option value="1">Selection Sort</option>
            <option value="2">Insertion Sort</option>
          </select>
          <button disabled={this.state.sorted} onClick={this.handleSort}>
            Sort
          </button>
          <button disabled={!this.state.sorted} onClick={this.handleShuffle}>
            Shuffle
          </button>
        </div>
      </div>
    );
  }

  wait = ms => {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  };

  handleSortChange = e => {
    this.setState({ sort: e.target.value });
    if (this.state.sorted) this.handleShuffle();
  };

  handleSort = () => {
    switch (this.state.sort) {
      case "0":
        bubbleSort.apply(this, [this.state.values]);
        break;
      case "1":
        selectionSort.apply(this, [this.state.values]);
        break;
      case "2":
        insertionSort.apply(this, [this.state.values]);
        break;
      default:
        this.handleShuffle();
    }
  };

  handleShuffle = () => {
    const arr = this.state.values.map(x => {
      x.height = Math.floor(Math.random() * 200);
      return x;
    });
    this.setState({ values: arr, sorted: false });
  };
}

export default SortingApp;
