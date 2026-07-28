// Show the "back to top" button only once the user has scrolled down,
// or when they reach the bottom of the page.
(function () {
    var button = document.querySelector(".back-to-top");
    if (!button) return;

    var SHOW_AFTER_PX = 600;
    // Small fudge factor so sub-pixel scroll rounding still counts as "at
    // the bottom" of the page.
    var BOTTOM_FUDGE_PX = 4;
    var ticking = false;

    function update() {
        var scrollY = window.scrollY || window.pageYOffset;
        var pageHeight = document.documentElement.scrollHeight;
        var isScrollable = pageHeight > window.innerHeight;
        var atBottom = isScrollable && window.innerHeight + scrollY >= pageHeight - BOTTOM_FUDGE_PX;
        button.classList.toggle("is-visible", scrollY > SHOW_AFTER_PX || atBottom);
        ticking = false;
    }

    window.addEventListener("scroll", function () {
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    }, { passive: true });

    update();
})();
