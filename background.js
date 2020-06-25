var cycleTime = 12 * 60 * 1000;
setInterval(openAtRandom, cycleTime);

function openAtRandom() {
    var randomTime = Math.random() * cycleTime;
    setTimeout(openRandomSite, randomTime);
}

function openRandomSite() {
    var sites = [];

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        site = JSON.parse(this.responseText);
        chrome.windows.create({"url": site, "incognito": true});
    }
    };
    xmlhttp.open("GET", "http://vd20.pythonanywhere.com/randomsite", true);
    xmlhttp.send();
}

