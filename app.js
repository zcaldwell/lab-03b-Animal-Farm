const dogImg = document.getElementById('dog');
const dogSound = document.getElementById('dog-sound');
const catImg = document.getElementById('cat');
const catSound = document.getElementById('cat-sound');
const horseImg = document.getElementById('horse');
const horseSound = document.getElementById('horse-sound');

dogImg.addEventListener('click', ()=>{
    dogSound.play();
});

catImg.addEventListener('click', () => {
    catSound.play();
});

horseImg.addEventListener('click', () => {
    horseSound.play();
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'h') {
        horseSound.play();}
    if (event.key === 'c') {
        catSound.play();}
    if (event.key === 'd') {
        dogSound.play();}
});
