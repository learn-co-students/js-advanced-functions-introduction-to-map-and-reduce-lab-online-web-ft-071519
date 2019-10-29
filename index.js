// my own map-like methods
// mapToNegativize returns an array with all values made negative
// 1) transforms correctly

// mapToNegativize returns an array with all values made negative
// 1) transforms correctly
const mapToNegativize = function(array) {
    const negArray = [];
    for (const element of array) {
        negArray.push(element * -1)
    }
    return negArray
};

// mapToNoChange returns an array with the original values
// 2) transforms correctly
const mapToNoChange = function(array) {
    return array
};

// mapToDouble returns an array with the original values multiplied by 2
// 3) transforms correctly
const mapToDouble = function(array) {
    const doubledArray = [];
    for (const element of array) {
        doubledArray.push(element * 2)
    }
    return doubledArray
};

// mapToSquare returns an array with the original values squared
// 4) transforms correctly
const mapToSquare = function(array) {
    const squaredArray = [];
    for (const element of array) {
        squaredArray.push(element ** 2)
    }
    return squaredArray
};

// my own reduce-like methods

// reduceToTotal returns a running total when not given a starting point
// 5) reduces correctly
// reduceToTotal returns a running total when given a starting point
// 6) reduces correctly
const reduceToTotal = function(array, startingPoint = 0) {
    let total = startingPoint;
    for (const element of array) {
        total += element
    }
    return total
};

// reduceToAllTrue returns true when all values are truthy
// 7) reduces correctly
// reduceToAllTrue returns false when any value is falsy
// 8) reduces correctly
const reduceToAllTrue = function (array) {
    let result = true;
    for (const element of array) {
        if (element == false) {
            result = false;
            break;
        }
    }
    return result
};

// reduceToAnyTrue returns true when a true value is present
// 9) reduces correctly
// reduceToAnyTrue returns false when no true value is present
// 10) reduces correctly
const reduceToAnyTrue = function (array) {
    let result = false;
    for (const element of array) {
        if (element == true) {
            result = true;
            break;
        }
    }
    return result
};