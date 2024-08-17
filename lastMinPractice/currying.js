// function sum(a){
//  return function(b){
//     return function(c){
//         return function(d){
//             return a + b + c + d
//         }
//     }
//  }
 
// }

// console.log(sum(1)(2)(3)(4))


// function add(a){
//     return function(b){
//        if(b) return add(a+b);
//        console.log('aa', a);
//        return a;
//     }
// }

// add(10)(20)(30)(40)()



function curry(func){
   return function curried(...args){
        if(args.length >= func.length){
            return func(...args)
        }else{
            return function (...next){
                return curried(...args, ...next)
            }
        }
   }
}

function sum(a, b, c, d){
    return a + b + c + d;
}


const total = curry(sum);
console.log(total(1)(2)(3)(40))