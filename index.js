// Your code here

function mapToNegativize(array){
   let empty = []
    for (let i = 0; i  < array.length; i++){
    empty.push(-1 * array[i])
    }
    return empty
}

function mapToNoChange(array){
    let empty = []
    for (let i = 0; i  < array.length; i++){
    empty.push(array[i])
    }
    return empty
}

function mapToDouble(array){
    let empty = []
    for (let i=0;  i < array.length; i++){
        empty.push(array[i] * 2)
    }
    return empty
}

function mapToSquare(array){
    let empty = []
    for (let i=0;  i < array.length; i++){
        empty.push(array[i] * array[i])
    }
    return empty
}

function reduceToTotal(array, startingPoint=0){
    let total = startingPoint
    for (let i=0;  i < array.length; i++){
        total = total + array[i]
      }
    return total
}

function reduceToAllTrue(array){
    for (let i=0; i < array.length; i++){
        if (!array[i]) return false
    }
    return true
}

function reduceToAllFalse(array){
    for (let i=0; i < array.length; i++){
        if (array[i]) return true
    }
    return false
}

function reduceToAnyFalse(array){
    for (let i=0; i < array.length; i++){
        if (!array[i]) return false
    }
    return true
}

function reduceToAnyTrue(array){
    for (let i=0; i < array.length; i++){
        if (array[i]) return true
    }
    return false
}
