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