import inquirer from "inquirer";
let count = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "enter your sentence to count the word"
    }]);
const words = count.sentence.split(" ");
console.log(`count sentence${words.length}`);
