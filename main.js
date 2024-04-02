import inquirer from "inquirer";
import chalk from "chalk";
const sytemGeneratedNo = Math.floor(Math.random() * 10);
//console.log(sytemGeneratedNo);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Enter your Guessing number: ",
    }
]);
const { userGuess } = answers;
if (userGuess === sytemGeneratedNo) {
    console.log(chalk.black(chalk.bgCyanBright(`\nYes, your answer is correct, You Win!! \n`)));
    console.log(chalk.yellow(`You Guess the answer: ${answers.userGuess}\nSystem Generated Number is: ${sytemGeneratedNo}`));
}
else {
    console.log("Please try again better Luck, Next Time!!!");
    console.log(chalk.yellow(`System Generated Number is ${sytemGeneratedNo} and You Guessing the number is ${answers.userGuess}`));
}
