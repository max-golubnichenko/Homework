let arr = [];
let lengthArr;
let minRandomEl;
let maxRandomEl;

function getRandomIntInclusive(minRandomEl, maxRandomEl) {
    minRandomEl = Math.ceil(minRandomEl);
    maxRandomEl = Math.floor(maxRandomEl);
    return Math.floor(Math.random() * (maxRandomEl - minRandomEl + 1)) + minRandomEl; //Максимум и минимум включаются
}

do{
    lengthArr = prompt(`What is the length of the array you want?`);
    if (lengthArr) lengthArr = lengthArr.replaceAll(` `,``);
    lengthArr = Math.abs(lengthArr);
    lengthArr = Math.round(lengthArr);
    arr = [lengthArr];
} while (lengthArr<2 || lengthArr>10);

do{
    minRandomEl = prompt(`What is the minimum array value you want?`);
    if (minRandomEl) minRandomEl = minRandomEl.replaceAll(` `,``);
    minRandomEl = Math.round(minRandomEl);
} while (minRandomEl<-10 || minRandomEl>10);

do{
    maxRandomEl = prompt(`What is the maximum array value you want?`);
    if (maxRandomEl) maxRandomEl = maxRandomEl.replaceAll(` `,``);
    maxRandomEl = Math.round(maxRandomEl);
} while (maxRandomEl<minRandomEl || maxRandomEl>50);

for(let i=1; i<=lengthArr - 1; i++){
    arr[arr.length] = getRandomIntInclusive(minRandomEl, maxRandomEl);
}

minRandomEl = maxRandomEl = arr[0];

for(let i=1; i<arr.length; i++){
    if(arr[i] < minRandomEl){
        minRandomEl = arr[i];
    }

    if(arr[i] > maxRandomEl){
        maxRandomEl = arr[i];
    }
}

let indexOfMin = arr.indexOf(minRandomEl);
let indexOfMax = arr.indexOf(maxRandomEl);

let tempVal = arr[indexOfMin];
arr[indexOfMin] = arr[indexOfMax];
arr[indexOfMax] = tempVal;

console.log(arr);
console.log(minRandomEl, maxRandomEl);