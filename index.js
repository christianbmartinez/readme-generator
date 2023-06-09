// Include packages needed for this application
const inquirer = require('inquirer')
const generateFile = require('./utils/generateMarkdown')
const fs = require('fs')
// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your app?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'How would you describe it?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should the user run to install your app?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What type of license do you want?',
    choices: ['MIT', 'ISC'],
  },
  {
    type: 'list',
    name: 'contributing',
    message: 'Do you want a contributing section?',
    choices: ['Yes', 'No'],
    filter(val) {
      return val === 'Yes' ? true : false
    },
  },
  {
    type: 'list',
    name: 'image',
    message: 'Do you want an image?',
    choices: ['Yes', 'No'],
    filter(val) {
      return val === 'Yes' ? true : false
    },
  },
  {
    type: 'input',
    name: 'imageUrl',
    message: 'What is the url to your readme image?',
    when: (answers) => answers.image === true,
  },
]

// Create a function to write README file
function writeToFile(fileName, data) {}

//Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log('\nMarkdown file data:')
    console.log(JSON.stringify(answers, null, '  '))
  })
}

// Function call to initialize app
init()
