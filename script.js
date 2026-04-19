function showInput() {
    const seal = document.getElementById('seal');
    const inputContainer = document.getElementById('input-container');
    seal.classList.add('shifting');
    inputContainer.classList.add('active');
}

function unlockInvitation(event) {
    event.stopPropagation();
    const guestName = document.getElementById('guest-input').value;
    const envelope = document.getElementById('envelope');
    const inputContainer = document.getElementById('input-container');
    const previewText = document.getElementById('preview-text');

    if (guestName.trim() === "") {
        alert("Sila masukkan nama anda.");
        return;
    }

    // 1. Hide Input UI
    inputContainer.style.opacity = '0';
    inputContainer.style.pointerEvents = 'none';

    // 2. Open the 3D doors
    envelope.classList.add('open');

    // 3. Realistic dissolve of "You're Invited"
    setTimeout(() => {
        previewText.style.opacity = '0';
        previewText.style.filter = 'blur(15px)';
    }, 600);

    // 4. Redirect after doors are open
    setTimeout(() => {
        window.location.href = `main.html?to=${encodeURIComponent(guestName)}`;
    }, 1800); 
}