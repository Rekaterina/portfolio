const buttonSwitch = document.querySelector('.button-switch');
const buttonBack = document.querySelector('.button-back');
const frame = document.querySelector('.frame');

buttonSwitch.addEventListener('click', () => {
    frame.classList.toggle('mobile');
    frame.classList.toggle('desktop');
    buttonSwitch.innerHTML = buttonSwitch.innerHTML == 'Mobile' ? 'Desktop' : 'Mobile';
});

buttonBack.addEventListener('click', () => {
    history.back();
});

