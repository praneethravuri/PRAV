const skillsToolsList = [
  "Python",
  "C",
  "C++",
  "HTML",
  "CSS",
  "Javascript",
  "Bootstrap",
  "Node JS",
  "Java",
  "JQuery",
  "Sass",
  "Adobe Premiere Pro",
  "Gimp",
  "Git",
  "GitHub",
  "VS Code",
  "SQL",
  "PyCharm",
  "JSONiq",
  "Zorba"
];

const skillsDiv = document.getElementById("skills-div");
const ulCount = Math.ceil(skillsToolsList.length / 4); // Calculate the number of <ul> tags needed

const appendChild = skillsDiv.appendChild; // Cache the appendChild method

skillsToolsList.forEach((skill, index) => {
  const skillsList = document.createElement("ul");
  skillsList.id = `skills-list-${index + 1}`; // Assign a unique ID to each <ul> tag
  appendChild.call(skillsDiv, skillsList); // Use the cached appendChild method

  const listItem = document.createElement("li");
  listItem.className = "skill";

  const img = document.createElement("img");
  img.src = `./Images/Skills-Tools-Images/${skill}.svg`; // Replace with the actual image path
  img.alt = "";
  listItem.appendChild(img);

  const span = document.createElement("span");
  span.innerText = skill;
  listItem.appendChild(span);

  skillsList.appendChild(listItem);
});
