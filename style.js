// Typewriter
// List of text to display
var texts = ["Student", "Frontend Developer", "UI/UX Designer", "Photo/Video Editor", "Logo Designer"];
var count = 0; // Index of the current text
var index = 0; // Index of the current character
var currentText = '';
var letter = '';

// Function to display text with typewriter effect
function type() {
    if (index < texts[count].length) {
        currentText += texts[count].charAt(index);
        document.getElementById('typewriter').textContent = currentText;
        index++;
        setTimeout(type, 50); // Adjust typing speed (milliseconds)
    } else {
        setTimeout(erase, 2000); // Wait 2 seconds before erasing
    }
}

// Function to erase text
function erase() {
    if (index > 0) {
        currentText = texts[count].substring(0, index - 1);
        document.getElementById('typewriter').textContent = currentText;
        index--;
        setTimeout(erase, 30); // Adjust erasing speed (milliseconds)
    } else {
        count = (count + 1) % texts.length; // Move to the next text
        setTimeout(type, 500); // Wait 0.5 seconds before typing next text
    }
}

// Start the typewriter effect
type();

// Script to change background

document.addEventListener("DOMContentLoaded", function () {
    const switchButton = document.querySelector(".switch img");
    const body = document.querySelector("body");

    // Initial image sources
    let currentSwitchImage = "sun-svgrepo-com.svg";
    let currentBodyImage = "dark"; // Assuming dark mode as initial state
    let dark = "https://bostami-bootstrap-nextjs.vercel.app/assets/img/bg/page-bg-dark-1.jpg";
    let light = "https://bostami-bootstrap-nextjs.vercel.app/assets/img/bg/page-bg-1.jpg";

    // Function to toggle switch image source
    function toggleSwitchImage() {
        if (currentSwitchImage === "sun-svgrepo-com.svg") {
            switchButton.src = "moon-svgrepo-com.svg";
        } else {
            switchButton.src = "sun-svgrepo-com.svg";
        }
        currentSwitchImage = currentSwitchImage === "sun-svgrepo-com.svg" ? "moon-svgrepo-com.svg" : "sun-svgrepo-com.svg";
    }

    // Function to change body background image
    function changeBodyBackgroundImage() {
        if (currentBodyImage === "dark") {
            body.style.backgroundImage = `url(${light})`;
        } else {
            body.style.backgroundImage = `url(${dark})`;
        }
        currentBodyImage = currentBodyImage === "dark" ? "light" : "dark";
    }

    // Event listener for switch button image
    switchButton.addEventListener("click", function () {
        toggleSwitchImage();
        changeBodyBackgroundImage();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var toggleLinks = document.querySelectorAll(".toggleLink");
    var contents = document.querySelectorAll(".content");

    toggleLinks.forEach(function (link, index) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            toggleLinks.forEach(function (toggleLink) {
                toggleLink.style.backgroundColor = "";
            });
            link.style.backgroundColor = "rgb(248, 127, 127)";

            contents.forEach(function (content) {
                content.style.display = "none";
            });
            contents[index].style.display = "block";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".nav-link");
    var sections = document.querySelectorAll(".section");

    navLinks.forEach(function (link, index) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            navLinks.forEach(function (navLink) {
                navLink.classList.remove("active");
            });
            link.classList.add("active");

            sections.forEach(function (section) {
                section.style.display = "none";
            });

            sections[index].style.display = "block";
        });
    });
});
