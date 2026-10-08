const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const mainCard = document.getElementById('main-card');
const successCard = document.getElementById('success-card');
const spacer = document.querySelector('.button-spacer');

const customModal = document.getElementById('custom-modal');
const btnModalClose = document.getElementById('btn-modal-close');

const btnSecretPhoto = document.getElementById('btn-secret-photo');
const photoModal = document.getElementById('photo-modal');
const btnPhotoClose = document.getElementById('btn-photo-close');

let esPrimeraVezNo = true;

// Posicionar botón NO en su lugar inicial
function posicionInicial() {
    const rect = spacer.getBoundingClientRect();
    btnNo.style.transform = `translate(${rect.left}px, ${rect.top}px)`;
}

// Función para mover el botón por toda la pantalla
function moverPorTodaLaPantalla() {
    const padding = 20;
    const btnWidth = btnNo.offsetWidth || 100;
    const btnHeight = btnNo.offsetHeight || 45;

    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    const randomX = Math.floor(Math.random() * (maxX - padding)) + padding;
    const randomY = Math.floor(Math.random() * (maxY - padding)) + padding;

    btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Evento al presionar el botón NO
btnNo.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (esPrimeraVezNo) {
        customModal.classList.remove('hidden');
        esPrimeraVezNo = false;
    } else {
        moverPorTodaLaPantalla();
    }
});

// Cerrar el modal del "Pulgosa"
btnModalClose.addEventListener('click', () => {
    customModal.classList.add('hidden');
    moverPorTodaLaPantalla();
});

// Posicionar al iniciar o redimensionar
window.addEventListener('load', posicionInicial);
window.addEventListener('resize', posicionInicial);

// Al presionar SÍ
btnYes.addEventListener('click', () => {
    mainCard.classList.add('hidden');
    btnNo.classList.add('hidden');
    successCard.classList.remove('hidden');

    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 }
        });
    }
});

// Abrir modal de la foto escondida
btnSecretPhoto.addEventListener('click', () => {
    photoModal.classList.remove('hidden');
});

// Cerrar modal de la foto escondida
btnPhotoClose.addEventListener('click', () => {
    photoModal.classList.add('hidden');
});