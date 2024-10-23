// Smooth scrolling for the navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back Button functionality
document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html#projects'; 
});






      