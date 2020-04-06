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

async function mergeSort(arr) {
  let sortHistory = [];
  let outerDepth = 1;
  let sorted = false;
  this.setState({ sorting: true, sorted: false });
  while (!sorted) {
    if (sortHistory.length > this.nums) sorted = true;
    outerDepth++;
    await sleep(WAIT_TIME + 1000);
    const final = doMergeSort(arr, outerDepth + 1);
    this.setState({ values: final });
  }
  this.setState({ sorting: false, sorted: true });

  function doMergeSort(arr, depth) {
    const len = arr.length;
    if (len <= 1) return arr;
    depth--;
    if (depth < 1) {
      return arr;
    }
    const mid = Math.floor(len / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    const res = merge(doMergeSort(left, depth), doMergeSort(right, depth));
    sortHistory.push(res);
    return res;
  }

  function merge(left, right) {
    let result = [];
    let lLen = left.length;
    let rLen = right.length;
    let l = 0,
      r = 0;
    while (l < lLen && r < rLen) {
      // await sleep(WAIT_TIME);
      if (left[l].height < right[r].height) result.push(left[l++]);
      else result.push(right[r++]);
    }
    return result.concat(left.slice(l)).concat(right.slice(r));
  }
  //
}

async function quickSort(arr, left, right) {
  const partition = async (arr, start, end) => {
    const pivotValue = arr[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
      arr[i].comparing = true;
      arr[pivotIndex].comparing = true;
      this.setState({ values: arr });
      await sleep(WAIT_TIME);
      arr[i].comparing = false;
      arr[pivotIndex].comparing = false;
      if (arr[i].height < pivotValue.height) {
        swap(arr, i, pivotIndex);
        pivotIndex++;
      }
    }
    swap(arr, right, pivotIndex);
    return pivotIndex;
  };

  if (left < right) {
    const partitionIndex = await partition(arr, left, right);
    quickSort.call(this, arr, left, partitionIndex - 1);
    quickSort.call(this, arr, partitionIndex + 1, right);
  }
  this.setState({ values: arr });
  return arr;
}

function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

export { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort };
