// This file is ready for future JavaScript enhancements. 

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('bg-video');

    // This fixes a browser issue where videos in background tabs are paused.
    // When the tab becomes visible again, we ensure the video continues playing.
    if (video) {
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                video.play();
            }
        });
    }

    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    });
}); 