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
      const cardDescription = $("<ul>").addClass("card-description");
      const location = $("<span>").addClass("location");
  
      cardHeading.html(`${ex}`);
      year.text(experience[ex].dateRange);
      location.text(experience[ex].location);
  
      const contentSentences = experience[ex].content.split('. ');
      contentSentences.forEach((sentence) => {
          const listItem = $("<li>").text(sentence);
          cardDescription.append(listItem);
      });
  
      headingContainer.append(cardHeading, year);
      card.append(headingContainer, location, cardDescription);
  
      $(".card-container-2").append(card);
  }
  
  })
  .catch((error) => {
    console.error(error);
  });
