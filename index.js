// Your code here
//map- like methods
const mapToNegativize = function (sourceArray) {
    let newArr = [];
    for (let i = 0; i < sourceArray.length; i++){
        newArr.push(sourceArray[i]* -1)
    }
    return newArr
}

const mapToNoChange = function (sA) {
    let newArr = [];
    for (let i = 0; i < sA.length; i++) {
        newArr.push(sA[i])
    }
    return newArr
}

const mapToDouble = function (sA) {
    let newArr = [];
    for (let i = 0; i < sA.length; i++){
        newArr.push(sA[i] * 2)
    }
    return newArr
}

const mapToSquare = function (sA) {
    let newArr = [];
    for (let i = 0; i < sA.length; i++){
        newArr.push(sA[i] * sA[i])
    }
    return newArr
}

// reduce-like methods
const reduceToTotal = function (sA, start= 0) {
    let val = start; 
    for (let i = 0; i < sA.length; i++){
        val += sA[i]
    }
    return val
}

const reduceToAllTrue = function (sA) {
    let val = true; 
    for (let i = 0; i < sA.length; i++){
        val = sA[i]
        if (val == false){ 
            return val 
        }
    }
    return true;
}

const reduceToAnyTrue = function (sA) {
    let val = false;
    for (let i = 0; i < sA.length; i++){
        if (!!sA[i] == true) {
            val = true;
        }
    }
    return val;
}