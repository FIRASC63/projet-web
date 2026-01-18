// Animation au scroll
document.addEventListener('DOMContentLoaded', function() {
    // Animation des éléments au défilement
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observer les éléments à animer
    document.querySelectorAll('.tech-icon, .project-card, .skill-item').forEach(el => {
        observer.observe(el);
    });});