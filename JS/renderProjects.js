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

        $("#repo-details tbody").append(`
          <tr>
            <td>${currRepoName}</td>
            <td>${languages.join(", ")}</td>
            <td><a href="${repo.html_url}"><img src="./Images/Skills-Tools-Images/Github.svg" alt=""></a></td>
          </tr>
        `);
      }
    }
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

async function readJSONFile(url) {
  const data = await $.getJSON(url);
  return data;
}

let privateRepos = await readJSONFile("../JSON/privateRepoProjects.json");
console.log(privateRepos);

for (let repo in privateRepos) {
  $("#repo-details tbody").append(`
      <tr>
        <td>${repo}*</td>
        <td>${privateRepos[repo].languages.join(", ")}</td>
        <td>Private</td>
      </tr>
    `);
}
