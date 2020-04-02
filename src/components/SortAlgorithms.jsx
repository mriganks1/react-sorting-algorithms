function bubbleSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      setTimeout(() => {
        if (arr[j].height > arr[j + 1].height) {
          arr = swap(arr, j, j + 1);
        }
        this.setState({ values: arr });
      }, 10);
    }
  }
  this.setState({ sorted: true });
}

function selectionSort(arr) {
  const length = arr.length;
  console.log(this.state);
  for (let i = 0; i < length; i++) {
    let minIndex = i;
    setTimeout(() => {
      for (let j = i; j < length; j++) {
        if (arr[minIndex].height > arr[j].height) minIndex = j;
      }
      arr = swap(arr, minIndex, i);
      this.setState({ values: arr });
    }, 10);
  }
  this.setState({ sorted: true });
}

function insertionSort(arr) {
  const length = arr.length;
  for (let i = 1; i < length; i++) {
    setTimeout(() => {
      let el = arr[i];
      let j = i;

      while (j > 0 && arr[j - 1].height > el.height) {
        arr[j] = arr[j - 1];
        j--;
      }
      arr[j] = el;
      this.setState({ values: arr });
    }, 10);
  }
  this.setState({ sorted: true });
}

function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
}

export { bubbleSort, selectionSort, insertionSort };
