const noBtn = document.getElementById('no-button');

// Function to move the "No" button randomly
function moveButton() {
    noBtn.style.position = 'absolute';
    
    const padding = 20;
    const maxWidth = window.innerWidth - noBtn.offsetWidth - padding;
    const maxHeight = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.floor(Math.random() * (maxWidth - padding)) + padding;
    const randomY = Math.floor(Math.random() * (maxHeight - padding)) + padding;

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});

function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            document.getElementById('options').style.display = 'none';
            displayCatHeart(); 
        });
    }
}

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '#FADADD';
        if (callback) callback();
    }, 2000);
}

function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif'; // Uses your uploaded GIF
    catImage.alt = 'Cat';
    catImage.onload = function() { imageContainer.appendChild(catImage); };
}

function displayCatHeart() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif'; // Uses your second GIF
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function() { imageContainer.appendChild(catHeartImage); };
}

displayCat(); // Run the initial GIF load