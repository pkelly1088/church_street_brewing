/*
Name: Patrick Kelly
Course: ICT4510 Advanced Website Design and Management

This code checks to see if the page has changed positions in the Y direction. If the page is scrolled up, then it sets the top margin of the
nav bar to -137px, if the page is scrolled up, then it sets the margin to 0px. This hides the nav bar on scroll down and reveals it on scroll up
*/

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.marginTop = "0";
    } else {
        document.querySelector(".navbar").style.marginTop = "-137px";
    }
        prevScrollpos = currentScrollPos;
}