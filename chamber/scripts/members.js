const url = "https://marcosilva1998.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#members_cards');

async function getMembersData(url) {
  const response = await fetch(url);

  if (response.ok) {

    const data = await response.json();
    console.log(data.members)
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
    phone.textContent = `${member.phone}`;
    website.textContent = `${member.website}`;
    membershipLevel.textContent = `membership : ${member.membershipLevel}`;
    description.textContent = `${member.description}`;
    email.textContent = `${member.email}`;


    icon.setAttribute('src', member.icon);
    icon.setAttribute('alt', `Icon of ${member.name}`); 
    icon.setAttribute('loading', 'lazy');
    icon.setAttribute('width', '100px');
    icon.setAttribute('height', '100px');

    card.appendChild(name); 
    card.appendChild(icon);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membershipLevel);
    card.appendChild(description);
    card.appendChild(email);
    card.classList.add("card");
    membershipLevel.classList.add('membership-level');




    cards.appendChild(card);

  });
}