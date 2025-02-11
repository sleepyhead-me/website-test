document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll('.accordion h2');
    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            const panel = this.nextElementSibling;
            panel.style.display = panel.style.display === "block" ? "none" : "block";
        });
    });
});
