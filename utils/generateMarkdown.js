// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {
    case 'none':
      return ''
      break;

    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;

    case 'APACHE':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  } else {
    return `* [License](#license)`;
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  } else {
    return `## License
     
    This project is licensed under the ${license} License.
    `;
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, installation, usage, license, contributing, tests, github, email }) {
  return `# ${title}

  ${renderLicenseBadge(license)}

  ## Description
  ${description}
  
  ## Table Of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ${renderLicenseSection(license)}
  ${renderLicenseBadge(license)}
  
  ## Contributing
  ${contributing}
  
  ## Tests
  ${tests}
  
  ## Questions 
  If you have any questions, contact me at:
  
  * Github: ${github}
  * Email: ${email}
  `;
}

module.exports = generateMarkdown;
