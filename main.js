#! /usr /bin/env/node
import inquirer from "inquirer";
let mybalance = 500000;
const myPin = 13579;
console.log(`Your current balance is: ${mybalance}`);
let enterPin = await inquirer.prompt([
    {
        name: "enterPin",
        message: "Enter your pin please:",
        type: "number",
    }
]);
if (enterPin.enterPin === myPin) {
    let operations = await inquirer.prompt([
        {
            name: "choices",
            message: "Please select an option",
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    if (operations.choices === "Withdraw") {
        let amountwithdraw = await inquirer.prompt([
            {
                name: "Amount",
                message: "Enter Amount",
                type: "number",
            }
        ]);
        if (amountwithdraw.Amount > mybalance) {
            console.log("You don't have enough funds to withdraw");
            console.log("Your current balance is ", mybalance);
        }
        else {
            mybalance -= amountwithdraw.Amount;
            console.log(`Now you current balance is ${mybalance}`);
            console.log(`Your withdraw ${amountwithdraw.Amount}`);
        }
    }
    else if (operations.choices === "Check Balance") {
        console.log("Your balance is", mybalance);
    }
}
else {
    console.log("Incorrect Pin...");
}
