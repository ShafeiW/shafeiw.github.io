// This file is ready for future JavaScript enhancements. 

document.addEventListener('DOMContentLoaded', () => {
    // Keep the original background video focus logic, but adapt for two videos
    const videos = [document.getElementById('bg-video-1'), document.getElementById('bg-video-2')];
    
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            videos.forEach(v => v.play());
        }
    });

    // Seamless video loop logic
    let activeVideo = 0;
    const fadePoint = 3; // Seconds before the end to start fading

    videos[0].addEventListener('timeupdate', function() {
        if (this.duration - this.currentTime <= fadePoint) {
            // Switch active video index
            let nextVideo = (activeVideo + 1) % videos.length;

            // Fade out current video
            videos[activeVideo].style.opacity = 0;
            
            // Reset and play next video, then fade it in
            videos[nextVideo].currentTime = 0;
            videos[nextVideo].play();
            videos[nextVideo].style.opacity = 1;

            // Update the active video tracker
            activeVideo = nextVideo;
        }
    });

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