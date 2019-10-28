// Your code here
function mapToNegativize(sourceArray){
let result = []
for (let i = 0; i<sourceArray.length; i++){
  result[i]=sourceArray[i]*-1
}
return result
}

function mapToNoChange(sourceArray){
  let result = []
for (let i = 0; i<sourceArray.length; i++){
  result[i]=sourceArray[i]*-1
}
return sourceArray
}

function mapToDouble(sourceArray){
   let result = []
for (let i = 0; i<sourceArray.length; i++){
  result[i]=sourceArray[i]*2
}
return result 
}

function mapToSquare(sourceArray){
   let result = []
for (let i = 0; i<sourceArray.length; i++){
  result[i]=sourceArray[i]**2
}
return result 
}



function reduceToTotal(sourceArray, startingPoint=0){
let sum = startingPoint
for (let i = 0; i<sourceArray.length; i++){
  sum = sum + sourceArray[i]
}
return sum
}

function reduceToAllTrue(sourceArray){
  let result = true
for (let i = 0; i<sourceArray.length; i++){
  if (!sourceArray[i]){
    result = false
  }
}
return result
}

function reduceToAnyTrue(sourceArray){
   
for (let i = 0; i<sourceArray.length; i++){
  if (sourceArray[i]){
   return true
  }
}
return false
}