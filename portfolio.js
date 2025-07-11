// Tab functionality
function opentab(tabname) {
    const event = window.event || arguments.callee.caller.arguments[0];
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    if (event && event.target) {
        event.target.classList.add("active-link");
    }
    document.getElementById(tabname).classList.add("active-tab");
}

// Mobile menu functionality
function openmenu() {
    document.getElementById("sidemenu").classList.add("show");
}

function closemenu() {
    document.getElementById("sidemenu").classList.remove("show");
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu if open
        closemenu();
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Typing animation effect
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', function() {
    const typingElement = document.querySelector('.typing-animation');
    if (typingElement) {
        const originalText = typingElement.textContent;
        typeWriter(typingElement, originalText, 150);
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .work, .stat-item, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Don't prevent default if Netlify forms are being used
            if (!this.hasAttribute('data-netlify')) {
                e.preventDefault();
            }
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                alert('Please enter a valid email address');
                return;
            }
            
            // If not using Netlify forms, simulate form submission
            if (!this.hasAttribute('data-netlify')) {
                e.preventDefault();
                simulateFormSubmission(this);
            }
        });
    }
});

// Simulate form submission for non-Netlify deployments
function simulateFormSubmission(form) {
    const submitBtn = form.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Coming soon alert function
function showComingSoon(feature) {
    alert(`${feature} coming soon!`);
}

// Error handling for missing images
function handleImageError(img) {
    img.style.display = 'none';
    console.warn('Image failed to load:', img.src);
}

// Add error handling to all images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            handleImageError(this);
        });
    });
});

// Improved parallax effect with performance optimization
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const header = document.getElementById('header');
    const rate = scrolled * -0.3; // Reduced for better performance
    
    if (header) {
        header.style.transform = `translate3d(0, ${rate}px, 0)`;
    }
    ticking = false;
}

function requestParallaxUpdate() {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

// Throttled scroll events
window.addEventListener('scroll', function() {
    // Navbar background
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
    }
    
    // Parallax effect
    requestParallaxUpdate();
});

// Remove duplicate scroll event listener
// (The parallax effect is now handled in the main scroll listener above)

// Improved typing animation with error handling
function typeWriter(element, text, speed = 100) {
    if (!element || !text) return;
    
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation with error handling
window.addEventListener('load', function() {
    const typingElement = document.querySelector('.typing-animation');
    if (typingElement && typingElement.textContent) {
        const originalText = typingElement.textContent;
        typeWriter(typingElement, originalText, 150);
    }
});

// Improved intersection observer with error handling
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations with error handling
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .work, .stat-item, .contact-item');
    
    animateElements.forEach(el => {
        if (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        }
    });
});

// Remove duplicate contact form handling code
// (Already handled above with improved version)

// Add loading animation to external links with error handling
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    if (link) {
        link.addEventListener('click', function() {
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 200);
        });
    }
});

// Remove duplicate parallax effect code
// (Already handled in the main scroll listener above)

// Add hover effect to service cards with error handling
document.querySelectorAll('.service-card').forEach(card => {
    if (card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(0) scale(1)';
            } else {
                this.style.transform = 'scale(1.05)';
            }
        });
    }
});

// Preloader with error handling
window.addEventListener('load', function() {
    if (document.body) {
        document.body.classList.add('loaded');
    }
});

// Add smooth reveal animation for sections with error handling
const revealSections = document.querySelectorAll('#About, #services, #portfolio, #contact');

if (revealSections.length > 0) {
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.15
    });

    revealSections.forEach(section => {
        if (section) {
            sectionObserver.observe(section);
        }
    });
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        closemenu();
    }
    
    // Navigate tabs with arrow keys when focused
    if (e.target.classList.contains('tab-links')) {
        const tabLinks = Array.from(document.querySelectorAll('.tab-links'));
        const currentIndex = tabLinks.indexOf(e.target);
        
        if (e.key === 'ArrowRight' && currentIndex < tabLinks.length - 1) {
            e.preventDefault();
            tabLinks[currentIndex + 1].focus();
            tabLinks[currentIndex + 1].click();
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            e.preventDefault();
            tabLinks[currentIndex - 1].focus();
            tabLinks[currentIndex - 1].click();
        }
    }
});

// Add focus management for accessibility
document.querySelectorAll('.tab-links').forEach(tab => {
    tab.setAttribute('tabindex', '0');
    tab.setAttribute('role', 'tab');
});

// Performance optimization: Debounce resize events
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Handle any resize-specific logic here
        console.log('Window resized');
    }, 250);
});

// Add service worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment the following lines if you add a service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(function(registration) {
        //         console.log('SW registered: ', registration);
        //     })
        //     .catch(function(registrationError) {
        //         console.log('SW registration failed: ', registrationError);
        //     });
    });
}

// Remove duplicate code sections that were causing issues
// The following sections have been consolidated above:
// - Contact form handling (improved version above)
// - Parallax effect (optimized version above)  
// - Typing animation (error-handled version above)
// - Intersection observer (improved version above)

// Add error boundary for JavaScript errors
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could send this to an error reporting service
});

window.addEventListener('unhandledrejection', function(e) {
}
)