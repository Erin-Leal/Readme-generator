//consts
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

//question object
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "Title",
            message: "Title of your project?"
        },
        {
            type: "input",
            name: "Description",
            message: "Describe the application."
        },
        {
            type: "input",
            name: "TableOfContents",
            message: "The table of contents is?"
        },
        {
            type: "input",
            name: "Installation",
            message: "How do you install the program?"
        },
        {
            type: "input",
            name: "Usage",
            message: "How do you use it?"
        },
        {
            type: "input",
            name: "License",
            message: "What kind of licence?"
        },
        {
            type: "input",
            name: "Contributing",
            message: "Who developed the application?"
        },
        {
            type: "input",
            name: "Tests",
            message: "Explain the tests you've run on it."
        },
        {
            type: "input",
            name: "Questions",
            message: "Common questions?"
        },
        {
            type: "input",
            name: "Badge",
            message: "Make some keyboard art."
        }
    ]);
}

// function to write README file
function generateReadme(answers) {
    return `
    ===================================================
    ${answers.Title}
    +++++++++++++++++++++++++++++++++++++++++++++++++++
    ${answers.Description}
    
    ---------------------------------------------------
    
    ${answers.TableOfContents}
    
    ---------------------------------------------------
    
    ${answers.Installation}
    
    ---------------------------------------------------
    
    ${answers.Usage}
    
    ---------------------------------------------------
    
    ${answers.License}
    
    ---------------------------------------------------
    
    ${answers.Contributing}
    
    ---------------------------------------------------
    
    ${answers.Tests}
    
    ---------------------------------------------------
    
    ${answers.Questions}
    
    +++++++++++++++++++++++++++++++++++++++++++++++++++
    ${answers.Badge}
    ===================================================`;
}

    //Question prompt function
    promptUser()
        .then(function (answers) {
            const readme = generateReadme(answers);

            return writeFileAsync("README.md", readme);
        })
        .then(function () {
            console.log("Successfully wrote to README.md");
        })
        .catch(function (err) {
            console.log(err);
        });