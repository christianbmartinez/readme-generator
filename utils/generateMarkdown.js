// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license === 'MIT'
    ? '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
    : license === 'ISC'
    ? '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]'
    : ''
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  license === 'MIT'
    ? '(https://opensource.org/licenses/MIT)'
    : license === 'ISC'
    ? '(https://opensource.org/licenses/ISC)'
    : ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  license
    ? `
    ${renderLicenseBadge}${renderLicenseLink}
    `
    : ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`
}

module.exports = generateMarkdown
