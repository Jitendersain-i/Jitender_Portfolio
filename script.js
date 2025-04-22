// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    const navLink = document.querySelectorAll('.nav-link');
    
    navLink.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.reveal-element');
    
    function revealOnScroll() {
        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('active');
            }
        }
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on page load
    
    // Skill progress bars animation
    const progressBars = document.querySelectorAll('.progress');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const percent = bar.getAttribute('data-percent');
            bar.style.width = percent;
        });
    }
    
    // Trigger progress bar animation when skills section is in view
    const skillsSection = document.getElementById('skills');
    
    function checkSkillsInView() {
        if (skillsSection) {
            const windowHeight = window.innerHeight;
            const elementTop = skillsSection.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - 200) {
                animateProgressBars();
                window.removeEventListener('scroll', checkSkillsInView);
            }
        }
    }
    
    window.addEventListener('scroll', checkSkillsInView);
    checkSkillsInView(); // Check on page load
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll just log it and show an alert
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Create a sample resume PDF for download
    function createSampleResume() {
        // This is just a placeholder function
        // In a real scenario, you would have an actual PDF file to download
        console.log('Resume download link is ready');
    }
    
    createSampleResume();
});
