// JavaScript Document

$(document).ready (function() {

    var curLoc = $("#active");
    var prevLoc;

    $(".op").click (function () {
        prevLoc = curLoc;
        curLoc = $(this).next();
        changeActive(prevLoc, curLoc);
    });
    
});

function changeActive(prevLoc, curLoc) {
    curLoc.attr("id", "active");
    prevLoc.removeAttr("id");
}