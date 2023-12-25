window.onload = function() {
    const snowflakeContainer = document.getElementById('snowflake-container');

    // Create snowflakes
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄'; // Snowflake character
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Randomize speed
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';

        snowflakeContainer.appendChild(snowflake);

        // Remove snowflake after it falls
        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

        // Create Christmas tree
        const treeContainer = document.getElementById('christmas-tree-container');
        const tree = document.createElement('div');
        tree.classList.add('christmas-tree');
        tree.textContent = '🎄'; // Christmas tree emoji
        treeContainer.appendChild(tree);

            // Trigger animations after a delay
    setTimeout(() => {
        document.querySelectorAll('.animated-element').forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }, 1000); 

    var music = document.getElementById('background-music');
    var toggleButton = document.getElementById('toggle-music');

    toggleButton.addEventListener('click', function() {
        if (music.paused) {
            music.play();
            toggleButton.textContent = 'Pause Music';
        } else {
            music.pause();
            toggleButton.textContent = 'Play Music';
        }
    });

    var playButton = document.getElementById('toggle-music');
    if (playButton) {
        playButton.click(); 
    }

    // Generate multiple snowflakes
    setInterval(createSnowflake, 100);

    console.log("Script loaded successfully.");
};

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    // Randomize the horizontal start position
    balloon.style.left = Math.random() * 100 + 'vw';
    
    // Append the balloon to the container
    document.getElementById('greeting-container').appendChild(balloon);

    // Optional: Remove balloon after it falls
    setTimeout(() => {
        balloon.remove();
    }, 7000); // Adjust time to match animation duration

    // Randomize size
    const size = Math.random() * 20 + 15; // Random size between 15px and 35px
    balloon.style.width = size + 'px';
    balloon.style.height = size * 1.5 + 'px'; // Height is 1.5 times the width

    // Randomize color
    const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.backgroundColor = randomColor;
}

// Generate balloons at random intervals
setInterval(createBalloon, 1000); 

