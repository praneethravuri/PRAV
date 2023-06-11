async function readJSONFile(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const experiencePromise = readJSONFile("../data/experience.json");

experiencePromise
  .then((experience) => {
    console.log(experience);

    for (let ex in experience) {
        const card = $("<div>").addClass("card");
        const headingContainer = $("<div>").addClass("heading-container");
        const cardHeading = $("<h2>").addClass("card-heading");
        const year = $("<h2>").addClass("year");
        const cardDescription = $("<p>").addClass("card-description");

        cardHeading.html(`${ex}`);
        year.text(ex.dateRange);

        headingContainer.append(cardHeading, year);
        card.append(cardHeading, year);

        $(".card-container-2").append(card);
    }
  })
  .catch((error) => {
    console.error(error);
  });
