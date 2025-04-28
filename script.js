// Navigation
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")
const navLink = document.querySelectorAll(".nav-link")

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navLinks.classList.toggle("active")
})

// Close mobile menu when clicking on a nav link
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navLinks.classList.remove("active")
  })
})

// Sticky header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  header.classList.toggle("scrolled", window.scrollY > 50)
})

// Active nav link on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active")
    }
  })
})

// Scroll animations
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".animate-on-scroll")

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (elementPosition < windowHeight - 50) {
      element.classList.add("show")
    }
  })
}

// Run animation on load
window.addEventListener("load", animateOnScroll)

// Run animation on scroll
window.addEventListener("scroll", animateOnScroll)

// Project filters
const filterButtons = document.querySelectorAll(".filter-btn")
const projectCards = document.querySelectorAll(".project-card")

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"))

    // Add active class to clicked button
    button.classList.add("active")

    const filter = button.getAttribute("data-filter")

    projectCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })
  })
})

// Certificate slider
const certificateSlides = document.querySelectorAll(".certificate-slide")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

let currentSlide = 0

// Hide all slides except the first one
certificateSlides.forEach((slide, index) => {
  if (index !== 0) {
    slide.style.display = "none"
  }
})

// Show next slide
const showNextSlide = () => {
  certificateSlides[currentSlide].style.display = "none"
  currentSlide = (currentSlide + 1) % certificateSlides.length
  certificateSlides[currentSlide].style.display = "block"
}

// Show previous slide
const showPrevSlide = () => {
  certificateSlides[currentSlide].style.display = "none"
  currentSlide = (currentSlide - 1 + certificateSlides.length) % certificateSlides.length
  certificateSlides[currentSlide].style.display = "block"
}

// Event listeners for slider buttons
nextBtn.addEventListener("click", showNextSlide)
prevBtn.addEventListener("click", showPrevSlide)

// Form submission
const contactForm = document.querySelector(".contact-form")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form values
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const subject = document.getElementById("subject").value
  const message = document.getElementById("message").value

  // Here you would typically send the form data to a server
  // For now, we'll just log it to the console
  console.log({ name, email, subject, message })

  // Show success message (in a real application)
  alert("Message sent successfully!")

  // Reset form
  contactForm.reset()
})

// Create a dummy PDF for the resume download
// In a real application, you would have an actual PDF file
const createDummyPDF = () => {
  const resumeLink = document.querySelector(".btn-primary[download]")

  // If there's no actual PDF file, you can create a dummy one or redirect to a real file
  resumeLink.addEventListener("click", (e) => {
    // Uncomment this line if you want to prevent the default download behavior
    // e.preventDefault();

    // You could show a message or redirect to a real file
    console.log("Resume download clicked")
  })
}

createDummyPDF()
