Array.prototype.myMap = function (callback) {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i]))
    }
    return newArr
}

let arr = [1, 2]
function mul(num) {
    return num * 2;
}

console.log("m", arr.myMap(mul))

Array.prototype.myFilter = function (callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]))
            newArr.push(this[i])
    }
    return newArr;
}
console.log("se", arr.myFilter((ele) => ele % 2 == 0))

