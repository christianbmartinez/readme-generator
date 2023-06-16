// Create a function that returns a license badge based on which license is passed in
const renderLicense = (license) => {
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
}

// Create a function that returns a markdown image
const renderImage = (imgUrl) => {
  return `![alt text](${imgUrl})`
}

// Create a function that generates installation instructions, must use ```
const renderInstallation = (data) => {
  return '```' + data + '```'
}

// Create a function that generates usage instructions, must also use ```
const renderUsage = (data) => {
  return '```' + data + '```'
}

// Create a function to generate markdown README file
const generateMarkdown = (data) => {
  // With our parsed data passed in, we can retrieve the values using dot notation
  // First, if the user wants an image, call the image render function with the image url, otherwise return nothing
  // Next we have data.title which is the title of the app
  // After that we have data.description which is the description of the app
  // The rest of the app follows this same structure to generate the users readme
  return `
  ${renderLicense(data.license)}
  ${data.image ? renderImage(data.imageUrl) : ''}
  # ${data.title}
  ${data.description}

  ### Table of Contents
  **[Installation Instructions](#installation)**<br>
  **[Usage Instructions](#usage)**<br>
  **[License](#license)**<br>
  **[Contributing](#contributing)**<br>
  **[Tests](#tests)**<br>
  **[Questions](#questions)**<br>

  # Installation
  ${renderInstallation(data.installation)}

  # Usage
  ${renderUsage(data.usage)}

  # License
  This project is covered under the [${data.license}](https://opensource.org/licenses/${data.license}) license.

  # Contributing
  ${data.contributing}  

  # Tests
  ${data.tests}

  # Questions
  Feel free to [email](mailto:${data.email}?subject=[GitHub]%20Readme%20Generator) me with any questions or view [my github profile](https://github.com/${data.username})

  \nThis README file was created using the app :)
`
}
// Export the main generateMarkdown function so we can use it in our app.
module.exports = generateMarkdown
