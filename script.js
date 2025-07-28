// Toggle Dark Mode
const toggleTheme = document.querySelector('.toggle-theme');
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Animate Skills on Scroll
const skillBars = document.querySelectorAll('.bar');
const skillSection = document.querySelector('.skills');

const animateSkills = () => {
  skillBars.forEach(bar => {
    const className = bar.classList[1];
    if (className === 'html') bar.style.width = '90%';
    if (className === 'css') bar.style.width = '85%';
    if (className === 'js') bar.style.width = '80%';
    if (className === 'react') bar.style.width = '75%';
    if (className === 'laravel') bar.style.width = '70%';
  });
};

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkills();
      skillObserver.unobserve(skillSection);
    }
  });
}, { threshold: 0.5 });

skillObserver.observe(skillSection);

// Fade-in Animation for Sections
const fadeInElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

fadeInElements.forEach(el => fadeObserver.observe(el));
<<<<<<< HEAD

=======
>>>>>>> ef76a83 (Fixing image display and permissions)
