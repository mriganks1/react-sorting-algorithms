const WAIT_TIME = 0;

async function bubbleSort(arr) {
  this.setState({ sorting: true });
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      await sleep(WAIT_TIME);
      arr[j].comparing = true;
      arr[j + 1].comparing = true;
      this.setState({ values: arr });
      if (arr[j].height > arr[j + 1].height) {
        arr = swap(arr, j, j + 1);
      }
      await sleep(WAIT_TIME);
      arr[j].comparing = false;
      arr[j + 1].comparing = false;
      this.setState({ values: arr });
    }
  }
  this.setState({ sorted: true, sorting: false });
}

async function selectionSort(arr) {
  this.setState({ sorting: true });
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    let minIndex = i;
    await sleep(WAIT_TIME);
    for (let j = i; j < length; j++) {
      arr[i].comparing = true;
      arr[j].comparing = true;
      this.setState({ values: arr });
      if (arr[minIndex].height > arr[j].height) {
        arr[minIndex].comparing = false;
        minIndex = j;
      }
      await sleep(WAIT_TIME);
      arr[j].comparing = false;
      arr[i].comparing = false;
      this.setState({ values: arr });
    }
    arr = swap(arr, minIndex, i);
    arr[minIndex].comparing = false;
    arr[i].comparing = false;
    this.setState({ values: arr });
  }
  this.setState({ sorted: true, sorting: false });
}

async function insertionSort(arr) {
  this.setState({ sorting: true });
  const length = arr.length;
  for (let i = 1; i < length; i++) {
    await sleep(WAIT_TIME);
    let el = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1].height > el.height) {
      arr[i].comparing = true;
      arr[j].comparing = true;
      arr[j - 1].comparing = true;
      this.setState({ values: arr });
      await sleep(WAIT_TIME);
      arr[j - 1].comparing = false;
      arr[j].comparing = false;
      arr[i].comparing = false;
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = el;
    this.setState({ values: arr });
  }
  this.setState({ sorted: true, sorting: false });
}

function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
}

function sleep(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

export { bubbleSort, selectionSort, insertionSort };
