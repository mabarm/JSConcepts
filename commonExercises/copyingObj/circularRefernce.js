function stringifyWithCircularRefs(obj) {
    const seen = new WeakSet();
    
    return JSON.stringify(obj, (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return "[Circular]";
            }
            seen.add(value);
        }
        return value;
    });
}

const obj = {};
obj.self = obj;

console.log(stringifyWithCircularRefs(obj)); // {"self":"[Circular]"}
