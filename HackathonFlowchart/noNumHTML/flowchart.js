// JavaScript Document

$(document).ready (function() {

    var curLoc = document.getElementById("active");
    var prevLoc;

    $(".op").click (function () {
        prevLoc = curLoc;
        curLoc = $(".op").next();
        changeActive(prevLoc, curLoc);
    });
    
});

function changeActive(prevLoc, curLoc) {
    prevLoc.removeAttribute("id");
    curLoc.attr("id", "active");
}

/*
onclick op1
curLoc becomes prevLoc
.ques becomes curLoc
remove .active from prevLoc
add .active class to curLoc
*/