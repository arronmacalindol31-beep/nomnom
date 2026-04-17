// Floating planets effect
function createPlanet() {
    const planet = document.createElement("div");

    planet.classList.add("planet");
    document.body.appendChild(planet);

    const size = Math.random() * 50 + 20;
    planet.style.width = size + "px";
    planet.style.height = size + "px";

    planet.style.left = Math.random() * window.innerWidth + "px";
    planet.style.top = window.innerHeight + "px";

    planet.style.background = `radial-gradient(circle, #${Math.floor(Math.random()*16777215).toString(16)}, #000)`;

    planet.style.position = "absolute";
    planet.style.borderRadius = "50%";
    planet.style.opacity = "0.7";

    // Animation
    planet.animate([
        { transform: "translateY(0px)" },
        { transform: "translateY(-100vh)" }
    ], {
        duration: 10000 + Math.random() * 5000,
        easing: "linear"
    });

    setTimeout(() => {
        planet.remove();
    }, 15000);
}

// Generate planets continuously
setInterval(createPlanet, 1500);


// Button click glow effect
document.querySelector("button").addEventListener("click", () => {
    document.body.style.background = "radial-gradient(circle, #1a1aff, #000)";
    
    setTimeout(() => {
        document.body.style.background = "radial-gradient(circle at bottom, #0b0c2a, #000)";
    }, 500);
});