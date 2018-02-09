/*eslint-env jquery*/
/*global  $, window*/
$(function () {
    "use strict";
    var carouselList = $("#carousel ul");
    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first"),
            lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
    }
    function changeSlide() {
        carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide);
    }
    window.setInterval(changeSlide, 3000);
    
});