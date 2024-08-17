return function flattenArray(arr) {
    // your code goes here  
    let newArr = [];
    function flatMyArr(arr, newArr){
      for(let key in arr){
          let value = arr[key];
          if(Array.isArray(value)){
            flatMyArr(value, newArr)
          }else{
              newArr.push(value)
          }
        }
    }
    flatMyArr(arr, newArr);
    return newArr;
  };