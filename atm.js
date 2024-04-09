#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 70000;
let myPin = 112233;
console.log(chalk.green(" Welcome To Ayaz Ahmed ATM."));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pin?",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.yellowBright(" Correct Pin Code."));
    let operator = await inquirer.prompt([
        {
            name: "Operator",
            type: "list",
            message: "Select Operator to Perfom Operation:",
            choices: ["Withdraw", "Check Balance", "Fast Cash", "Exit"],
        },
    ]);
    if (operator.Operator === "Withdraw") {
        let amount = await inquirer.prompt([
            {
                name: "myAmount",
                type: "number",
                message: "Enter Withdraw Amount:",
            },
        ]);
        if (amount.myAmount <= myBalance) {
            myBalance -= amount.myAmount;
            console.log(chalk.yellowBright(`Your remaining Balance is ${myBalance}.`));
        }
        else if (amount.myAmount > myBalance) {
            console.log(chalk.red("Insufficient Balance."));
        }
    }
    else if (operator.Operator === "Check Balance") {
        console.log(chalk.magenta(`Your Balance is ${myBalance}.`));
    }
    else if (operator.Operator === "Fast Cash") {
        let selectAmount = await inquirer.prompt([{
                name: "select",
                message: "Please select a amount:",
                type: "rawlist",
                choices: [1000, 5000, 10000, 15000],
            }]);
        (myBalance -= selectAmount.select),
            console.log(chalk.greenBright(` Your remaining Balance is ${myBalance}`));
    }
    else if (operator.Operator === "Exit") {
        console.log(chalk.italic.magentaBright("OK phir milenge Duaon me yaad rakhna Allah Hafiz."));
    }
}
else {
    console.log(chalk.red("Your Pin Is Incorrect!"));
}
