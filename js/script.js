const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let position = 0;

let isJumping = false;
function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }

    }
}
function jump() {
    isJumping = true;

    //animação do dinossauro
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            //descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            position += 20;
            dino.style.bottom = position + 'px';
        }

    }, 20);    
}
 // criar cactus
 function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';

        if(cactusPosition < 0 ) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if(position < 60 && cactusPosition < 60) {
            clearInterval(leftInterval);
            document.body.innerHTML = "<h1 class='game-over'>Game-Over!</h1>";
        } else {
         cactusPosition -= 10;
         cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}
createCactus();
document.addEventListener('keyup', handleKeyUp);