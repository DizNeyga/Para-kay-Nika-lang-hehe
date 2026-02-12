const noBtn = document.getElementById('no-button');

// Bulletproof Jumping Logic
function moveButton() {
    noBtn.style.position = 'absolute';
    
    // Calculate the safe area (viewport size - button size - padding)
    const padding = 20;
    const maxWidth = window.innerWidth - noBtn.offsetWidth - padding;
    const maxHeight = window.innerHeight - noBtn.offsetHeight - padding;

    // Ensure it doesn't pick a negative number
    const randomX = Math.max(padding, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxHeight));

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents accidental clicks on mobile
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
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    let i = 0;
    const interval = setInterval(() => {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    
    setTimeout(() => {
        clearInterval(interval);
        document.body.style.backgroundColor = '#FADADD';
        if (callback) callback();
    }, 2000);
}

function displayCat() {
    const imageContainer = document.getElementById('image-container');
    const catImage = new Image();
    catImage.src = 'cat.gif'; // MUST match your file name exactly
    catImage.alt = 'Cat';
    catImage.onload = () => imageContainer.appendChild(catImage);
}

function displayCatHeart() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';
    const catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif'; // MUST match your file name exactly
    catHeartImage.alt = 'Cat Heart';
    
    catHeartImage.onload = () => { 
        imageContainer.appendChild(catHeartImage); 
        const msgContainer = document.getElementById('message-container');
        msgContainer.style.display = 'block';
        msgContainer.innerHTML = '<h2 style="font-family: \'Sacramento\', cursive; font-size: 40px; color: #FB607F; margin-top: 20px;">Yay! Best decision ever! 🥰💖✨<br><span style="font-size: 24px;">No pressure, okay? Just tell me if you want to be my valentine.</span></h2>';
    };
}

displayCat();

