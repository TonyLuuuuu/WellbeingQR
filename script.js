document.getElementById("spinButton").addEventListener("click", function() {
    let wheel = document.getElementById("wheel");

    let randomDegree = Math.floor(3600 + Math.random() * 360); // Ensures multiple full spins
    wheel.style.transform = `rotate(${randomDegree}deg)`;
});
