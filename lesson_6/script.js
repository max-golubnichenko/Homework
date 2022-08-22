let questionUser = confirm(`Tell me three most important words 💚`);

if (questionUser) {

    const COUNT_OF_WORDS = 3;
    let word;
    let finalStr = ``;
    let format;

    for (let i=1; i<=COUNT_OF_WORDS; i++) {

        do{
            word = prompt(`Enter word #${i}`);
            if (word) word = word.replaceAll(` `,``);
        } while (!word || word.match(/\d/));

        do{
            format = prompt(`Choose type of transformation for "${word}": uppercase|lowercase|capitalize`);
            if (format) format = format.replaceAll(` `,``);
        } while (!format || (format !== 'uppercase' && format !== 'lowercase' && format !== 'capitalize'));

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

        finalStr += word;

        if (i === COUNT_OF_WORDS) {
            finalStr += `!`;
        } else {
            finalStr += ` `;
        }
    }

    console.log(finalStr);

} else {
    alert(`Goodbye!`);
}





