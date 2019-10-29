function mapToNegativize(sourceArray) {
    let newArray = []
    sourceArray.forEach(element => {
        newArray.push(element * -1)
    });
    return newArray
}
function mapToNoChange(sourceArray){
    return sourceArray
}
function mapToDouble(sourceArray){
    let newArray = []
    sourceArray.forEach(element => {
        newArray.push(element * 2)
    });
    return newArray
}
function mapToSquare(sourceArray){
    let newArray = []
    sourceArray.forEach(element => {
        newArray.push(element ** 2)
    });
    return newArray
}
 
function reduceToTotal(sourceArray, startingPoint = 0){
    let total = startingPoint
    sourceArray.forEach(element => {
        total += element
    });
    return total
}
function reduceToAllTrue(sourceArray){
    return sourceArray.every(x => !!x)
}

function reduceToAnyTrue(sourceArray){
    return sourceArray.some(x => x === true)
}