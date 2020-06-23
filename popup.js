document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('button').addEventListener("click", clickHandler);
});

function clickHandler(e) {
    setTimeout(randomButton(), 1000);
}

function randomButton() {
    var sites = [];

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        site = JSON.parse(this.responseText);
        chrome.extension.getBackgroundPage().randomButton(site);
    }
    };
    xmlhttp.open("GET", "http://vd20.pythonanywhere.com/randomsite", true);
    xmlhttp.send();
}