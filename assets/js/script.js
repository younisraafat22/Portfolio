// ===================================
// CUSTOM CURSOR (image-based with cursor-white.png)
// ===================================

const cursor = document.getElementById('customCursor');
const cursorText = document.getElementById('cursorText');

// Hide custom cursor on touch devices
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.body.classList.add('no-custom-cursor');
}

// ===================================
// ANIMATED BACKGROUND
// ===================================

// Gradient blob that follows mouse
const gradientBlob = document.querySelector('.gradient-blob');
if (gradientBlob) {
    let blobX = 0;
    let blobY = 0;
    let currentX = 0;
    let currentY = 0;
    const speed = 0.1; // Smooth follow speed
    
    document.addEventListener('mousemove', (e) => {
        blobX = e.clientX;
        blobY = e.clientY;
    });
    
    function animateBlob() {
        currentX += (blobX - currentX) * speed;
        currentY += (blobY - currentY) * speed;
        
        if (gradientBlob) {
            // CSS transform: translate(-50%, -50%) centers it on the cursor
            gradientBlob.style.left = currentX + 'px';
            gradientBlob.style.top = currentY + 'px';
        }
        
        requestAnimationFrame(animateBlob);
    }
    
    animateBlob();
}

// Particle Canvas Animation
const canvas = document.getElementById('particleCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.3 + 0.1;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity})`;
            if (document.body.classList.contains('dark-mode')) {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            }
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function initParticles() {
        particles = [];
        const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    initParticles();
    animateParticles();
    
    window.addEventListener('resize', initParticles);
}

// ===================================
// MAGNETIC BUTTONS
// ===================================

const magneticButtons = document.querySelectorAll('.btn');
magneticButtons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.02)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0) scale(1)';
    });
});

// ===================================
// CUSTOM CURSOR INTERACTIONS
// ===================================

if (cursor && cursorText) {
    // Track mouse and position the cursor element
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }, { passive: true });

    // Map hover text for selectors
    const hoverElements = {
        'a': 'OPEN',
        'button:not(.mobile-menu-toggle)': '',
        '.btn': '',
        '.case-study-link-wrapper': 'OPEN',
        '.case-study-link': 'OPEN',
        '.case-study': 'OPEN',
        '.social-link': '',
        'input': 'TYPE',
        'textarea': 'TYPE',
    };

    // Map size presets per selector (small/medium/large)
    const hoverSizes = {
        'a': 'large',
        'button:not(.mobile-menu-toggle)': 'large',
        '.btn': 'large',
        '.case-study-link-wrapper': 'large',
        '.case-study-link': 'large',
        '.case-study': 'large',
        '.social-link': 'small',
        'input': 'medium',
        'textarea': 'medium',
    };

    // Attach listeners for each selector found on the page
    Object.keys(hoverElements).forEach(selector => {
        const elements = document.querySelectorAll(selector);
        if (!elements) return;

        elements.forEach(element => {
            element.addEventListener('mouseenter', (ev) => {
                cursor.classList.add('hover');
                cursorText.textContent = hoverElements[selector] || '';

                // Add size preset if defined
                const size = hoverSizes[selector];
                if (size) cursor.classList.add(size);
            });

            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                cursorText.textContent = '';

                // Remove any size classes
                Object.values(hoverSizes).forEach(s => cursor.classList.remove(s));
            });
        });
    });

    // Hide cursor when mouse leaves the window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
}

// ===================================
// THEME TOGGLE
// ===================================

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to 'light' mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Save theme preference
        const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
}

// ===================================
// MOBILE MENU TOGGLE
// ===================================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinksMenu = document.getElementById('navLinks');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

if (mobileMenuToggle && navLinksMenu && mobileMenuOverlay) {
    // Toggle menu
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navLinksMenu.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navLinksMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    });
    
    // Close menu when clicking overlay
    mobileMenuOverlay.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navLinksMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        body.style.overflow = '';
    });
    
    // Close menu when clicking a link
    const navMenuItems = navLinksMenu.querySelectorAll('a');
    navMenuItems.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navLinksMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            body.style.overflow = '';
        });
    });
}

// ===================================
// LOGO SWAP FOR DARK MODE (tries to use '-white' variants if present)
// ===================================

const logoY = document.getElementById('logoY');
const logoFull = document.getElementById('logoFull');
const footerLogo = document.getElementById('footerLogo');

function makeDarkCandidate(src) {
    if (!src) return src;
    const idx = src.lastIndexOf('.');
    if (idx === -1) return src;
    return src.slice(0, idx) + '-white' + src.slice(idx);
}

