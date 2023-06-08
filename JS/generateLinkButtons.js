async function readJSONFile(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
  const linkBtns = await readJSONFile("../JSON/linkButtons.json");
  
  console.log(linkBtns);
  
  for (let btn in linkBtns) {
    $(".link-btns").append(`
      <a href="${linkBtns[btn]}" target="_blank">${btn}</a>
    `);
  }
  