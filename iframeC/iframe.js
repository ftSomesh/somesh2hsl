
// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }

            // Update active link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Update active link on scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Show/hide back to top button
    const backToTopButton = document.getElementById('back-to-top');
    if (scrollPosition > 300) {
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
});

// Back to top button
document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// toast

const button = document.querySelector("#cv-pdf");
const toast = document.querySelector(".toast")
const closeIcon = document.querySelector(".close")
const progress = document.querySelector(".progress")

const sendButton = document.querySelector("button#send")
let timeout1;
let timeout2;
let timeout3;
button.addEventListener("click", () => {
    if (timeout1) clearTimeout(timeout1)
    if (timeout2) clearTimeout(timeout2)
    if (timeout3) clearTimeout(timeout3)
    toast.classList.add("active")
    progress.classList.add("active")

    timeout1 = setTimeout(() => {
        toast.classList.remove("active")
    }, 5000);
    timeout2 = setTimeout(() => {
        progress.classList.remove("active")

    }, 5300);

})
closeIcon.addEventListener("click", () => {
    toast.classList.remove("active")

    timeout3 = setTimeout(() => {
        progress.classList.remove("active")
    }, 300);

})
// Animate skill bars on scroll
// const animateSkillBars = () => {
//     const skillBars = document.querySelectorAll('.skill-progress');
//     const skillsSection = document.getElementById('skills');
//     const skillsSectionTop = skillsSection.offsetTop;
//     const windowHeight = window.innerHeight;

//     if (window.scrollY > skillsSectionTop - windowHeight + 200) {
//         skillBars.forEach(bar => {
//             const width = bar.style.width;
//             bar.style.width = '0';
//             setTimeout(() => {
//                 bar.style.width = width;
//             }, 100);
//         });

//         // Remove event listener after animation
//         window.removeEventListener('scroll', ()=> animateSkillBars());
//     }
// };

// window.addEventListener('scroll', animateSkillBars());
