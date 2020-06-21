function randomButton(sites) {
    getSites();
    var index = Math.floor(Math.random()*sites.length);
    chrome.windows.create({"url": 'http://www.pornhub.com' + sites[index], "incognito": true});
}

function getSites() {
    fetch('http://vd20.pythonanywhere.com/randomsites')
    .then(function (response) {
        return response.json(); // But parse it as JSON this time
    })
    .then(function (json) {
        console.log('GET response as JSON:');
        console.log(json); // Here’s our JSON object
    })
}