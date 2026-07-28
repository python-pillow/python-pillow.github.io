// Show the "back to top" button only once the user has scrolled down,
// or when they reach the bottom of the page.
(function () {
    var button = document.querySelector(".back-to-top");
    if (!button) return;

    var SHOW_AFTER_PX = 600;
    var ticking = false;

    function update() {
        var scrollY = window.scrollY || window.pageYOffset;
        var atBottom = window.innerHeight + scrollY >= document.documentElement.scrollHeight - 4;
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
