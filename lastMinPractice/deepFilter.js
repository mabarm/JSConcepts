return function deepFilter(obj, filter) {
    const result = {};
  
    function hello(obj, filter){
      for (const key in obj) {
        const value = obj[key];
        if (filter(value)) {
          result[key] = value;
        } else if (typeof value === 'object' && value !== null) {
          const filtered = hello(value, filter);
          if (Object.keys(filtered).length > 0) {
            result[key] = filtered;
          }
        }
      }
    }
    hello(obj, filter)
  
    return result;
  };