document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('button').addEventListener("click", clickHandler);
});

function clickHandler(e) {
    setTimeout(randomButton(), 1000);
}

function randomButton() {
    chrome.extension.getBackgroundPage().openRandomSite();
}