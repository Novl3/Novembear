const profileImages = [
  "../images/me.jpg",
  "../images/me2.jpg",
  "../images/me3.jpg",
  "../images/me4.jpg",
  "../images/me5.jpg",
  "../images/me6.jpg",
  "../images/me7.jpg",
];

let currentIndex = 0;

function updateImage() {
  document.getElementById("profileImage").src = profileImages[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % profileImages.length;
  updateImage();
}

function previousImage() {
  currentIndex = (currentIndex - 1 + profileImages.length) % profileImages.length;
  updateImage();
}

function viewImage() {
  const fullscreenModal = document.getElementById("fullscreenModal");
  const fullscreenImage = document.getElementById("fullscreenImage");
  fullscreenImage.src = profileImages[currentIndex];
  fullscreenModal.style.display = "block";
}

function closeModal() {
  const fullscreenModal = document.getElementById("fullscreenModal");
  fullscreenModal.style.display = "none";
}

function nextImageModal() {
  currentIndex = (currentIndex + 1) % profileImages.length;
  document.getElementById("fullscreenImage").src = profileImages[currentIndex];
}

function previousImageModal() {
  currentIndex = (currentIndex - 1 + profileImages.length) % profileImages.length;
  document.getElementById("fullscreenImage").src = profileImages[currentIndex];
}

const backgroundImages = [
  "url('../images/white.jpg')",
  "url('../images/blow.jpg')",
  "url('../images/green.jpg')",
  "url('../images/gold.jpg')"
];

let currentBackgroundIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".nav-button");
  const sections = document.querySelectorAll(".section");

  buttons.forEach((button) => {
      button.addEventListener("click", () => {
          const sectionId = button.getAttribute("data-section");
          sections.forEach((section) => section.classList.remove("active"));
          document.getElementById(sectionId).classList.add("active");
      });
  });

  const homeButton = document.getElementById("homeButton");
  homeButton.addEventListener("click", () => {
      sections.forEach((section) => section.classList.remove("active"));
      document.getElementById("home").classList.add("active");
  });

  document.getElementById("home").classList.add("active");
});

function changeBackground() {
  currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
  document.body.style.background = `${backgroundImages[currentBackgroundIndex]} no-repeat center center fixed`;
  document.body.style.backgroundSize = "cover";
}

document.addEventListener("DOMContentLoaded", () => {
  const customCursor = document.querySelector(".custom-cursor");
  const hoverableElements = document.querySelectorAll(".nav-button, .button, .profile-image");

  document.addEventListener("mousemove", (e) => {
      customCursor.style.left = `${e.pageX}px`;
      customCursor.style.top = `${e.pageY}px`;
  });

  hoverableElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
          customCursor.classList.add("hover-effect");
      });

      element.addEventListener("mouseleave", () => {
          customCursor.classList.remove("hover-effect");
      });
  });
});
