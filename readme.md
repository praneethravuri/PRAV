# PRAV - Personal Portfolio Website

[Website Link](https://snazzy-cocada-b041d4.netlify.app/)

## Skills & Tools

The skills and tools cards are also dynamically generated with the help of an array in `skillsTools.js` file

## Projects

The Github Public API is used to fetch all the public repositories of my account. The API is modified to fetch all the languages used in a particular repository. Some repositories are excluded from displaying. 

Private repositories' names and their details are stored in a json file, `privateRepoProjects.json`. These private repositories are displayed on the website but do not have any links. This is to ensure that [GMU Honor Code](https://oai.gmu.edu/full-honor-code-document/) is not violated.

The details of the public and private repositories are stored in an object and rendered out in HTML.

## Tech Stack
1. HTML
2. CSS
3. Javascript
4. JQuery
5. SASS