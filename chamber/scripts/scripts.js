function refreshElement1() {
    var currentYearElement = document.getElementById("current-year");

    if (currentYearElement) {

        currentYearElement.textContent = new Date().getFullYear();
    } else {

        setTimeout(refreshElement1, 100); 
    }
}



function refreshElement2() {
    var lastMod = document.getElementById("lastModified");

    if (lastMod) {
    
        lastMod.textContent = "Last modified: " + document.lastModified;
    } else {
       
        setTimeout(refreshElement2, 100); 
    }
}

refreshElement2()
refreshElement1()

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


let sidebarMessage = document.querySelector('#last_visit_message');
let currentDate = new Date();
const msToDays = 84600000;
let lastVisitDate = localStorage.getItem("lastVisitDate");

function displaySidebarMessage() {
    if (!lastVisitDate) {
        sidebarMessage.innerText = "Welcome! Let us know if you have any questions.";
    } else {
        lastVisitDate = new Date(lastVisitDate);
        const timeDiff = currentDate.getTime() - lastVisitDate.getTime();
        const daysDiff = Math.floor(timeDiff / msToDays);

        let message;
        if (daysDiff < 1) {
            message = "Back so soon! Awesome!";
        } else {
            message = "You last visited " + daysDiff + " " + (daysDiff === 1 ? "day" : "days") + " ago.";
        }
        sidebarMessage.innerText = message;
    }
    localStorage.setItem("lastVisitDate", currentDate);
}

displaySidebarMessage();