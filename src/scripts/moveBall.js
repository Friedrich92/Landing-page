const ball = document.getElementsByClassName('image-block__dynamic');

document.addEventListener('mousemove', (event) => {
    event.preventDefault();
    let cursorX = Math.floor(event.clientX/30);
    ball[0].style.transform = 'translate3d(' + cursorX + 'px' + ',' + (cursorX + 25) + 'px' + ',' + 0 + 'px' + ')';
})