function prepareLogo(imgEl) {
    if (!imgEl) return;
    imgEl.dataset.original = imgEl.src;
    imgEl.dataset.lightSrc = imgEl.src;
    const candidate = makeDarkCandidate(imgEl.src);
    const tester = new Image();
    tester.onload = () => {
        // candidate exists on disk — store for later use
        imgEl.dataset.darkSrc = candidate;
        // Apply immediately if dark theme is active
        if (body.classList.contains('dark-mode')) {
            imgEl.src = imgEl.dataset.darkSrc;
        }
    };
    tester.onerror = () => {
        // no dark variant found — leave original
    };
    tester.src = candidate;
}

function applyLogosForTheme(theme) {
    const isDark = theme === 'dark';
    [logoY, logoFull, footerLogo].forEach(imgEl => {
        if (!imgEl) return;
        if (isDark && imgEl.dataset.darkSrc) {
            imgEl.src = imgEl.dataset.darkSrc;
        } else if (imgEl.dataset.lightSrc) {
            imgEl.src = imgEl.dataset.lightSrc;
        }
    });
}

// Prepare logos on load
prepareLogo(logoY);
prepareLogo(logoFull);
prepareLogo(footerLogo);

// Apply current theme logos
applyLogosForTheme(currentTheme === 'dark' ? 'dark' : 'light');

// Update logo when theme toggles
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        applyLogosForTheme(theme);
    });
}

// ===================================
// CONTACT FORM HANDLING
// ===================================

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.btn-submit');
        const formData = new FormData(contactForm);
        
        // Get form values
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Add loading state
        submitBtn.classList.add('loading');
        submitBtn.textContent = 'Sending...';
        formStatus.textContent = '';
        formStatus.className = 'form-status';
        
        // Send to Formspree (replace YOUR_FORM_ID with your actual Formspree form ID)
        // Or use EmailJS, Web3Forms, or similar service
        try {
            const response = await fetch('https://formspree.io/f/xblvjdoz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                formStatus.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
                formStatus.classList.add('success');
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.className = 'form-status';
                }, 5000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            formStatus.textContent = '✗ Failed to send message. Please try again or email me directly.';
            formStatus.classList.add('error');
            
            // Hide error message after 5 seconds
            setTimeout(() => {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }, 5000);
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.textContent = 'Send Message';
        }
    });
}

// ===================================
// SMOOTH SCROLL BEHAVIOR
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // Don't prevent default if it's just "#"
        if (targetId === '#') return;
        
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// NAVIGATION SCROLL EFFECT
// ===================================

let lastScroll = 0;
const nav = document.querySelector('.nav');
let scrollTimeout;

// Throttle scroll events for better performance
function throttleScroll(callback, delay = 16) {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
            callback();
            scrollTimeout = null;
        }, delay);
    }
}

window.addEventListener('scroll', () => {
    throttleScroll(() => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 10) {
            nav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
        } else {
            nav.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
        
        // Call highlight navigation here too
        highlightNavigation();
    });
}, { passive: true });

// ===================================
// LOGO HOVER INTERACTIONS
// ===================================

// Logo hover effect is now handled by CSS clip-path animation
// No JavaScript needed for the fade effect

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all case studies for scroll animations
const caseStudies = document.querySelectorAll('.case-study');
caseStudies.forEach((study, index) => {
    study.style.opacity = '0';
    study.style.transform = 'translateY(30px)';
    study.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(study);
});

// ===================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ===================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function highlightNavigation() {
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = 'var(--color-text-primary)';
                }
            });
        }
    });
}

// Removed duplicate scroll listener - now called from throttled scroll function above

// ===================================
// SCROLL REVEAL ANIMATIONS
// ===================================

let revealTimeout;

function scrollReveal() {
    if (!revealTimeout) {
        revealTimeout = setTimeout(() => {
            const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
            
            reveals.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
                    element.classList.add('active');
                }
            });
            
            revealTimeout = null;
        }, 16);
    }
}

window.addEventListener('scroll', scrollReveal, { passive: true });
window.addEventListener('load', scrollReveal);

// ===================================
// CASE STUDY CARD 3D TILT EFFECT
// ===================================

