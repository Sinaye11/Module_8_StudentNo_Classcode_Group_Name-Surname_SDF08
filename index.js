//Will look for document
const navToggle = document.querySelector('.nav-toggle');

//Getting each individual link
const navLinks = document.querySelectorAll('.nav__link')

//Nav toggle when clicked on
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

//Closes the nav link once we have clicked on what do we want to see
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
