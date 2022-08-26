let hero = ['Ivan'];
let native = ['York','Of'];
let destination = ['Poltava','In'];
const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'darkblue', 'purple'];

let rainbow = hero.concat(native, destination);
rainbow.reverse();
rainbow.unshift('Richard','Gave','Battle');
[rainbow[4], rainbow[7]] = [rainbow[7], rainbow[4]];
rainbow.pop();
[rainbow[3], rainbow[5]] = [rainbow[5], rainbow[3]];
[rainbow[4], rainbow[6]] = [rainbow[6], rainbow[4]];
[rainbow[1], rainbow[3]] = [rainbow[3], rainbow[1]];
[rainbow[2], rainbow[4]] = [rainbow[4], rainbow[2]];
rainbow.pop();
rainbow.push(`Vain`);
console.log(rainbow);

document.write(`<div style="display: flex; justify-content: space-between; margin: 0 auto; width: 500px;">`);

for (let i=0; i<rainbow.length; i++) {
    document.write(`<div style="text-align: center;">
        <div style="background: ${COLORS[i]}; width: 30px; height: 30px; border-radius: 50%; margin: 0 auto"></div>
        <p>${rainbow[i]}</p>
</div>`);
}

document.write(`</div>`);