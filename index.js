// Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkDown = require('./utils/generateMarkdown')
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
  // Give the user two options for licenses
  {
    type: 'list',
    name: 'license',
    message: 'What type of license do you want?',
    choices: ['MIT', 'ISC'],
  },
  // Using filter() we can evaluate the selection to true or false
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
  // If the user wants an image, evaluate to true and prompt the image url
  {
    type: 'input',
    name: 'imageUrl',
    message: 'What is the url to your readme image?',
    when: (answers) => answers.image === true,
  },
]

// Create a function to write README file
function writeToFile(fileName, data) {
  // Using fs, we pass our desired filename, our parsed json data, and a callback
  // If there is an error, we will throw and error, otherwise we will log a success
  // Went the extra mile and colored the success in the console.log :)
  // More on colors here: https://en.m.wikipedia.org/wiki/ANSI_escape_code#Colors
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log('\x1b[32m SUCCESS! \x1b[0m')
  })
}

//Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // First we store our data into a json string and parse it after
    const data = JSON.stringify(answers)
    // We are calling writeToFile and passing in our arguments.
    // Arguments being the name of our file, and our parsed markdown data.
    writeToFile('README.md', generateMarkDown(JSON.parse(data)))
  })
}

// Function call to initialize app
init()
