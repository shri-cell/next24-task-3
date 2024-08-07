// main.js

// Example JavaScript to enhance interactivity

document.addEventListener('DOMContentLoaded', () => {
    // Example function to handle course enrollment
    const enrollButtons = document.querySelectorAll('.course-description button');
    enrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Enrolled in the course!');
        });
    });

    // Example function to handle form submission
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Form submitted!');
        });
    });
});
