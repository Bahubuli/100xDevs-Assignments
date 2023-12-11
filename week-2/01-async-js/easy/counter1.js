const clear = require("clear")

setInterval(() => {
    let d = new Date();
    clear()
    console.log(`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`)
}, 1000);

