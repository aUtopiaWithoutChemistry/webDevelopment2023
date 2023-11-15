/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image';

// to identify a question's information in inquirer format
const questions = [
    {
      type: 'input',
      name: 'url',
      message: "Please input the URL here:",
    }];

// first prompt the question and then get the user's input
inquirer.prompt(questions)
    .then((answers) => {
        const valueToPrint = answers["url"];
        console.log(valueToPrint);
        // console.log(JSON.stringify(answers, null, '  '));

        // to store user input URL to a txt file
        fs.writeFile("userURL.txt", valueToPrint, (err) => {
            if (err) throw err;
            console.log("file saved!");
        })

        // to generate qr image by passing the user input URL
        var qr_svg = qr.image(valueToPrint, { type: 'png' });
        qr_svg.pipe(fs.createWriteStream('URL.png'));
    });
