document.addEventListener('DOMContentLoaded', function() {
    
    // Create Floating Elements (Cozy Tech Particles)
    function createFloatingElements() {
        const container = document.getElementById('floatingElements');
        const elementCount = window.innerWidth > 768 ? 30 : 15;
        
        for (let i = 0; i < elementCount; i++) {
            const element = document.createElement('div');
            element.className = 'floating-element';
            element.style.left = Math.random() * 100 + '%';
            element.style.animationDelay = Math.random() * 15 + 's';
            element.style.animationDuration = (12 + Math.random() * 8) + 's';
            
            // Varied colors for cozy tech feel
            const colors = ['var(--primary)', 'var(--secondary)', 'var(--accent)', 'var(--success)'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            element.style.background = randomColor;
            element.style.boxShadow = `0 0 10px ${randomColor}`;
            
            container.appendChild(element);
        }
    }

    // ===============================================================
    // ENHANCED PORTFOLIO GALLERY WITH ANTI-CROPPING FUNCTIONALITY
    // ===============================================================
    let currentProject = 0;
    const projects = document.querySelectorAll('.project-display');
    const thumbnails = document.querySelectorAll('.thumbnail-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const viewer = document.getElementById('mainViewer');
    const fitButtons = document.querySelectorAll('.fit-btn');

    // NEW: Enhanced Fit Control Functionality
    fitButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const fitMode = btn.getAttribute('data-fit');
            
            // Update button states
            fitButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update viewer class to change image fitting
            viewer.className = `viewer-container fit-${fitMode}`;
            
            // Add visual feedback
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);

            // Show notification about the change
            showNotification(`Image display mode: ${fitMode === 'contain' ? 'Fit (No cropping)' : 'Fill (May crop)'}`);
        });
    });

    // Enhanced Project Display Function
    function showProject(index) {
        // Hide all projects with smooth transition
        projects.forEach((project, i) => {
            project.classList.remove('active');
            if (i === index) {
                setTimeout(() => {
                    project.classList.add('active');
                }, 50);
            }
        });

        // Update thumbnails
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });

        // Add smooth transition effect to main viewer
        const mainViewer = document.querySelector('.main-viewer');
        mainViewer.style.transform = 'scale(0.98)';
        setTimeout(() => {
            mainViewer.style.transform = 'scale(1)';
        }, 150);

        currentProject = index;
    }

    // Enhanced Thumbnail Click Handlers
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            showProject(index);
            
            // Add click feedback
            thumb.style.transform = 'translateX(10px) scale(1.02)';
            setTimeout(() => {
                thumb.style.transform = '';
            }, 200);
        });

        // Enhanced hover effects
        thumb.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(99, 102, 241, 0.15)';
            this.style.borderColor = 'var(--primary-light)';
        });

        thumb.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.background = '';
                this.style.borderColor = '';
            }
        });
    });

    // Navigation buttons with enhanced feedback
    prevBtn?.addEventListener('click', () => {
        const newIndex = (currentProject - 1 + projects.length) % projects.length;
        showProject(newIndex);
        
        // Button feedback
        prevBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            prevBtn.style.transform = '';
        }, 150);
    });

    nextBtn?.addEventListener('click', () => {
        const newIndex = (currentProject + 1) % projects.length;
        showProject(newIndex);
        
        // Button feedback
        nextBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            nextBtn.style.transform = '';
        }, 150);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevBtn?.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn?.click();
        }
        
        // Quick fit mode switching with F key
        if (e.key === 'f' || e.key === 'F') {
            const activeFitBtn = document.querySelector('.fit-btn.active');
            const isContainActive = activeFitBtn?.getAttribute('data-fit') === 'contain';
            const targetBtn = document.querySelector(`[data-fit="${isContainActive ? 'cover' : 'contain'}"]`);
            targetBtn?.click();
        }
    });

    // Auto-advance gallery (optional, with pause on hover)
    let autoAdvanceInterval;
    function startAutoAdvance() {
        autoAdvanceInterval = setInterval(() => {
            const newIndex = (currentProject + 1) % projects.length;
            showProject(newIndex);
        }, 8000);
    }

    function stopAutoAdvance() {
        clearInterval(autoAdvanceInterval);
    }

    // Start auto-advance, pause on hover
    const gallery = document.querySelector('.project-gallery');
    if (gallery) {
        startAutoAdvance();
        gallery.addEventListener('mouseenter', stopAutoAdvance);
        gallery.addEventListener('mouseleave', startAutoAdvance);
    }

    // Skill Animation System
    function animateSkills() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach((item, index) => {
            const progressBar = item.querySelector('.skill-progress');
            const level = item.getAttribute('data-level');
            
            // Reset animation
            progressBar.style.width = '0%';
            
            setTimeout(() => {
                progressBar.style.width = level + '%';
                
                // Add ripple effect
                const ripple = document.createElement('div');
                ripple.style.cssText = `
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    width: 10px;
                    height: 10px;
                    background: rgba(99, 102, 241, 0.6);
                    border-radius: 50%;
                    animation: skillRipple 0.6s ease-out;
                    pointer-events: none;
                `;
                
                item.style.position = 'relative';
                item.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
                
            }, index * 200);
        });
    }

    // Add ripple animation dynamically
    const skillStyle = document.createElement('style');
    skillStyle.textContent = `
        @keyframes skillRipple {
            0% {
                transform: translateY(-50%) scale(0);
                opacity: 1;
            }
            100% {
                transform: translateY(-50%) scale(3);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(skillStyle);

    // Enhanced Scroll Animations with Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Trigger skill animations when skills section is visible
                if (entry.target.classList.contains('skills-card')) {
                    setTimeout(() => animateSkills(), 300);
                }
                
                // Add special effects for different elements
                if (entry.target.classList.contains('cozy-card')) {
                    setTimeout(() => {
                        entry.target.style.boxShadow = 'var(--shadow-large), var(--glow-soft)';
                    }, 400);
                }
            } else {
                entry.target.classList.remove('animate');
                
                // Reset special effects
                if (entry.target.classList.contains('cozy-card')) {
                    entry.target.style.boxShadow = '';
                }
            }
        });
    }, observerOptions);

    // Observe animated elements
    document.querySelectorAll('.scroll-animate, .scroll-animate-scale').forEach(el => {
        observer.observe(el);
    });

    // Interactive Navigation Effects
    const navLinks = document.querySelectorAll('.cozy-nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Create smooth ripple effect
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.cssText = `
                position: absolute;
                left: ${e.clientX - rect.left - size/2}px;
                top: ${e.clientY - rect.top - size/2}px;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(99, 102, 241, 0.3);
                transform: scale(0);
                animation: navRipple 0.6s ease-out;
                pointer-events: none;
                z-index: 0;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add nav ripple animation
    const navStyle = document.createElement('style');
    navStyle.textContent = `
        @keyframes navRipple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(navStyle);

    // Smooth scroll behavior for navigation
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    });

    // Modal Enhancement
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.addEventListener('show.bs.modal', function() {
            const modalContent = this.querySelector('.cozy-modal');
            modalContent.style.animation = 'modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });

        modal.addEventListener('hide.bs.modal', function() {
            const modalContent = this.querySelector('.cozy-modal');
            modalContent.style.animation = 'modalSlideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    }

    // Add modal animations
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        @keyframes modalSlideIn {
            0% {
                transform: translateY(-50px) scale(0.9);
                opacity: 0;
            }
            100% {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
        }
        
        @keyframes modalSlideOut {
            0% {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translateY(-30px) scale(0.95);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(modalStyle);

    // Interactive Contact Cards
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('click', function() {
            // Copy to clipboard functionality
            const value = this.querySelector('.contact-value').textContent.trim();
            if (navigator.clipboard) {
                navigator.clipboard.writeText(value).then(() => {
                    showNotification('Copied to clipboard! 📋');
                });
            }
            
            // Visual feedback
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.background = 'rgba(99, 102, 241, 0.2)';
            
            setTimeout(() => {
                this.style.transform = '';
                this.style.background = '';
            }, 300);
        });
    });

    // Parallax effect for background elements
    let ticking = false;
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        const orbs = document.querySelector('.ambient-orbs');
        if (orbs) {
            orbs.style.transform = `translateY(${rate * 0.1}px)`;
        }
        
        const pattern = document.querySelector('.tech-pattern');
        if (pattern) {
            pattern.style.transform = `translate(${rate * 0.05}px, ${rate * 0.05}px)`;
        }
        
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // Initialize all systems
    createFloatingElements();
    
    // Initialize first project as active
    showProject(0);
    
    // Add loading complete class for any final animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);

    // Performance monitoring
    if (window.innerWidth <= 768) {
        // Mobile optimizations
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            if (index % 2 === 0) {
                element.remove(); // Reduce particles on mobile
            }
        });
        
        // Disable some heavy effects on mobile
        stopAutoAdvance();
    }

    // Image Loading Enhancement
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '0';
            this.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 50);
        });
    });

    // Enhanced Image Error Handling
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.background = 'rgba(99, 102, 241, 0.1)';
            this.style.border = '2px dashed rgba(99, 102, 241, 0.3)';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.minHeight = '150px';
            this.innerHTML = '<div style="color: var(--text-muted); text-align: center;"><div>📷</div><div style="font-size: 0.9rem; margin-top: 0.5rem;">Image not found</div></div>';
        });
    });

    console.log("✨ Enhanced Portfolio Gallery loaded successfully!");
    console.log("🔧 New Features:");
    console.log("  • Anti-cropping image system");
    console.log("  • Fit/Fill toggle controls");
    console.log("  • Enhanced thumbnails");
    console.log("  • Keyboard shortcuts (Arrow keys, F for fit toggle)");
});

// Enhanced CV Download with better feedback
function downloadCV() {
    const clickedElement = event.target;
    const originalText = clickedElement.textContent;
    const originalIcon = clickedElement.querySelector('.nav-icon')?.textContent;
    
    // Visual feedback sequence
    clickedElement.style.transform = 'scale(0.95)';
    clickedElement.style.background = 'rgba(99, 102, 241, 0.2)';
    clickedElement.style.borderColor = 'var(--primary)';
    
    // Update text and icon
    if (clickedElement.querySelector('.nav-icon')) {
        clickedElement.querySelector('.nav-icon').textContent = '⬇️';
    }
    clickedElement.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = 'Downloading...';
        }
    });
    
    // Simulate download progress
    setTimeout(() => {
        if (clickedElement.querySelector('.nav-icon')) {
            clickedElement.querySelector('.nav-icon').textContent = '✅';
        }
        clickedElement.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                node.textContent = 'Downloaded!';
            }
        });
        clickedElement.style.background = 'rgba(16, 185, 129, 0.2)';
        clickedElement.style.borderColor = 'var(--success)';
        
        // Reset after delay
        setTimeout(() => {
            clickedElement.style.transform = '';
            clickedElement.style.background = '';
            clickedElement.style.borderColor = '';
            if (clickedElement.querySelector('.nav-icon') && originalIcon) {
                clickedElement.querySelector('.nav-icon').textContent = originalIcon;
            }
            clickedElement.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    node.textContent = originalText.replace(/[📄⬇️✅]/g, '').trim();
                }
            });
        }, 2000);
    }, 1500);
    
    // Create download effect
    const downloadEffect = document.createElement('div');
    downloadEffect.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 200px;
        border: 3px solid var(--primary);
        border-radius: 50%;
        border-top-color: transparent;
        animation: downloadSpin 1s linear infinite;
        z-index: 9999;
        pointer-events: none;
    `;
    
    document.body.appendChild(downloadEffect);
    setTimeout(() => downloadEffect.remove(), 1500);
    
    // Add download spin animation
    if (!document.querySelector('#download-style')) {
        const downloadStyle = document.createElement('style');
        downloadStyle.id = 'download-style';
        downloadStyle.textContent = `
            @keyframes downloadSpin {
                0% { transform: translate(-50%, -50%) rotate(0deg); }
                100% { transform: translate(-50%, -50%) rotate(360deg); }
            }
        `;
        document.head.appendChild(downloadStyle);
    }
    
    // Show notification
    setTimeout(() => {
        showNotification('CV download started! 📄', 2000);
    }, 100);
    
    // Actual download (replace with your CV path)
    try {
        window.open('cv/TokaiTeioooo.pdf', '_blank');
    } catch (error) {
        console.warn('CV file not found. Please update the path in the downloadCV function.');
        showNotification('CV file not found. Please contact for a copy! 📧', 4000);
    }
}

