// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicense = (license) => {
  license === 'MIT'
    ? '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    : '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
}

// Create a function that returns a default contributing section
const renderContributing = () => {
  return `## Contributing

    Pull requests are welcome. For major changes, please open an issue first
    to discuss what you would like to change.
    
    Please make sure to update tests as appropriate.`
}

// Create a function that returns a markdown image
const renderImage = (imgUrl) => {
  return `![alt text](${imgUrl})`
}

// Create a function to generate markdown for README file
function generateMarkdown(data) {
  return `
  ${data.image ? renderImage(data.imageUrl) : ''}
  # ${data.title}
  ${data.description}
  ${data.contributing ? renderContributing() : ''}  
${renderLicense(data.license)}
`
}

module.exports = generateMarkdown
