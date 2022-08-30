const animals = [
    ['🐭','mouse','Jerry'],
    ['🐹','hamster','Biscuit'],
    ['🐰','rabbit','Bugs'],
    ['🦊','fox','Mrs. Fox'],
    ['🐻','bear','Paddington']
];

const food = [
    ['🍎','apple',10],
    ['🍐','pear',12],
    ['🍊','tangerine',15],
    ['🍋','lemon',5],
    ['🍌','banana',7]
];

function getInfo(arr, title){
    let TRs = [];
    for(let i = 0; i<arr.length; i++){

        let TDs = [];
        for(let j = 0; j<arr[i].length; j++){
            TDs.push(`<td>${arr[i][j]}</td>`);
        }

        TRs.push(`<tr>${TDs.join(``)}</tr>`);

    }

    return `<table border="1">
    <caption>${title}</caption>
    ${TRs.join(``)}
    </table>`

}

document.write(getInfo(animals, `Animals`));
document.write(getInfo(food, `Food`));