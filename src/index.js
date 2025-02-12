inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a brief description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "How can users install this project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How should users use this project?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "How can others contribute to this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test instructions:",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
])
.then((answers) => {
  const markdownContent = generateMarkdown(answers);
  fs.writeFileSync("README.md", markdownContent);
  console.log("✔️ README.md generated successfully!");
});
