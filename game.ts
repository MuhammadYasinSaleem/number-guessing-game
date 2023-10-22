#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"

const sleep = () => {
    return new Promise((s) => {
        setTimeout(s, 2000);
    })
}

async function welcome() {
    let a = chalkAnimation.rainbow("Number Guessing Game");
    await sleep();
    a.stop();
}
async function call() {
    await welcome();
    let ans = await inquirer.prompt({
        type: "input",
        name: "no",
        message: chalk.greenBright("Enter your number from 1 and 50"),
        validate: (answer) => {
            if (answer > 50 || answer < 1 || isNaN(answer)) {
                return "Please enter number from 1 to 50";
            }
            return true;

        }
    })
    const num = Math.floor(Math.random() * 50);
    if (ans.no == num) {
        console.log(chalk.bgBlueBright(num + " is the correct number"));
        console.log(`${chalk.blueBright('Congratulations You guessed the correct number')} `);
    }
    else {
        console.log(chalk.bgRedBright(num + " is the correct number"));
        console.log(`${chalk.redBright('Sorry! Better Luck next time')}`);
    }
}

call();