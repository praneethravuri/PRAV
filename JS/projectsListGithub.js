async function githubRepos(username){
    const apiURL = `https://api.github.com/users/${username}/repos`;
    try{
        const response = await fetch(apiURL)

        if(!response.ok) throw new Error("Failed to fetch the repositories");

        const repos = await response.json();
        return repos.map(repo => repo.name);
    }
    catch (error){
        console.log(error);
        return [];
    }
}

const username = "praneethravuri";

githubRepos(username).then(repos => {
    console.log(`Repos of ${username}: `);
    console.log(repos);
})
.catch(error => {
    console.log(error);
});