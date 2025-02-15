const No = document.getElementById("no"); 
const altura = 450; 
const largura = 400 ;
const musga = document.getElementById("musica");
const Si = document.getElementById("Si");
const h1 = document.getElementById("Texto");
const posicaoh1 = h1.getBoundingClientRect();
const posicaosi = Si.getBoundingClientRect();
const posicaono = No.getBoundingClientRect();
console.log(posicaoh1,);
console.log(posicaosi, posicaosi);


function getRandomPosition() {
    const positions = [
        { top: 50, left: 50 },
        { top: 100, left: 200 },
        { top: 150, left: 250 },
        { top: 200, left: 100 },
        { top: 250, left: 150},
        { top: 800, left: 275 },
        { top: 575, left: 100 },
        {top: 75, left: 75 },
        {top: 600, left: 150 },
        {top: 67, left: 200 },
        {top: 200, left: 200 },
        {top: 235, left: 285 },
        {top: 700, left: 100 },
        {top: 700, left: 50 },
        {top: 700, left: 150 },
        {top: 640, left: 200 },
        {top: 700, left: 200 },
        {top: 30, left: 100 },
        {top: 670, left: 260 },
        {top: 750, left: 50 },
        {top: 750, left: 150 },
        {top: 480, left: 200 },
        {top: 224, left: 25 },
        {top: 224, left: 175 },
    ];

    let randomPosition;
  
    randomPosition = positions[Math.floor(Math.random() * positions.length)];
    
    return randomPosition;
}

No.addEventListener("mouseover", function () {
    const newPosition = getRandomPosition();
    No.style.position = "absolute";
    console.log(newPosition);
    No.style.top = newPosition.top + "px";
    No.style.left = newPosition.left + "px";
});

No.addEventListener("click", function () { 
    const newPosition = getRandomPosition();
    console.log(newPosition);
    No.style.position = "absolute"; 
    No.style.top = newPosition.top + "px"; 
    No.style.left = newPosition.left+ "px"; 

}) 

 Si.addEventListener("click", function() { 
    window.location.href="Final.html";
})

window.addEventListener('DOMContentLoaded', function() {
    if (musga) {
        musga.play().then(() => {
            console.log('Reprodução automática iniciada com sucesso.');
        }).catch((error) => {
            console.error('Reprodução automática foi bloqueada.', error);
        });
    }
});


