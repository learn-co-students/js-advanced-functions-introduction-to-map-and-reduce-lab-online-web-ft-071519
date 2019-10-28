function mapToNegativize(arr) {
    const negatives = []
    arr.forEach(ele => {
      negatives.push(ele * (-1))
    })
    return negatives;
}

function mapToNoChange(arr) {
  return arr;
}

function mapToDouble(arr) {
    const doubled = [];
    arr.forEach(ele => {
        doubled.push(ele * 2)
    })
    return doubled;
}

function mapToSquare(arr) {
    const squared = [];
    arr.forEach(ele => {
        squared.push(ele * ele)
    })
    return squared;
}

function reduceToTotal(arr, start = 0) {
    let current = start;
    let i = 0
    for (i = 0; i < arr.length; i++) {
      current += arr[i]
    }
    return current;
}

function reduceToAllTrue(arr) {
    let truthiness = true;
    let i = 0;

    for(i =0; i < arr.length; i++){
        if (arr[i] == false) {
            return false;
        }
    }
    return true
}

function reduceToAnyTrue(arr) {
    let i = 0;

    for(i = 0; i < arr.length; i++) {
        if (arr[i] == true) {
            return true;
        }
    }
    return false;
}