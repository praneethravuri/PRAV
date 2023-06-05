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
  
  const username = "praneethravuri";
  
  githubRepos(username)
    .then((repos) => {
        console.log(repos);
      for (let i = 0; i < repos.length; i++) {
        $("#repo-details").append(
            `
            <li> Project ${i+1} </li>
            <ul>
                <li> <a href="${repos[i].html_url}">${repos[i].name}</a> </li>
                <li> ${repos[i].created_at} </li>
                <li> ${repos[i].description} </li>
                <li> ${repos[i].stargazers_count} </li>
            </ul>
            `
        );
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  