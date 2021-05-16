// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const generateMarkdown = (data) => {
    console.log(data);

}

// function renderLicenseBadge(data) {
//     console.log(data.license.toString());
// }
//     if (!data.license){
//         return '';
//     }else if (data.license == 'Apache License 2.0'){
//         let licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
//         return licenseBadge;
//     }else if (data.license == 'GNU GPL v3'){
//         let licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
//         return licenseBadge;
//     }else if (data.license == 'MIT'){
//         let licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
//         return licenseBadge;
//     }else if (data.license == 'ISC'){
//         let licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
//         return licenseBadge;
//     }else if (data.license == 'Mozilla Public License 2.0'){
//         let licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
//         return licenseBadge;
//     }else if (data.license == 'Boost Software License 1.0'){
//         let licenseBadge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
//         return licenseBadge;
//     }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string

// function renderLicenseLink(data) {
//     if (!data.license){
//         return '';
//     }else if (data.license == 'Apache License 2.0'){
//         let licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
//         return licenseLink;
//     }else if (data.license == 'GNU GPL v3'){
//         let licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
//         return licenseLink;
//     }else if (data.license == 'MIT'){
//         let licenseLink = 'https://choosealicense.com/licenses/mit/';
//         return licenseLink;
//     }else if (data.license == 'ISC'){
//         let licenseLink = 'https://choosealicense.com/licenses/isc/';
//         return licenseLink;
//     }else if (data.license == 'Mozilla Public License 2.0'){
//         let licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
//         return licenseLink;
//     }else if (data.license == 'Boost Software License 1.0'){
//         let licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
//         return licenseLink;
//     }
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string

// function renderLicenseSection(data) {
//     if (!data){
//         return '';
//     }
//     return `## ${data.license}
//     ${licenseBadge}
//     ${licenseLink}`
// };

// // TODO: Create a function to generate markdown for README

// function generateMarkdown(data) {
//   return `# ${data.title}
// ##Description
// ${data.description}
// ##Table of Contents
// -[Installation](#installation)
// -[Usage](#usage)`;
// }

module.exports = generateMarkdown