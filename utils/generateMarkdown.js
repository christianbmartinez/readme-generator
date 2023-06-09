// Create a function that returns a license badge based on which license is passed in
const renderLicense = (license) => {
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
}

// Create a function that returns a default contributing section
const renderContributing = () => {
  return `# Contributing

    Pull requests are welcome. For major changes, please open an issue first
    to discuss what you would like to change.
    
    Please make sure to update tests as appropriate.`
}

// Create a function that returns a markdown image
const renderImage = (imgUrl) => {
  return `![alt text](${imgUrl})`
}

// Create a function to generate markdown README file
const generateMarkdown = (data) => {
  // With our parsed data passed in, we can retrieve the values using dot notation
  // First, if the user wants an image, call the image render function with the image url, otherwise return nothing
  // Next we have data.title which is the title of the app
  // After that we have the description of the app
  // If the user chooses to have a contributing section, render it, otherwise return nothing
  // Finally, render the license type the user chose.
  return `
  ${data.image ? renderImage(data.imageUrl) : ''}
  # ${data.title}
  ${data.description}
  ${data.contributing ? renderContributing() : ''}  
  ${renderLicense(data.license)}
  This README file was created using the app :)
`
}
// Export the main generateMarkdown function so we can use it in our app.
module.exports = generateMarkdown
