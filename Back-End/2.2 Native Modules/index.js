const fs = require("fs");
var txt = "Hello from Laozi";
var data = new Uint8Array(Buffer.from(txt));

fs.writeFile("message.txt", data, (err) => {
    if (err) throw err;
    console.log("This file has been saved!");
})

fs.readFile("message.txt",'utf-8', (err, data) => {
    if (err) throw err;
    // const buffer = Buffer.from(data);
    // const resultString = buffer.toString('utf-8');
    console.log(data);
})