document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('button').addEventListener("click", clickHandler);
});

function clickHandler(e) {
    setTimeout(randomButton(), 1000);
}

function randomButton() {
    getSites();
    var sites = [];

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        sites = JSON.parse(this.responseText);
        chrome.extension.getBackgroundPage().randomButton(sites);
    }
    };
    xmlhttp.open("GET", "sites.json", true);
    xmlhttp.send();
}

function getSites() {
    fetch('/randomsites')
    .then(function (response) {
        return response.json(); // But parse it as JSON this time
    })
    .then(function (json) {
        console.log('GET response as JSON:');
        console.log(json); // Here’s our JSON object
    })
}