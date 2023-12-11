// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

const clear = require("clear");

function timer()
{
    let d = new Date();
    clear()
    console.log(`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`)

    setTimeout(() => {
        timer()
    }, 1000);
}

timer()
