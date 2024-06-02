
function showBanner() {
    const banner = document.getElementById('meetGreetBanner');
    const closeButton = document.getElementById('closeBanner');

    const today = new Date().getDay();

    if (today === 1 || today === 2 || today === 3) {
        banner.style.display = 'block';
    }

    closeButton.addEventListener('click', function () {
        banner.style.display = 'none';
    });
}

showBanner();
 