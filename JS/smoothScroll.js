document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".menu-items a");

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            let targetSectionID = link.getAttribute('href');
            window.scrollTo({
                top: targetSection.offsetTop - 75,
                behavior: "smooth"
            });
        });
    });
});