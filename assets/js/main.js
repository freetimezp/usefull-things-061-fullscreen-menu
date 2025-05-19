
let tl = new TimelineMax({ paused: true });

tl.to(".nav-container", 1, {
    left: 0,
    ease: Expo.easeInOut
});

tl.staggerFrom(".menu > div", 0.8, {
    y: 100,
    opacity: 0,
    ease: Expo.easeInOut
}, "0.1", "-=0.4");

tl.staggerFrom(".socials", 1.8, {
    y: 100,
    opacity: 0,
    ease: Expo.easeOut
}, "0.4", "-=0.6");

tl.reverse();

$(document).on("click", ".menu-open", function () {
    tl.reversed(!tl.reversed());
});
$(document).on("click", ".menu-close", function () {
    tl.reversed(!tl.reversed());
});









