/* =========================
   Modal for Projects
========================= */
function openProjectModal(title, description) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('project-modal').style.display = 'block';
}

function closeProjectModal() {
    document.getElementById('project-modal').style.display = 'none';
}

window.onclick = function(event) {
    var modal = document.getElementById('project-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

/* =========================
   Contact Form Handling
========================= */
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Grab the form fields
    const nameValue = document.getElementById('name').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const messageValue = document.getElementById('message').value.trim();

    // Simple client-side validation
    if (!nameValue || !emailValue || !messageValue) {
        alert('Please fill out all fields.');
        return;
    }

    // In a real scenario, you’d submit data to a server:
    // fetch('/send-email', {
    //   method: 'POST',
    //   body: JSON.stringify({ name: nameValue, email: emailValue, message: messageValue }),
    //   headers: { 'Content-Type': 'application/json' }
    // })
    // .then((response) => ... )
    // .catch((error) => ... );

    alert(`Thank you for reaching out, ${nameValue}! I’ll get back to you soon.`);
    contactForm.reset();
});














































































