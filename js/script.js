// Portfolio Projects Data
const portfolioProjects = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with product catalog, shopping cart, and payment integration.",
        tags: ["React", "Flask", "PostgreSQL", "Stripe"],
        image: "images/e-commerce.webp"
    },
    {
        title: "Task Management App",
        description: "A responsive web app for managing tasks and projects with real-time collaboration features.",
        tags: ["Bootstrap", "JavaScript", "Flask", "WebSocket"],
        image: "images/task-management-app.webp"
    },
    {
        title: "Social Media Dashboard",
        description: "Analytics dashboard for monitoring social media metrics across multiple platforms.",
        tags: ["React", "Chart.js", "Flask", "APIs"],
        image: "images/social-media-app.webp"
    },
    {
        title: "Mobile Fitness App",
        description: "Cross-platform fitness tracking app with workout plans, progress tracking, and community features.",
        tags: ["React Native", "Firebase", "Node.js"],
        image: "images/fitness-app.webp"
    },
    {
        title: "Weather Application",
        description: "Real-time weather app with location-based forecasts and interactive weather maps.",
        tags: ["JavaScript", "Weather API", "Bootstrap"],
        image: "images/weather-app.webp"
    },
    {
        title: "Portfolio Website",
        description: "Modern, responsive portfolio website showcasing projects and skills with smooth animations.",
        tags: ["Bootstrap", "JavaScript", "Responsive"],
        image: "images/portfolio.webp"
    }
];

// Skills Data Categorized
const skillsData = {
    frontend: [
        { name: "HTML5", icon: "fab fa-html5", percentage: 95 },
        { name: "CSS3", icon: "fab fa-css3-alt", percentage: 90 },
        { name: "JavaScript", icon: "fab fa-js-square", percentage: 92 },
        { name: "Bootstrap", icon: "fab fa-bootstrap", percentage: 95 },
        { name: "React", icon: "fab fa-react", percentage: 88 },
        { name: "Responsive Design", icon: "fas fa-mobile-alt", percentage: 93 }
    ],
    backend: [
        { name: "Python", icon: "fab fa-python", percentage: 85 },
        { name: "Flask", icon: "fas fa-server", percentage: 87 },
        { name: "REST APIs", icon: "fas fa-code", percentage: 86 },
        { name: "SQL", icon: "fas fa-database", percentage: 83 },
        { name: "Database Design", icon: "fas fa-sitemap", percentage: 82 },
        { name: "Authentication", icon: "fas fa-lock", percentage: 84 }
    ],
    mobile: [
        { name: "React Native", icon: "fab fa-react", percentage: 80 },
        { name: "Flutter", icon: "fas fa-mobile-alt", percentage: 78 },
        { name: "Cross-Platform", icon: "fas fa-layer-group", percentage: 82 },
        { name: "Mobile UI/UX", icon: "fas fa-paint-brush", percentage: 85 }
    ],
    tools: [
        { name: "Git & GitHub", icon: "fab fa-git-alt", percentage: 90 },
        { name: "VS Code", icon: "fas fa-code", percentage: 92 },
        { name: "Docker", icon: "fab fa-docker", percentage: 75 },
        { name: "Linux", icon: "fab fa-linux", percentage: 80 },
        { name: "Figma", icon: "fas fa-design", percentage: 78 },
        { name: "DevTools", icon: "fas fa-tools", percentage: 88 }
    ]
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Render categorized skill cards
    renderCategorizedSkills();
    
    // Render portfolio cards
    renderPortfolioCards();
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Add scroll event listener for navbar active state
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

// Render Categorized Skill Cards with Icons and Progress Bars
function renderCategorizedSkills() {
    renderSkillCategory('frontendSkills', skillsData.frontend);
    renderSkillCategory('backendSkills', skillsData.backend);
    renderSkillCategory('mobileSkills', skillsData.mobile);
    renderSkillCategory('toolsSkills', skillsData.tools);
}

function renderSkillCategory(containerId, skills) {
    const container = document.getElementById(containerId);
    
    skills.forEach((skill, index) => {
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-md-6 mb-4';
        col.style.animation = `slideInUp 0.6s ease-out ${index * 0.05}s both`;
        
        col.innerHTML = `
            <div class="skill-card">
                <div class="skill-card-header">
                    <div class="skill-icon">
                        <i class="${skill.icon}"></i>
                    </div>
                    <h5 class="skill-card-title">${skill.name}</h5>
                </div>
                <div class="skill-bar-wrapper">
                    <div class="skill-bar-header">
                        <span class="skill-name">Proficiency</span>
                        <span class="skill-percentage">${skill.percentage}%</span>
                    </div>
                    <div class="skill-bar-bg">
                        <div class="skill-bar-fill" style="--width: ${skill.percentage}%; width: ${skill.percentage}%;"></div>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
}

// Render Portfolio Cards
function renderPortfolioCards() {
    const container = document.getElementById('portfolioContainer');
    
    portfolioProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'col-lg-4 col-md-6 mb-4';
        card.style.animation = `slideInUp 0.6s ease-out ${index * 0.1}s both`;
        
        const tagsHTML = project.tags
            .map(tag => `<span class="portfolio-tag">${tag}</span>`)
            .join('');
        
        card.innerHTML = `
            <div class="portfolio-card">
                <div class="portfolio-image"><img src="${project.image}" style="width:100%"></div>
                <div class="portfolio-content">
                    <h5 class="portfolio-title">${project.title}</h5>
                    <p class="portfolio-description">${project.description}</p>
                    <div class="portfolio-tags">
                        ${tagsHTML}
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Update active nav link
        updateActiveNavLink();
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);
        
        if (element && navLink) {
            const { offsetTop, offsetHeight } = element;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                // Remove active class from all nav links
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current nav link
                navLink.classList.add('active');
            }
        }
    });
}

// Form Validation
function validateForm(formData) {
    const errors = {};
    
    if (!formData.name.trim()) {
        errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
        errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
        errors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
        errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
        errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters';
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    };
}

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    const validation = validateForm(formData);
    const messageDiv = document.getElementById('formMessage');
    
    if (validation.isValid) {
        // Show loading state
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Show success message
            messageDiv.style.display = 'block';
            messageDiv.className = 'alert alert-success';
            messageDiv.innerHTML = '<i class="fas fa-check-circle me-2"></i>Thank you! Your message has been sent successfully.';
            
            // Reset form
            document.getElementById('contactForm').reset();
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            
            // Hide message after 5 seconds
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 5000);
        }, 1000);
    } else {
        // Show error message
        messageDiv.style.display = 'block';
        messageDiv.className = 'alert alert-danger';
        const errorMessages = Object.values(validation.errors).join('<br>');
        messageDiv.innerHTML = `<i class="fas fa-exclamation-circle me-2"></i>${errorMessages}`;
    }
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe portfolio cards for animation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.portfolio-card').forEach(card => {
            observer.observe(card);
        });
    }, 100);
});

// Debounce function for performance optimization
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Throttle function for performance optimization
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Optimize scroll event with throttle
const throttledScroll = throttle(updateActiveNavLink, 100);
window.addEventListener('scroll', throttledScroll);

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    }
});

// Prevent default link behavior for smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            scrollToSection(href.substring(1));
        }
    });
});

// Add focus visible style for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

console.log('Portfolio website loaded successfully!');

