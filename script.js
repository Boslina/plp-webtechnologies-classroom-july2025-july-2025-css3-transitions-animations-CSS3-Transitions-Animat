// Global variable
let animationCount = 0;

// Reusable function with parameter + return
function toggleAnimation(elementId, className) {
    const el = document.getElementById(elementId);
    el.classList.toggle(className);
    animationCount++; // modifies global variable
    return animationCount; // return updated value
}

// Function showing local vs global scope
function reportAnimationCount() {
    let message = "Animations triggered: " + animationCount; // uses global
    return message;
}

// Attach event
document.getElementById("animate").addEventListener("click", function() {
    // Call reusable function
    const count = toggleAnimation("box2", "animate");

    // Display result using return value
    document.getElementById("output").textContent = reportAnimationCount();
});

const bag = document.getElementById("bag");
const openBagButton = document.getElementById("openBag");
const closeBagButton = document.getElementById("closeBag");

// Reusable function to toggle modal visibility
function toggleBag(show) {
    if (show) {
        bag.classList.add("show");
    } else {
        bag.classList.remove("show");
    }
}

// Open on button click
openBagButton.addEventListener("click", () => toggleBag(true));

// Close on "X" click
closeBagButton.addEventListener("click", () => toggleBag(false));
