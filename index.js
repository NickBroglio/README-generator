// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("./dist/README.md", data, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    // TODO: Create an array of questions for user input
    inquirer
    .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is the description of your project?',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What are the installation instructions?',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Usage',
            },
            {
                type: 'list',
                name: 'license',
                message: 'What are your licenses?',
                choices: ['MIT', 'APACHE', 'none'],
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Who contributed to this project?',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'What tests were performed on this project?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?',
            },
    ])
    .then((data) => {
        const contentData = generateMarkdown(data);
            writeToFile(contentData);
});
 }

// Function call to initialize app
init();