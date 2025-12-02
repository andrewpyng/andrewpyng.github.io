// Modal functionality
const modal = document.getElementById('projectModal');
const modalFrame = document.getElementById('modalFrame');
const demoLinks = document.querySelectorAll('.link-demo');
const closeButton = document.querySelector('.close-button');

demoLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const url = this.getAttribute('href');
        if (url && url !== '#') {
            modalFrame.src = url;
            modal.style.display = 'block';
        }
    });
});

function closeModal() {
    modal.style.display = 'none';
    modalFrame.src = ''; // Stop video/game from running in background
}

closeButton.addEventListener('click', closeModal);

// Close modal if user clicks outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        closeModal();
    }
});
