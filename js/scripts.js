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
}); 