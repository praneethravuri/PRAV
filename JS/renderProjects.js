async function readJSONFile(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function renderProjectDetails() {
  try {
    const projects = await readJSONFile("../data/projects.json");

    for (let project in projects) {
      const projectName = project;
      const year = projects[project].year;
      const description = projects[project].description;
      const languages = projects[project].languages;

      const card = $("<div>").addClass("card");
      const headingContainer = $("<div>").addClass("heading-container");
      const cardHeading = $("<h2>").addClass("card-heading");
      const yearTag = $("<h2>").addClass("year");
      const cardDescription = $("<p>").addClass("card-description");
      const cardImages = $("<div>").addClass("card-images");

      if (projects[project].projectLink) {
        cardHeading.html(
          `<a href="${projects[project].projectLink}" target="_blank">${project}&nbsp;&nbsp;<span ><img src="../public/images/external-link.svg" class="external-link"></span></a>`
        );
      } else {
        cardHeading.html(`<h2 class="class-heading">${project}</h2>`);
      }

      yearTag.text(year);
      cardDescription.text(description);

      headingContainer.append(cardHeading, yearTag);
      card.append(headingContainer, cardDescription, cardImages);

      for (let j = 0; j < languages.length; j++) {
        const languageImage = $("<img>").attr({
          src: `../assets/icons/${languages[j]}.svg`,
        });
        cardImages.append(languageImage);
      }

      $(".card-container").append(card);
    }
  } catch (error) {
    console.error(error);
  }
}

renderProjectDetails();
