// Select all the videos in the reels
const videos = document.querySelectorAll(".reel video");

// Function to play/pause videos based on visibility
function handleScroll() {
    videos.forEach((video) => {
        const rect = video.getBoundingClientRect(); // Get the video's position in the viewport
        const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (inView) {
            video.play(); // Play video if fully visible
        } else {
            video.pause(); // Pause video if out of view
        }
    });
}

// Event listener for scrolling
document.querySelector(".reels-container").addEventListener("scroll", handleScroll);

// Initial check when page loads
handleScroll();
document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll(".video-frame video");
    const muteButtons = document.querySelectorAll(".mute-toggle");

    muteButtons.forEach((button, index) => {
        const video = videos[index];

        // Ensure videos are not muted initially
        video.muted = false;

        // Add click event listener to toggle mute state
        button.addEventListener("click", () => {
            video.muted = !video.muted;
            button.textContent = video.muted ? "🔇" : "🔊"; // Update icon
        });
    });
});
