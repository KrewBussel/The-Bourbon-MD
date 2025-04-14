document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.classList.remove('fade-out');
            } else {
                entry.target.classList.remove('fade-in');
                entry.target.classList.add('fade-out');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    document.querySelectorAll('.hero-content, .hero-subtitle, .hero-cta').forEach((el) => {
        observer.observe(el);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.classList.remove('fade-out');
            } else {
                entry.target.classList.remove('fade-in');
                entry.target.classList.add('fade-out');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    const aboutContent = document.querySelector('.about-content');
    const aboutImage = document.querySelector('.about-image');

    if (aboutContent) observer.observe(aboutContent);
    if (aboutImage) observer.observe(aboutImage);
});

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.header-container');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }

    // Header scroll effect
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.classList.remove('fade-out');
            } else {
                entry.target.classList.remove('fade-in');
                entry.target.classList.add('fade-out');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    // Observe all elements that need animation
    const elementsToObserve = [
        '.hero-content', '.hero-subtitle', '.hero-cta',
        '.about-content', '.about-image',
        '.cigar-text', '.cigar-image-container',
        '.beverage-text', '.beverage-image-container',
        '.food-text', '.food-image-container',
        '.reviews-title', '.review-carousel',
        '.vip-content', '.vip-title', '.vip-description', '.vip-button',
        '.hours-title', '.hours-grid', '.hours-note',
        '.menu-header-title', '.menu-header-accent',
        '.menu-beverages-title', '.menu-beverages-note', '.menu-beverages-grid',
        '.food-menu-title', '.food-menu-note', '.food-menu-grid',
        '.cigar-menu-title', '.coming-soon-container'
    ];

    elementsToObserve.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => observer.observe(element));
    });
});

const cigarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
        } else {
            entry.target.classList.remove('fade-in');
            entry.target.classList.add('fade-out');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px'
});

document.querySelectorAll('.cigar-text, .cigar-image-container').forEach((el) => {
    cigarObserver.observe(el);
});

// Navigation scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for all sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
        } else {
            entry.target.classList.remove('fade-in');
            entry.target.classList.add('fade-out');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '50px'
});

// Observe all sections
document.querySelectorAll('.hero-content, .about-content, .about-image, .cigar-text, .cigar-image-container').forEach((el) => {
    observer.observe(el);
});

const beverageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
        } else {
            entry.target.classList.remove('fade-in');
            entry.target.classList.add('fade-out');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px'
});

document.querySelectorAll('.beverage-text, .beverage-image-container').forEach((el) => {
    beverageObserver.observe(el);
});

const foodObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
        } else {
            entry.target.classList.remove('fade-in');
            entry.target.classList.add('fade-out');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px'
});

document.querySelectorAll('.food-text, .food-image-container').forEach((el) => {
    foodObserver.observe(el);
});

const reviewsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
        } else {
            entry.target.classList.remove('fade-in');
            entry.target.classList.add('fade-out');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px'
});

document.querySelectorAll('.reviews-title, .review-carousel').forEach((el) => {
    reviewsObserver.observe(el);
});

// Carousel functionality
const slides = document.querySelectorAll('.review-slide');
const indicators = document.querySelectorAll('.review-indicator');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.opacity = '0';
    });
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });

    slides[index].classList.add('active');
    slides[index].style.opacity = '1';
    indicators[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

if (nextButton) nextButton.addEventListener('click', nextSlide);
if (prevButton) prevButton.addEventListener('click', prevSlide);

if (indicators) {
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.classList.remove('fade-out');
            } else {
                entry.target.classList.remove('fade-in');
                entry.target.classList.add('fade-out');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    const vipContent = document.querySelector('.vip-content');
    const vipTitle = document.querySelector('.vip-title');
    const vipDescription = document.querySelector('.vip-description');
    const vipButton = document.querySelector('.vip-button');

    if (vipContent) observer.observe(vipContent);
    if (vipTitle) observer.observe(vipTitle);
    if (vipDescription) observer.observe(vipDescription);
    if (vipButton) observer.observe(vipButton);
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.classList.remove('fade-out');
            } else {
                entry.target.classList.remove('fade-in');
                entry.target.classList.add('fade-out');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    const hoursTitle = document.querySelector('.hours-title');
    const hoursGrid = document.querySelector('.hours-grid');
    const hoursNote = document.querySelector('.hours-note');

    if (hoursTitle) observer.observe(hoursTitle);
    if (hoursGrid) observer.observe(hoursGrid);
    if (hoursNote) observer.observe(hoursNote);
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.classList.remove('fade-out');
            } else {
                entry.target.classList.remove('fade-in');
                entry.target.classList.add('fade-out');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    const beveragesTitle = document.querySelector('.menu-beverages-title');
    const beverageNote = document.querySelector('.menu-beverages-note');
    const beveragesGrid = document.querySelector('.menu-beverages-grid');

    if (beveragesTitle) observer.observe(beveragesTitle);
    if (beverageNote) observer.observe(beverageNote);
    if (beveragesGrid) observer.observe(beveragesGrid);
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.classList.remove('fade-out');
            } else {
                entry.target.classList.remove('fade-in');
                entry.target.classList.add('fade-out');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    // Menu page elements
    const menuHeaderTitle = document.querySelector('.menu-header-title');
    const menuHeaderAccent = document.querySelector('.menu-header-accent');
    const menuBeveragesTitle = document.querySelector('.menu-beverages-title');
    const menuBeveragesNote = document.querySelector('.menu-beverages-note');
    const menuBeveragesGrid = document.querySelector('.menu-beverages-grid');

    if (menuHeaderTitle) observer.observe(menuHeaderTitle);
    if (menuHeaderAccent) observer.observe(menuHeaderAccent);
    if (menuBeveragesTitle) observer.observe(menuBeveragesTitle);
    if (menuBeveragesNote) observer.observe(menuBeveragesNote);
    if (menuBeveragesGrid) observer.observe(menuBeveragesGrid);
});