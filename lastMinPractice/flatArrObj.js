return function deepFlatten(obj) {
    // your code goes here    
    
    let newObj = {};
    function flatten(obj, parent){
      for(let key in obj){
         let propertyKey = parent ? parent + "."+ key : key
         let value = obj[key];
            if(typeof value !== 'object'){
             newObj[propertyKey] = value;
            }else if(Array.isArray(value)){
                for(let key in value){
                      let arrKey = propertyKey + "." + key;
                        newObj[arrKey] = value[key];
                      }
            }else{
              flatten( value , propertyKey  )
            }
      }
    }
    flatten(obj)
    return newObj;
  };
  