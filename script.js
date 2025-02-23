document.getElementById("spinButton").addEventListener("click", function() {
    let wheel = document.getElementById("wheel");

    let randomDegree = 1800 + Math.floor(Math.random() * 360); // Ensures multiple full spins
    wheel.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.83, 0.67)"; // Easing effect
    wheel.style.transform = `rotate(${randomDegree}deg)`;
});
