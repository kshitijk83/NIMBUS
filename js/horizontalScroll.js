(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('gallery_grid').scrollLeft -= (delta*40); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('gallery_grid').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('gallery_grid').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById('gallery_grid').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('gallery_grid').attachEvent("onmousewheel", scrollHorizontally);
    }
})();