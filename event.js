let originX = null;
let offsetX = 0;
let originY = null;
let offsetY = 0;
let dragStarted = false;

function onDragStart(event) {
  originX = event.clientX;
  originY = event.clientY;
  dragStarted = true;
  event.currentTarget.setPointerCapture(event.pointerId);
}

function onDragMove(event) {
  if (!dragStarted) {
    return;
  }
  event.preventDefault();
  const deltaX = event.clientX - originX;
  const deltaY = event.clientY - originY;
  const translateX = offsetX + deltaX;
  const translateY = offsetY + deltaY;
  event.currentTarget.style.transform = `translate(${translateX}px, ${translateY}px)`;
}

function onDragEnd(event) {
  dragStarted = false;
  offsetX += event.clientX - originX;
  offsetY += event.clientY - originY;
}

const dragon = document.querySelector('img');
dragon.addEventListener('pointerdown', onDragStart);
dragon.addEventListener('pointerup', onDragEnd);
dragon.addEventListener('pointermove', onDragMove);
