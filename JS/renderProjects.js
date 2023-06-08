export async function githubRepos(username) {
  const apiURL = `https://api.github.com/users/${username}/repos`;
  try {
    const response = await fetch(apiURL);

    if (!response.ok) throw new Error("Failed to fetch the repositories");

    const repos = await response.json();
    return repos;
  } catch (error) {
    console.log(error);
    return [];
  }
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

const username = "praneethravuri";

githubRepos(username)
  .then(async (repos) => {
    for (let i = 0; i < repos.length; i++) {
      const repo = repos[i];
      if (repo.name != "praneethravuri") {
        const languages = await getLanguages(repo.name);

        const currRepoName = repo.name.replace(/-/g, " ");

        const card = $("<div>").addClass("card");
        const cardHeading = $("<h2>").addClass("card-heading");
        const cardDescription = $("<p>").addClass("card-description");
        const cardImages = $("<div>").addClass("card-images");

        cardHeading.html(`<a href="${repo.html_url}">${currRepoName}</a>`);
        cardDescription.text(repo.description);

        for (let j = 0; j < languages.length; j++) {
          let languageImage = $("<img>").attr({
            src: `./Images/Skills-Tools-Images/${languages[j]}.svg`,
            alt: languages[j],
          });
          let imageLogo = languageImage.addClass("image-logo");
          cardImages.append(languageImage);
        }

        card.append(cardHeading, cardDescription, cardImages);
        $(".card-container").append(card);
      }
    }
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

async function readJSONFile(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

try {
  let privateRepos = await readJSONFile("../JSON/privateRepoProjects.json");

  for (let repo in privateRepos) {
    const card = $("<div>").addClass("card");
    const cardHeading = $("<h2>").addClass("card-heading");
    const cardDescription = $("<p>").addClass("card-description");
    const cardImages = $("<div>").addClass("card-images");

    cardHeading.text(`${repo}*`);
    cardDescription.text(privateRepos[repo].description);

    for (let j = 0; j<privateRepos[repo].languages.length; j++) {
      const languageImage = $("<img>").attr({
        src: `./Images/Skills-Tools-Images/${privateRepos[repo].languages[j]}.svg`,

      });
      cardImages.append(languageImage);
    }

    card.append(cardHeading, cardDescription, cardImages);
    $(".card-container").append(card);
  }
} catch (error) {
  console.error("An error occurred:", error);
}