// Enhanced Notification System
function showNotification(message, duration = 3000) {
    // Remove existing notifications
    const existing = document.querySelectorAll('.cozy-notification');
    existing.forEach(notif => notif.remove());
    
    const notification = document.createElement('div');
    notification.className = 'cozy-notification';
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: var(--bg-card);
        border: 1px solid var(--primary);
        border-radius: var(--radius-md);
        padding: 1rem 1.5rem;
        color: var(--text-primary);
        box-shadow: var(--shadow-medium);
        z-index: 10000;
        transform: translateX(100%);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(20px);
        max-width: 300px;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Slide in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Slide out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

// Enhanced Theme System
class CozyTechTheme {
    constructor() {
        this.themes = {
            default: {
                primary: '#6366f1',
                secondary: '#8b5cf6',
                accent: '#06b6d4',
                success: '#10b981'
            },
            warm: {
                primary: '#f59e0b',
                secondary: '#ef4444',
                accent: '#10b981',
                success: '#06b6d4'
            },
            cool: {
                primary: '#06b6d4',
                secondary: '#3b82f6',
                accent: '#8b5cf6',
                success: '#10b981'
            }
        };
        
        this.currentTheme = 'default';
        this.init();
    }
    
    init() {
        // Add theme switcher (hidden by default, can be enabled)
        this.createThemeSwitcher();
    }
    
    createThemeSwitcher() {
        const switcher = document.createElement('div');
        switcher.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: var(--bg-card);
            border: 1px solid var(--primary);
            border-radius: var(--radius-md);
            padding: 0.5rem;
            display: none; /* Hidden by default */
            gap: 0.5rem;
            z-index: 1000;
            backdrop-filter: blur(20px);
        `;
        
        Object.keys(this.themes).forEach(themeName => {
            const btn = document.createElement('button');
            btn.style.cssText = `
                width: 30px;
                height: 30px;
                border: 2px solid transparent;
                border-radius: 50%;
                cursor: pointer;
                background: ${this.themes[themeName].primary};
                transition: all 0.3s ease;
            `;
            
            if (themeName === this.currentTheme) {
                btn.style.borderColor = 'white';
                btn.style.transform = 'scale(1.1)';
            }
            
            btn.addEventListener('click', () => this.setTheme(themeName));
            switcher.appendChild(btn);
        });
        
        document.body.appendChild(switcher);
    }
    
    setTheme(themeName) {
        if (!this.themes[themeName]) return;
        
        const theme = this.themes[themeName];
        const root = document.documentElement;
        
        Object.keys(theme).forEach(key => {
            root.style.setProperty(`--${key}`, theme[key]);
        });
        
        this.currentTheme = themeName;
        
        // Update theme switcher buttons
        const buttons = document.querySelectorAll('[style*="width: 30px"]');
        buttons.forEach((btn, index) => {
            const isActive = Object.keys(this.themes)[index] === themeName;
            btn.style.borderColor = isActive ? 'white' : 'transparent';
            btn.style.transform = isActive ? 'scale(1.1)' : 'scale(1)';
        });
        
        showNotification(`Theme switched to ${themeName}! 🎨`);
    }
}

// Initialize theme system
const themeSystem = new CozyTechTheme();

// Accessibility enhancements
function initAccessibility() {
    // Focus management
    const focusableElements = document.querySelectorAll('a, button, input, [tabindex]');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
    // Keyboard navigation for gallery
    document.addEventListener('keydown', (e) => {
        // Quick navigation shortcuts
        if (e.altKey) {
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case '2':
                    e.preventDefault();
                    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case '3':
                    e.preventDefault();
                    document.querySelector('[data-bs-toggle="modal"]')?.click();
                    break;
            }
        }
    });
}

// Utility functions
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Performance optimization
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Reduce animations on slower devices
    if (navigator.hardwareConcurrency <= 4) {
        document.body.classList.add('reduced-motion');
        const style = document.createElement('style');
        style.textContent = `
            .reduced-motion * {
                animation-duration: 0.1s !important;
                transition-duration: 0.1s !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize all systems when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initAccessibility();
    optimizePerformance();
    
    // Add loaded class for final animations
    setTimeout(() => {
        document.body.classList.add('fully-loaded');
    }, 1000);
});

// Console welcome message for developers
console.log(`
╭─────────────────────────────────────────────╮
│  🌟 Enhanced Cozy Tech Portfolio            │
│                                             │
│  ✨ NEW FEATURES:                           │
│  • Anti-cropping image system              │
│  • Fit/Fill toggle controls                │
│  • Enhanced thumbnail display              │
│  • Smart image error handling              │
│                                             │
│  🎮 Keyboard shortcuts:                     │
│  • Alt + 1: About section                  │
│  • Alt + 2: Portfolio section              │
│  • Alt + 3: Contact modal                  │
│  • Arrow keys: Navigate gallery            │
│  • F: Toggle fit/fill mode                 │
╰─────────────────────────────────────────────╯
`);

console.log("✨ Enhanced Portfolio loaded successfully! No more cropped images! 🎨");