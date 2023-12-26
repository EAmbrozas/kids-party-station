const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');
const circle4 = document.getElementById('circle4');
let angle = 0;

function animate() {
  angle = (angle + 1) % 360;
  circle1.style.transform = `translateX(-50%) rotate(${angle}deg) translateX(100px)`;
  circle3.style.transform = `translateX(-50%) rotate(${angle}deg) translateX(100px)`;
  circle2.style.transform = `translateX(-50%) rotate(${360 - angle}deg) translateX(100px)`;
  circle4.style.transform = `translateX(-50%) rotate(${360 - angle}deg) translateX(100px)`;
  requestAnimationFrame(animate);
}

animate();
