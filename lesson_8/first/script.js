let sports = [
    ['skier','⛷'],
    ['snowboarder','🏂'],
    ['apple','🍎'],
    ['hockey','🏒'],
    ['ice skate','⛸'],
    ['swimmer','🏊'],
    ['surfer','🏄‍'],
    ['watermelon','🍉'],
    ['lemon','🍋'],
    ['rowboat','🚣'],
    ['bicyclist','🚴‍']
];

let summer_sports = sports.slice(5);

let winter_sports = sports.slice(0, 5);

let fruits = summer_sports.splice(2,2);
fruits.push(winter_sports.splice(2,1)[0]);

console.log(`*** Winter sports ***
${winter_sports[0].join(`: `)}
${winter_sports[1].join(`: `)}
${winter_sports[2].join(`: `)}
${winter_sports[3].join(`: `)}

*** Summer sports ***
${summer_sports[0].join(`: `)}
${summer_sports[1].join(`: `)}
${summer_sports[2].join(`: `)}
${summer_sports[3].join(`: `)}

*** Fruits ***
${fruits[0].join(`: `)}
${fruits[1].join(`: `)}
${fruits[2].join(`: `)}
`);