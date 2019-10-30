function mapToNegativize(sourceArray) {
    return sourceArray.map(n => n * -1)
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(n => n)
}

function mapToDouble(sourceArray) {
    return sourceArray.map(n => n * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(n => n * n)
}

function reduceToTotal(sourceArray, n = 0) {
    return sourceArray.reduce(function(total, element){
        return total += element;
    }, n)
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce(function(total, element) {
        if (element) {
            return true
        } else {
            return false
        }
    })
}


function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce(function(total, element) {
        if (element) {
            return true
        } else {
            return false
        }
    })
}