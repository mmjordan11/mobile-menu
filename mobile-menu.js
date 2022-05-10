// -------------- VIEW --------------

// Select all elements with class = "mobile-menu"

// If elements selected > 1

// Create mobile container

// height: 88%

// Create nav element

// bg color: rgba(black transparent)

// width: 100vw

// height: 10%

// display: flex

// justify-content: space-around

// align-items: center

// position: absolute

// bottom: 100vh

// For all selected elements

// Get id

// Style elements
// display: flex

// width: 100vw

// height: 100%

// Make nav bar link
// Create anchor element

// display: flex

// flex-direction: column

// width: 20%

// Get svg as id + .svg

//

// -------------- Controller --------------

//get mobile pages
const pages = document.querySelectorAll(".mobile-page");
// Get menu items
const buttons = document.querySelectorAll(".mobile-menu > button");
// Get mobile container
const sliderWindow = document.querySelector("#mobile-container");
// Get frame
const frame = document.querySelector("#mobile-frame");
// Get frame width

// For each menu item
// Add listener to set style left
buttons.forEach((item, i) => {
  item.addEventListener("click", () => {
    const frameWidth = window.getComputedStyle(frame).width.slice(0, -2);
    // Return style.left with slider counter * frame width and increment counter
    buttons.forEach((button) => button.classList.remove("active"));
    item.classList.add("active");
    sliderWindow.style.left = -i * 100 + "vw";
  });
});
