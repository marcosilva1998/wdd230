
const url_spotligh ="https://marcosilva1998.github.io/wdd230/chamber/data/members.json"
async function apiFetch3() {
    try {
        const response = await fetch(url_spotligh);
        if (response.ok) {
            const data = await response.json();
            displaySpotlightAdvertisements(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
apiFetch3()
function displaySpotlightAdvertisements(data) {
    const spotlightContainer = document.querySelector("#spotlight-container ");
    spotlightContainer.innerHTML = ""; 

    const spotlightMembers = data.members.filter(member => member.membershipLevel === "silver" || member.membershipLevel === "gold");

    const shuffledMembers = spotlightMembers.sort(() => 0.5 - Math.random());


    const maxAdsToShow = Math.min(shuffledMembers.length, 3);
    for (let i = 0; i < maxAdsToShow; i++) {
        const member = shuffledMembers[i];
        const adElement = document.createElement("div");
        adElement.classList.add("card");
        adElement.innerHTML = `
            <h2>${member.name}</h2>
            <img src="${member.icon}" alt="${member.name}" width=100 height=100 >
            <p>${member.description}</p>
            <a href="#" target="_blank">Visit Website</a>
        `;
        //<a href="${member.website}" target="_blank">Visit Website</a>

        spotlightContainer.appendChild(adElement);
    }
}