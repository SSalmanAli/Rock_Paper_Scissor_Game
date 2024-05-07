#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let name = await inquirer.prompt([
    {
        name: "player",
        message: "Enter your name PLAYER",
        type: "input"
    }
]);
console.log(chalk.blue("**********************************************************************************"));
console.log(chalk.blue("*") + chalk.yellow.bold(`  Welcome ${name.player} to THE ULTIMATE " 🗿ROCK  |  📄PAPER  |  ✂️SCISSOR " SHOWDOWN!  `) + chalk.blue("*"));
console.log(chalk.blue("**********************************************************************************"));
let x = await inquirer.prompt([
    {
        name: "y",
        message: "Input the number of rounds you want to play",
        type: "input"
    }
]);
console.log(chalk.blue("**********************************************************"));
let initialResultRock = 0;
let initialResultPaper = 0;
let initialResultScissor = 0;
let r = 1;
let i = 0;
while (i < x.y) {
    let selectOptions = await inquirer.prompt([
        {
            name: "options",
            message: `ROUND ${r}:\n Choose the action you want to perform`,
            type: "list",
            choices: ["Rock", "Paper", "Scissor"]
        }
    ]);
    let randomNumber = Math.floor(Math.random() * 30 + 1);
    if (selectOptions.options === "Rock" || selectOptions.options === "Paper" || selectOptions.options === "Scissor") {
        if (randomNumber <= 10) {
            console.log(chalk.yellow.bold(`You chose = ${selectOptions.options}\nComputer = Rock\n`));
            if (selectOptions.options === "Rock") {
                console.log(chalk.cyanBright.bold("Draw  points = 0"));
            }
            else if (selectOptions.options === "Paper") {
                console.log(chalk.green.bold("You Win points = 10"));
                initialResultRock++;
            }
            else {
                console.log(chalk.red.bold("You lose!!! points = -10"));
                initialResultRock--;
            }
            console.log(chalk.blue("**********************************************************"));
        }
        else if (randomNumber > 10 && randomNumber <= 20) {
            console.log(chalk.yellow.bold(`You chose = ${selectOptions.options}\nComputer = Paper\n`));
            if (selectOptions.options === "Paper") {
                console.log(chalk.cyanBright.bold("Draw  points = 0"));
            }
            else if (selectOptions.options === "Scissor") {
                console.log(chalk.green.bold("You Win points = 10"));
                initialResultPaper++;
            }
            else {
                console.log(chalk.red.bold("You lose!!! points = -10"));
                initialResultPaper--;
            }
            console.log(chalk.blue("**********************************************************"));
        }
        else {
            console.log(chalk.yellow.bold(`You chose = ${selectOptions.options}\nComputer = Scissor\n`));
            if (selectOptions.options === "Scissor") {
                console.log(chalk.cyanBright.bold("Draw  points = 0"));
            }
            else if (selectOptions.options === "Rock") {
                console.log(chalk.green.bold("You Win points = 10"));
                initialResultScissor++;
            }
            else {
                console.log(chalk.red.bold("You lose!!! points = -10"));
                initialResultScissor--;
            }
            console.log(chalk.blue("**********************************************************"));
        }
    }
    i++;
    r++;
}
let result = initialResultPaper + initialResultRock + initialResultScissor;
console.log(chalk.yellow.bold("GRAND TOTAL"));
console.log(chalk.yellow.bold(`Number of rounds played = ${x.y}`));
console.log(chalk.yellow.bold(`TOTAL = ${result}`));
if (result > 0) {
    console.log(chalk.black.bgWhite(`Player ${name.player} U won Against Computer`));
}
else if (result < 0) {
    console.log(chalk.black.bgWhite(`Player ${name.player} U lost Against Computer\n Better luck next time :)`));
}
else {
    console.log(chalk.black.bgWhite(`ITS A DRAW TRY AGAIN`));
}
