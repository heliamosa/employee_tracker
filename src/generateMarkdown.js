function generateMarkdown(data) {
    return `
  # ${data.title}
  
  ![License](https://img.shields.io/badge/License-${data.license.replace(" ", "%20")}-blue.svg)
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  This project is licensed under the ${data.license} license.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  Find me on GitHub: [${data.github}](https://github.com/${data.github})  
  For questions, email me at: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;
  