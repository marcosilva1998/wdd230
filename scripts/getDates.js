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

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#333";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});



const visitsDisplay = document.querySelector(".visits");


let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;


if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits+1;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}


numVisits++;


localStorage.setItem("numVisits-ls", numVisits);