const caseStudyCards = document.querySelectorAll('.case-study');
caseStudyCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `
            translateY(-12px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            scale(1.02)
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
    });
});

// ===================================
// CASE STUDY CARD TILT EFFECT
// ===================================

const cards = document.querySelectorAll('.case-study');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ===================================
// PRELOAD CRITICAL IMAGES
// ===================================

function preloadImages() {
    const images = ['assets/images/y.png', 'assets/images/younis.png', 'assets/images/cursor.png', 'assets/images/cursor-white.png'];
    images.forEach(src => {
        const img = new Image();
        img.src = src;

        // Attempt to preload a dark/white variant if present (e.g., y-white.png)
        const idx = src.lastIndexOf('.');
        if (idx !== -1 && !src.includes('-white')) {
            const candidate = src.slice(0, idx) + '-white' + src.slice(idx);
            const img2 = new Image();
            img2.src = candidate;
        }
    });
}

// Run preload on page load
window.addEventListener('load', preloadImages);

// ===================================
// KEYBOARD NAVIGATION ENHANCEMENT
// ===================================

document.addEventListener('keydown', (e) => {
    // Add focus styles for keyboard navigation
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ===================================
// PERFORMANCE: DEBOUNCE SCROLL EVENTS
// ===================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedHighlight = debounce(highlightNavigation, 100);
window.removeEventListener('scroll', highlightNavigation);
window.addEventListener('scroll', debouncedHighlight);

// ===================================
// ACCESSIBILITY: SKIP TO MAIN CONTENT
// ===================================

// Add focus management for better accessibility
const focusableElements = document.querySelectorAll(
    'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
);

focusableElements.forEach(element => {
    element.addEventListener('focus', () => {
        element.style.outline = '2px solid var(--color-accent)';
        element.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', () => {
        element.style.outline = '';
        element.style.outlineOffset = '';
    });
});

// ===================================
// CONSOLE BRANDING (OPTIONAL)
// ===================================

// ===================================
// ANALYTICS PLACEHOLDER
// ===================================

// Add your analytics tracking code here
// Example: Google Analytics, Plausible, etc.

window.addEventListener('load', () => {
    // You can add event tracking for case study clicks
    document.querySelectorAll('.case-study-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const caseStudyTitle = e.target.closest('.case-study').querySelector('.case-study-title').textContent;
            // Add your analytics event here
            // Example: gtag('event', 'case_study_click', { case_study: caseStudyTitle });
        });
    });
});

// ===================================
// PROJECT PAGE SCROLL ANIMATIONS
// ===================================

// Check if we're on a project page
if (document.querySelector('.project-hero')) {
    const projectObserverOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Animate content sections
                if (element.classList.contains('content-section')) {
                    element.classList.add('animate-fadeInUp');
                    
                    // Animate child elements with stagger
                    const statBoxes = element.querySelectorAll('.stat-box');
                    statBoxes.forEach((box, index) => {
                        setTimeout(() => {
                            box.classList.add('animate-scaleIn');
                        }, index * 100);
                    });
                    
                    const goalCards = element.querySelectorAll('.goal-card');
                    goalCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate-fadeInUp');
                        }, index * 100);
                    });
                    
                    const painPoints = element.querySelectorAll('.pain-point');
                    painPoints.forEach((point, index) => {
                        setTimeout(() => {
                            point.classList.add('animate-slideInLeft');
                        }, index * 150);
                    });
                    
                    const processSteps = element.querySelectorAll('.process-step');
                    processSteps.forEach((step, index) => {
                        setTimeout(() => {
                            step.classList.add('animate-fadeInUp');
                        }, index * 100);
                    });
                    
                    const featureCards = element.querySelectorAll('.feature-card');
                    featureCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate-scaleIn');
                        }, index * 100);
                    });
                    
                    const empathyQuadrants = element.querySelectorAll('.empathy-quadrant');
                    empathyQuadrants.forEach((quadrant, index) => {
                        setTimeout(() => {
                            quadrant.classList.add('animate-fadeInUp');
                        }, index * 100);
                    });
                    
                    const swatches = element.querySelectorAll('.swatch');
                    swatches.forEach((swatch, index) => {
                        setTimeout(() => {
                            swatch.classList.add('animate-slideInRight');
                        }, index * 100);
                    });
                    
                    const personaCard = element.querySelector('.persona-card');
                    if (personaCard) {
                        setTimeout(() => {
                            personaCard.classList.add('animate-fadeIn');
                        }, 200);
                    }
                }
                
                // Stop observing once animated
                projectObserver.unobserve(element);
            }
        });
    }, projectObserverOptions);

    // Observe all content sections
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        projectObserver.observe(section);
    });
}

// ===================================
// THEME IMAGE SWITCHER
// ===================================

function updateThemeImages() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    const themeImages = document.querySelectorAll('.theme-image');
    
    themeImages.forEach(img => {
        const lightSrc = img.getAttribute('data-light-src');
        const darkSrc = img.getAttribute('data-dark-src');
        
        if (isDarkMode && darkSrc) {
            img.src = darkSrc;
        } else if (lightSrc) {
            img.src = lightSrc;
        }
    });
}

// Update images on page load
if (document.querySelector('.theme-image')) {
    updateThemeImages();
    
    // Update images when theme changes
    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            setTimeout(updateThemeImages, 50);
        });
    }
}

// ===================================
// BACK TO TOP BUTTON
// ===================================

const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Smooth scroll to top when clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
