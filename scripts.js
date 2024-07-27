document.addEventListener("DOMContentLoaded", function() {
    // Theme toggle functionality
    function updateThemeButton() {
        const themeToggle = document.getElementById('theme-toggle');
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.textContent = 'Light';
        } else {
            themeToggle.textContent = 'Dark';
        }
    }

    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        updateThemeButton();
    });

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    updateThemeButton();

    // Carousel functionality
    const projects = document.querySelectorAll('.project');
    let currentProject = 0;

    function updateCarousel() {
        projects.forEach((project, index) => {
            project.classList.remove('prev', 'active', 'next');
            if (index === currentProject) {
                project.classList.add('active');
            } else if (index === (currentProject - 1 + projects.length) % projects.length) {
                project.classList.add('prev');
            } else if (index === (currentProject + 1) % projects.length) {
                project.classList.add('next');
            }
        });
    }

    document.querySelector('.carousel-button.prev').addEventListener('click', function() {
        currentProject = (currentProject - 1 + projects.length) % projects.length;
        updateCarousel();
    });

    document.querySelector('.carousel-button.next').addEventListener('click', function() {
        currentProject = (currentProject + 1) % projects.length;
        updateCarousel();
    });

    updateCarousel();
});