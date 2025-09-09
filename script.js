// script.js
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
// Fade-in and slide-up animation when elements enter viewport
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    document.querySelectorAll(".card, .hero, #about").forEach((el) => {
        observer.observe(el);
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const birthday = new Date("2005-10-05T00:00:00");

    function updateAge() {
        const now = new Date();
        const ageInMs = now - birthday;
        const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.2425);
        document.getElementById("age-display").textContent =
            `I am a ${ageInYears.toFixed(9)} year old Data Scientist`;

        requestAnimationFrame(updateAge);
    }

    updateAge();
});



// Tilt effect on project cards
document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 6; // tilt range
        const rotateY = ((x - centerX) / centerX) * -6;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
});
