const baseURL = "https://marcosilva1998.github.io/wdd230/";
const linksURL = "https://marcosilva1998.github.io/wdd230/data/links.json";
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  }
  
  getLinks();


  const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        const list = document.createElement('li');
        list.textContent = `${week.week}:`;
    
        week.links.forEach((link) => {
          const linkElement = document.createElement('a');
          linkElement.href = link.url;
          linkElement.textContent = link.title;
          list.appendChild(linkElement);
        });
        listContainer.appendChild(list);
    });
  }