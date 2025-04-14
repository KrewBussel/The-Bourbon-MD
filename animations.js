document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    // Target all animated elements
    const animatedElements = document.querySelectorAll(
        '.about-content, .about-image, ' +
        '.cigar-text, .cigar-image-container, ' +
        '.beverage-text, .beverage-image-container, ' +
        '.food-text, .food-image-container'
    );

    animatedElements.forEach(el => observer.observe(el));
}); 