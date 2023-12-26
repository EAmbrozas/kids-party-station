document.addEventListener('DOMContentLoaded', function () {
    var topRight = document.querySelector('.top-right');
    var bottomLeft = document.querySelector('.bottom-left');

    function floatAround(element) {
        setInterval(function () {
            var x = Math.random() * 10 - 5;
            var y = Math.random() * 10 - 5; 
            element.style.transform = `translate(${x}px, ${y}px)`;
        }, 800);
    }

    floatAround(topRight);
    floatAround(bottomLeft);
});