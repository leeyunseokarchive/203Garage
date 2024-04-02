document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
}, false);

var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
      event.stopImmediatePropagation()
    }
    lastTouchEnd = now;
}, false);