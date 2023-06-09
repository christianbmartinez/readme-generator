// Include packages needed for this application
const inquirer = require('inquirer')
// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the name of your app?',
  },
  {
    type: 'input',
    name: 'projectDescription',
    message: 'How would you describe it?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should the user run to install your app?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'What type of license do you want?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Do you want a contributing section?',
  },
  {
    type: 'input',
    name: 'image',
    message: 'Do you want an image?',
  },
]

// Create a function to write README file
function writeToFile(fileName, data) {}

//Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log('\nResult:')
    console.log(JSON.stringify(answers, null, '  '))
  })
}

// Function call to initialize app
init()
