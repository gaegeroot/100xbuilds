document.addEventListener('DOMContentLoaded', function () {
    "use strict";

    initMobileCategoryScroll();

    // Scroll to top
    document.querySelectorAll("a[href='#top']").forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Smooth scroll
    document.querySelectorAll('a.scroll-to').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 50;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Testimonial hover effects
    document.querySelectorAll('.site-testimonial-item').forEach(function (item) {
        item.addEventListener('mouseenter', function () {
            document.querySelectorAll('.site-testimonial-item').forEach(function (testimonial) {
                testimonial.classList.add('inactive');
            });
            this.classList.remove('inactive');
            this.classList.add('active');
        });

        item.addEventListener('mouseleave', function () {
            document.querySelectorAll('.site-testimonial-item').forEach(function (testimonial) {
                testimonial.classList.remove('inactive');
                testimonial.classList.remove('active');
            });
        });
    });
});

// Scroll event for navigation background
window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navigation = document.querySelector('.site-navigation');

    if (navigation) {
        if (scrollTop >= 100) {
            navigation.classList.remove('nav-bg');
        } else {
            navigation.classList.add('nav-bg');
        }
    }
});

// Mobile Category Scroll with Fade Indicators - Compartmentalized Function
function initMobileCategoryScroll() {
    const categoryContainer = document.getElementById('categoryContainer');
    const categoryScroll = document.getElementById('categoryScroll');
    
    // Early return if elements don't exist
    if (!categoryContainer || !categoryScroll) return;
    
    // Check if mobile viewport
    function isMobile() {
        return window.innerWidth <= 767;
    }
    
    // Update fade gradient visibility based on scroll position
    function updateFadeGradients() {
        if (!isMobile()) return;
        
        const scrollLeft = categoryScroll.scrollLeft;
        const scrollWidth = categoryScroll.scrollWidth;
        const clientWidth = categoryScroll.clientWidth;
        
        // Show left fade when scrolled right
        categoryContainer.classList.toggle('scrolled-left', scrollLeft > 10);
        
        // Hide right fade when scrolled to end
        categoryContainer.classList.toggle('scrolled-right', scrollLeft >= scrollWidth - clientWidth - 10);
    }
    
    // Handle window resize
    function handleResize() {
        if (!isMobile()) {
            // Clean up mobile classes on desktop
            categoryContainer.classList.remove('scrolled-left', 'scrolled-right');
        } else {
            // Recalculate fade states on mobile after resize
            setTimeout(updateFadeGradients, 100);
        }
    }
    
    // Add event listeners
    categoryScroll.addEventListener('scroll', updateFadeGradients);
    window.addEventListener('resize', handleResize);
    
    // Set initial state
    setTimeout(updateFadeGradients, 100);
    
    // Return cleanup function (optional - for if you ever need to remove listeners)
    return function cleanup() {
        categoryScroll.removeEventListener('scroll', updateFadeGradients);
        window.removeEventListener('resize', handleResize);
        categoryContainer.classList.remove('scrolled-left', 'scrolled-right');
    };
}