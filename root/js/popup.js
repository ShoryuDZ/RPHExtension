document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('button').addEventListener("click", randomButton);
    timeSet();
});

function randomButton(e) {
    chrome.extension.getBackgroundPage().openRandomSite();
}

function timeSet() {
    var ct = new Date();
    var currentTime = ct.getTime();
    var duration = currentTime - chrome.extension.getBackgroundPage().getInstallTime();
    
    var seconds = Math.floor((duration / 1000) % 60);
    var minutes = Math.floor((duration / (1000 * 60)) % 60);
    var hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    var days = Math.floor((duration / (1000 * 60 * 60 * 24)));

    document.getElementById('timer').innerHTML = "Active for " + days + " days, " + hours + " hours, " + minutes + " minutes and " + seconds + " seconds.";
    setTimeout(timeSet, 500);
}