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
  "MongoDB",
  "Adobe Premiere Pro",
  "Gimp",
  "Git",
  "GitHub",
  "VS Code",
  "PyCharm",
  "JSONiq",
  "Zorba"
];

const skillsDiv = document.getElementById("skills-div");

const ulCount = Math.ceil(skillsToolsList.length / 4); // Calculate the number of <ul> tags needed

for (let i = 0; i < skillsToolsList.length; i += 1) {
  let skillsList = document.createElement("ul");
  skillsList.id = "skills-list"; // Assign a unique ID to each <ul> tag
  skillsDiv.appendChild(skillsList);

  for (let j = i * 4; j < i * 4 + 4 && j < skillsToolsList.length; j++) {
    let listItem = document.createElement("li");
    listItem.className = "skill";

    let img = document.createElement("img");
    img.src = `./assets/icons/${skillsToolsList[j]}.svg`; // Replace with the actual image path
    img.alt = "";
    listItem.appendChild(img);

    let span = document.createElement("span");
    span.innerText = skillsToolsList[j];
    listItem.appendChild(span);

    skillsList.appendChild(listItem);
  }
}
