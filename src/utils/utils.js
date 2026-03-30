export const items = [
    {
        path: 'about',
        title: 'About'
    },
    {
        path: 'education',
        title: 'Education'
    },
    {
        path: 'skills',
        title: 'Skills'
    },
    {
        path: 'projects',
        title: 'Projects'
    },
    {
        path: 'work-experience',
        title: 'Work Experience'
    },
];

export const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) {
        return;
    }

    const navbarOffset = 96;
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
    });
};
