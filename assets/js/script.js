document.addEventListener('DOMContentLoaded', function() {
  "use strict";
  
  // Scroll to top
  document.querySelectorAll("a[href='#top']").forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });

  // Smooth scroll
  document.querySelectorAll('a.scroll-to').forEach(function(link) {
    link.addEventListener('click', function(e) {
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
  document.querySelectorAll('.site-testimonial-item').forEach(function(item) {
    item.addEventListener('mouseenter', function() {
      document.querySelectorAll('.site-testimonial-item').forEach(function(testimonial) {
        testimonial.classList.add('inactive');
      });
      this.classList.remove('inactive');
      this.classList.add('active');
    });

    item.addEventListener('mouseleave', function() {
      document.querySelectorAll('.site-testimonial-item').forEach(function(testimonial) {
        testimonial.classList.remove('inactive');
        testimonial.classList.remove('active');
      });
    });
  });
});

// Scroll event for navigation background
window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const navigation = document.querySelector('.site-navigation');
  
  if (navigation) {
    if (scrollTop >= 100) {
      navigation.classList.add('nav-bg');
    } else {
      navigation.classList.remove('nav-bg');
    }
  }
});