async function readJSONFile(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function renderProjectDetails() {
  try {
    const projects = await readJSONFile("../data/projects.json");

    let row = document.createElement("div");
    row.classList.add("row", "card-container");

    for (let project in projects) {
      const projectName = project;
      const year = projects[project].year;
      const description = projects[project].description;
      const languages = projects[project].languages;

      const col = document.createElement("div");
      col.classList.add("col-md-6", "mb-4");

      const card = document.createElement("div");
      card.classList.add("card");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      card.appendChild(cardBody);

      const headingContainer = document.createElement("div");
      headingContainer.classList.add("d-flex", "justify-content-between", "align-items-center");
      cardBody.appendChild(headingContainer);

      const cardHeading = document.createElement("h2");
      cardHeading.classList.add("card-title");

      if (projects[project].projectLink) {
        const projectLink = document.createElement("a");
        projectLink.href = projects[project].projectLink;
        projectLink.target = "_blank";
        projectLink.innerText = project;

        const externalLink = document.createElement("span");
        const externalLinkIcon = document.createElement("img");
        externalLinkIcon.src = "../public/images/external-link.svg";
        externalLinkIcon.classList.add("external-link");
        externalLink.appendChild(externalLinkIcon);

        cardHeading.appendChild(projectLink);
        cardHeading.appendChild(document.createTextNode("\u00A0\u00A0"));
        cardHeading.appendChild(externalLink);
      } else {
        cardHeading.innerText = project;
      }

      const yearTag = document.createElement("h2");
      yearTag.classList.add("year");
      yearTag.innerText = year;
      headingContainer.appendChild(cardHeading);
      headingContainer.appendChild(yearTag);

      const cardDescription = document.createElement("p");
      cardDescription.classList.add("card-text");
      cardDescription.innerText = description;
      cardBody.appendChild(cardDescription);

      const cardImages = document.createElement("div");
      cardImages.classList.add("card-footer");
      card.appendChild(cardImages);

      for (let j = 0; j < languages.length; j++) {
        const languageImage = document.createElement("img");
        languageImage.src = `../assets/icons/${languages[j]}.svg`;
        languageImage.classList.add("me-2");
        cardImages.appendChild(languageImage);
      }

      col.appendChild(card);
      row.appendChild(col);

      if (row.children.length === 2) {
        document.querySelector(".card-container").appendChild(row);
        row = document.createElement("div");
        row.classList.add("row", "card-container");
      }
    }

    // Check if there is an unfinished row with a single card
    if (row.children.length === 1) {
      const col = document.createElement("div");
      col.classList.add("col-md-6", "mb-4");
      row.appendChild(col);
      document.querySelector(".card-container").appendChild(row);
    }
  } catch (error) {
    console.error(error);
  }
}

renderProjectDetails();
