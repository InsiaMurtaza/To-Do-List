import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.blueBright("\"Welcome to the To Do List Application\""));

let toDolist:string[]=[];
let condition = true;

while(condition===true){
let taskTodo = await inquirer.prompt([{
 name:"answer",
 message:"Enter the task that you have to do!",
 type:"input",
}])

toDolist.push(taskTodo.answer);
console.log(chalk.bold.greenBright("\nNew List"));
console.log(chalk.bold.greenBright(toDolist));

let moreTask = await inquirer.prompt([{
    name:"answer",
    message:"Do you want to add more task?",
    choices:["Yes","No"],
    type:"list"
}])

if(moreTask.answer==="No"){
    condition = false;
    
    console.log(chalk.bold.blueBright("\Thankyou for using this application\""));
}
else {
condition = true;    
}}



    
    
    








