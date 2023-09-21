document.addEventListener('DOMContentLoaded', () => {
    const donorDiv = document.getElementById('donorDiv');
    const recipientDiv = document.getElementById('recipientDiv');
    const donorPopup = document.getElementById('donorPopup');
    const recipientPopup = document.getElementById('recipientPopup');

    donorDiv.addEventListener('click', () => {
        donorPopup.style.display = 'block';
    });

    recipientDiv.addEventListener('click', () => {
        recipientPopup.style.display = 'block';
    });

    window.addEventListener('click', (event) => {
        if (event.target === donorPopup) {
            donorPopup.style.display = 'none';
        } else if (event.target === recipientPopup) {
            recipientPopup.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            donorPopup.style.display = 'none';
            recipientPopup.style.display = 'none';
        }
    });
});
