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
  "Zorba",
];

const skillsDiv = document.getElementById("skills-div");

const ulCount = Math.ceil(skillsToolsList.length / 4); // Calculate the number of <ul> tags needed

for (let i = 0; i < skillsToolsList.length; i += 1) {
  if (i % 4 === 0) {
    let row = document.createElement("div");
    row.className = "row";
    skillsDiv.appendChild(row);
  }

  let col = document.createElement("div");
  col.className = "col-md-3";

  let listItem = document.createElement("div");
  listItem.className = "skill";

  let img = document.createElement("img");
  img.src = `./assets/icons/${skillsToolsList[i]}.svg`; // Replace with the actual image path
  img.alt = "";
  listItem.appendChild(img);

  let span = document.createElement("span");
  span.innerText = skillsToolsList[i];
  listItem.appendChild(span);

  col.appendChild(listItem);
  skillsDiv.lastChild.appendChild(col);
}
