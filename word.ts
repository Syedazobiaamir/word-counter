#! usr/bin/env node
import inquirer from "inquirer";
let count :{sentence:string} = await inquirer.prompt([{

name:"sentence",
type:"input",
message:"enter your sentence to count the word"
}])
const words= count.sentence.split(" ");
console.log(`count sentence${words.length}`); 