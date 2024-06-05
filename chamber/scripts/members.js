const url = "https://marcosilva1998.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('.members_cards');

async function getMembersData(url) {
  const response = await fetch(url);

  if (response.ok) {

    const data = await response.json();
    displayMembers(data.members);
  }
}
getMembersData(url);
const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement('section');

    let name = document.createElement('h2');
    let address = document.createElement('h3');
    let phone = document.createElement('h3');
    let website = document.createElement('h3');
    let icon = document.createElement('img'); 
    let membershipLevel = document.createElement('h3');
    let description = document.createElement('h3');
    let email = document.createElement('h3');
    


    name.textContent = `${member.name}`;
    address.textContent = `${member.address}`;
    phone.textContent = `Tel: ${member.phone}`;
    website.textContent = `${member.website}`;
    membershipLevel.textContent = `membership : ${member.membershipLevel}`;
    description.textContent = `${member.description}`;
    email.textContent = `E mail : ${member.email}`;


    icon.setAttribute('src', member.icon);
    icon.setAttribute('alt', `Icon of ${member.name}`); 
    icon.setAttribute('loading', 'lazy');
    icon.setAttribute('width', '100px');
    icon.setAttribute('height', '100px');

    card.appendChild(name); 
    card.appendChild(icon);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(membershipLevel);
    card.appendChild(website);
    card.appendChild(phone);
    card.appendChild(email);
    card.classList.add("card");
    membershipLevel.classList.add('membership-level');




    cards.appendChild(card);

  });
}




function removeCardClassFromGridChildren() {
  const gridDirectory = document.querySelector('.grid_directory');

  if (gridDirectory) {
    const cards = gridDirectory.querySelectorAll('.card');

    cards.forEach(card => {
      card.classList.remove('card');
    });
  } else {
    console.error('No se encontró el elemento con la clase ".grid_directory"');
  }
}

function addCardClassToGridChildren() {
  const gridDirectory = document.querySelector('.grid_directory');
  if (gridDirectory) {
    const children = gridDirectory.children;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (!child.classList.contains('card')) {
        child.classList.add('card');
      }
    }
  } else {
    console.error('No se encontró el elemento con la clase ".grid_directory"');
  }
}

const gridbutton = document.querySelector("#grid_button");
const listbutton = document.querySelector("#list_button");
const display = document.querySelector(".grid_directory");


gridbutton.addEventListener("click", () => {
  display.classList.add("members_cards");
  display.classList.remove("list");
  addCardClassToGridChildren() 


});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
  display.classList.remove("members_cards");
  display.classList.remove("card");
  removeCardClassFromGridChildren()


}
