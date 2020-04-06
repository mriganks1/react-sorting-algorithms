import React, { Component } from "react";
import SortingArea from "../SortingArea/SortingArea";
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort
} from "../SortAlgorithms";

class SortingApp extends Component {
  randomRange = () => {
    return Math.floor(Math.random() * (250 - 10 + 1) + 10);
  };

  nums = 100;

  state = {
    values: Array(this.nums)
      .fill(1)
      .map((x, i) => {
        return { height: this.randomRange(), id: i, comparing: false };
      }),
    sort: "4",
    sorted: false,
    sorting: false
  };

  render() {
    return (
      <div>
        <SortingArea {...this.state} />
        <div className="sort-actions">
          <select
            disabled={this.state.sorting}
            onChange={this.handleSortChange}
            value={this.state.sort}
          >
            <option value="0">Bubble Sort</option>
            <option value="1">Selection Sort</option>
            <option value="2">Insertion Sort</option>
            <option value="3">Merge Sort</option>
            <option value="4">Quick Sort</option>
          </select>
          <button disabled={this.state.sorting} onClick={this.handleSort}>
            Sort
          </button>
          <button disabled={this.state.sorting} onClick={this.handleShuffle}>
            Shuffle
          </button>
        </div>
      </div>
    );
  }

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
      case "3":
        mergeSort.apply(this, [this.state.values]);
        break;
      case "4":
        quickSort.apply(this, [
          this.state.values,
          0,
          this.state.values.length - 1
        ]);
        break;
      default:
        this.handleShuffle();
    }
  };

  handleShuffle = () => {
    const arr = this.state.values.map(x => {
      x.height = this.randomRange();
      x.comparing = false;
      return x;
    });
    this.setState({ values: arr, sorted: false });
  };
}

export default SortingApp;
