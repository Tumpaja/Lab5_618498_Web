let originX = null;
let offsetX = 0;
let dragStarted = false;

function onDragStart(event) {
  originX = event.clientX;
  dragStarted = true;
  event.currentTarget.setPointerCapture(event.pointerId);
}

function onDragMove(event) {
  if (!dragStarted) {
    return;
  }
  event.preventDefault();
  const deltaX = event.clientX - originX;
  const translateX = offsetX + deltaX;
  event.currentTarget.style.transform = 'translateX(' +  translateX + 'px)';
}

function onDragEnd(event) {
  dragStarted = false;
  offsetX += event.clientX - originX;
}

const dragon = document.querySelector('img');
dragon.addEventListener('pointerdown', onDragStart);
dragon.addEventListener('pointerup', onDragEnd);
dragon.addEventListener('pointermove', onDragMove);
