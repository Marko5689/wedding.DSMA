const seal = document.getElementById('seal');
const envelope = document.getElementById('envelope');
const loader = document.getElementById('loader');

// Remove the onclick="openInvitation()" from your HTML and use this:
seal.addEventListener('click', () => {
    // 1. Open the doors
    envelope.classList.add('open');

    // 2. Start the "Push" curtain sooner
    setTimeout(() => {
        if (loader) {
            loader.classList.add('active');
        }
    }, 500); // Snappier start

    // 3. Redirect while the curtain is at peak velocity
    setTimeout(() => {
        window.location.href = 'main.html';
    }, 1200); 
});