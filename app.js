const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const questions = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "addMembers",
            message: "What is the role of the team member you would like to add?",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "I don't want to add any more members."
            ]
        }
    ])
    .then(function(data){
        console.log(data);
        switch (data.addTeam) {
            case "Manager":
                manager();
                break;
            case "Engineer":
                engineer();
                break;
            case "Intern":
                intern();
                break;
            default:
                finish();
        }
    })
    .catch(function(err) {
        console.log(err);
    });
};

const manager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: validInput
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?",
            validate: validInput
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address?",
            validate: validInput
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the employee's office number?",
            validate: validInput
        }
    ])
    .then(function(data){
        const newMember = new Manager(data.name, data.id, data.email, data.officeNumber);
        team.push(newMember);

        questions();
    })
    .catch(function(err) {
        console.log(err);
    });;
};

const engineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: validInput
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?",
            validate: validInput
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?",
            validate: validInput
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's GitHub username?",
            validate: validInput
        }
    ])
    .then(function(data){
        // Pushes into an array
        const newMember = new Engineer(data.name, data.id, data.email, data.github);
        team.push(newMember);
        // Goes back to the starting prompt
        startPrompt();
    })
    .catch(function(err) {
        console.log(err);
    });;
};

const intern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: validInput
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?",
            validate: validInput
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?",
            validate: validInput
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the employee's school name",
            validate: validInput
        }
    ])
    .then(function(data){
        // Pushes into an array
        const newMember = new Intern(data.name, data.id, data.email, data.school);
        team.push(newMember);
        // Goes back to the starting prompt
        startPrompt();
    });
};

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

const finish = () => {
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}

questions();