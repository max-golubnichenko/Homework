const COUNT_OF_WORDS = 3;
let word;
let finalStr = ``;
let format;
let questionUser;

questionUser = confirm(`Tell me three most important words 💚`);

if (questionUser) {

    for (let i=1; i<=COUNT_OF_WORDS; i++) {

        word = prompt(`Enter word #${i}`);
        if (word) word = word.replaceAll(` `,``);

        while (!word || word.match(/\d/)) {
            word = prompt(`Enter word #${i}`);
            if (word) word = word.replaceAll(` `,``);
        }

        format = prompt(`Choose type of transformation for "${word}": uppercase|lowercase|capitalize`);

        if (format === `uppercase`) {
            format = format.replaceAll(` `,``);
            word = word.toUpperCase();
        } else if (format === `lowercase`) {
            format = format.replaceAll(` `, ``);
            word = word.toLowerCase();
        } else if (format === `capitalize`) {
            format = format.replaceAll(` `, ``);
            word = word.charAt(0).toUpperCase() + word.slice(1);
        }

        while (!(format === 'uppercase' || format === 'lowercase' || format === 'capitalize')) {
            format = prompt(`Choose type of transformation for "${word}": uppercase|lowercase|capitalize`);
            if (format) format = format.replaceAll(` `,``);
        }

        finalStr += word;

        if (i === COUNT_OF_WORDS) {
            finalStr += `!`;
        } else {
            finalStr += ` `;
        }
    }
} else {
    alert(`Goodbye!`);
}

console.log(finalStr);




