
const aboutMeAnchor = document.getElementById('about-me-anchor');
const experiencesAnchor = document.getElementById('experiences-anchor');
const skillsAnchor = document.getElementById('skills-anchor');
const projectsAnchor = document.getElementById('projects-anchor');
const contactsAnchor = document.getElementById('contacts-anchor');

const aboutNavSelector = document.getElementById('about-nav-item');
const experiencesNavSelector = document.getElementById('experiences-nav-item');
const skillsNavSelector = document.getElementById('skills-nav-item');
const projectsNavSelector = document.getElementById('projects-nav-item');
const contactNavSelector = document.getElementById('contact-nav-item');

const aboutMeButton = document.getElementById('about-me-button');

aboutMeButton.addEventListener('click', arg => {
    aboutMeAnchor.scrollIntoView({ behavior: "smooth", block: 'start' });
});

aboutNavSelector.addEventListener('click', arg => {
    aboutMeAnchor.scrollIntoView({ behavior: "smooth" });
});

experiencesNavSelector.addEventListener('click', arg => {
    experiencesAnchor.scrollIntoView({ behavior: "smooth" });
});

skillsNavSelector.addEventListener('click', arg => {
    skillsAnchor.scrollIntoView({ behavior: "smooth" });
});

projectsNavSelector.addEventListener('click', arg => {
    projectsAnchor.scrollIntoView({ behavior: "smooth" });
});

contactNavSelector.addEventListener('click', arg => {
    contactsAnchor.scrollIntoView({ behavior: "smooth" });
});
