function refreshElement2() {
    var lastMod = document.getElementById("lastModified");

    if (lastMod) {
    
        lastMod.textContent = "Last modified: " + document.lastModified;
    } else {
       
        setTimeout(refreshElement2, 100); 
    }
}
refreshElement2()
