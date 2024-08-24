#!/usr/bin/env node

import inquirer from "inquirer";

class Student {
    name:string 
    constructor(n:string){
        this.name=n    
    }
}

class Person{
    students:Student[]=[]
    addStd(object:Student){
        this.students.push(object)
    }
}

const persons = new Person()

const startprogram =async(persons:Person)=>{
    do{
    console.log("Welcome!");
    const ques = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "Whom would you like to interact with?",
        choices: ["Staff","Student","Exit"]
    })
    if(ques.select == "Staff"){
        console.log("You approach the staff room.Please feel free to ask any question.")
         
    }
    else if(ques.select == "Student"){
        const ans =  await inquirer.prompt({
            name: "student",
            type: "input",
            message: "Enter the student's name you wish to engage with:",
        })
        const student = persons.students.find(val => val.name == ans.student)      
        if(!student){
            const name = new Student(ans.student)
            persons.addStd(name)
            console.log(`Hello, I am ${name.name}. Nice to meet you!`);
            console.log("New student added");
            console.log("Current student list:");
            console.log(persons.students)
        } else {
            console.log(`Hello, I am ${student.name}. Nice to see you again!`);
            console.log("Existing student list:");
            console.log(persons.students)
        }
    }else if(ques.select == "Exit"){
        console.log("Exiting the program...");
        process.exit()
    }
    }while(true)
}   

startprogram(persons)