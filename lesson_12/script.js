const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
};

let newObj = {};

function convert(obj) {

    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            let nestedObj = obj[key];
            let functionObj = convert(nestedObj);
            for (let nestedKey in functionObj) {
                newObj[nestedKey] = functionObj[nestedKey]
            }
        } else {
            newObj[key] = obj[key];
        }
    } return newObj;
}

convert(obj);
console.log(newObj);
