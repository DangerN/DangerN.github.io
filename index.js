const link = [...document.querySelectorAll('#ar-game-link')]
link.map(link=> link.addEventListener('click', event=>event.preventDefault()))
