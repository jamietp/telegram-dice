// Function to simulate rolling the dice
function rollDice() {
    const dice = document.getElementById('dice');
    let counter = 0;

    // Animate the dice roll over time
    const interval = setInterval(() => {
        // Generate a random number between 1 and 6
        const randomNum = Math.floor(Math.random() * 6) + 1;

        // Update the dice image based on the random number
        dice.src = `images/dice${randomNum}.png`;

        // Apply a random rotation for each change to simulate rolling
        dice.style.transform = `rotate(${Math.random() * 360}deg)`;

        counter++;
        // Stop the rolling animation after a few iterations
        if (counter > 10) {
            clearInterval(interval);
        }
    }, 200);  // Change image every 200ms to simulate rolling
}

// Add event listener to the dice for rolling on tap/click
document.getElementById('dice').addEventListener('click', rollDice);


// Initialize Telegram WebApp
Telegram.WebApp.ready();

