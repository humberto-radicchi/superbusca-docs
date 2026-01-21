/**
 * Welcome Page JavaScript
 * Handles interactions and first-time setup
 */

document.addEventListener('DOMContentLoaded', () => {
    // Open extension button
    const openExtensionBtn = document.getElementById('openExtensionBtn');
    if (openExtensionBtn) {
        openExtensionBtn.addEventListener('click', () => {
            // Open extension popup
            chrome.action.openPopup().catch(() => {
                // If popup can't be opened programmatically, show message
                alert('Por favor, clique no ícone da extensão SuperBusca na barra de ferramentas do Chrome para começar!');
            });
        });
    }

    // Mark welcome page as viewed
    chrome.storage.local.set({ welcomePageViewed: true });

    // Add smooth scroll for internal links
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
        });
    });

    // Add animation on scroll
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

    // Observe all sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Log analytics (if needed in the future)
    console.log('Welcome page loaded successfully');
});
