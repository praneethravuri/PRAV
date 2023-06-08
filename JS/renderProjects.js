async function readJSONFile(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getLanguages(repoName) {
  let languageURL = `https://api.github.com/repos/praneethravuri/${repoName}/languages`;
  try {
    const response = await fetch(languageURL);

    if (!response.ok) throw new Error("Failed to fetch the repository details");

    const languages = await response.json();
    return Object.keys(languages);
  } catch (error) {
    return [];
  }
}

export async function renderRepoDetails(username) {
  const apiURL = `https://api.github.com/users/${username}/repos`;
  const details = {};

  try {
    const response = await fetch(apiURL);

    if (!response.ok) throw new Error("Failed to fetch the repositories");

    const repos = await response.json();

    for (let i = 0; i < repos.length; i++) {
      const repo = repos[i];

      let exceptionRepos = ["praneethravuri"];

      if (!exceptionRepos.includes(repo.name)) {
        const languages = await getLanguages(repo.name);
        const currRepoName = repo.name.replace(/-/g, " ");
        const createdAt = repo.created_at.substring(0, 4);

        details[currRepoName] = {
          html_url: repo.html_url,
          description: repo.description,
          year: createdAt,
          languages: languages,
        };
      }
    }
  } catch (error) {
    console.log(error);
  }

  try {
    const privateRepos = await readJSONFile("../JSON/privateRepoProjects.json");

    for (let repo in privateRepos) {
      const currRepoName = `${repo}*`;
      const year = privateRepos[repo].year;
      const description = privateRepos[repo].description;
      const languages = privateRepos[repo].languages;

      details[currRepoName] = {
        year: year,
        description: description,
        languages: languages,
      };
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }

  return details;
}

const username = "praneethravuri";

renderRepoDetails(username)
  .then((repoDetails) => {
    for (let repo in repoDetails) {
      const details = repoDetails[repo];

      const card = $("<div>").addClass("card");
      const headingContainer = $("<div>").addClass("heading-container");
      const cardHeading = $("<h2>").addClass("card-heading");
      const year = $("<h2>").addClass("year");
      const cardDescription = $("<p>").addClass("card-description");
      const cardImages = $("<div>").addClass("card-images");

      if (details.html_url) {
        cardHeading.html(`<a href="${details.html_url}" target="_blank">${repo}&nbsp;&nbsp;<span ><img src="./Images/external-link.svg" class="external-link"></span></a>`);
      } else {
        cardHeading.html(`<h2 class="class-heading">${repo}</h2>`);
      }

      year.text(details.year);
      cardDescription.text(details.description);

      headingContainer.append(cardHeading, year); // Add card-heading and year to the heading-container
      card.append(headingContainer, cardDescription, cardImages);

      for (let j = 0; j < details.languages.length; j++) {
        const languageImage = $("<img>").attr({
          src: `./Images/Skills-Tools-Images/${details.languages[j]}.svg`,
        });
        cardImages.append(languageImage);
      }

      $(".card-container").append(card);
    }
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
