function stringifyNumbers(obj){
  // add whatever parameters you deem necessary - good luck!
  const stringifiedObj = JSON.parse(JSON.stringify(obj))

  for (const property in stringifiedObj) {
    const value = stringifiedObj[property]
    if(typeof value === 'number') {
        stringifiedObj[property] = value.toString();
    }
    if(typeof value === 'object') {
      stringifiedObj[property] = stringifyNumbers(value)
    }
  }


  return stringifiedObj
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj))

console.log(obj)