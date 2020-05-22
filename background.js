function randomButton(sites) {
    var index = Math.floor(Math.random()*sites.length);
    chrome.windows.create({"url": 'http://www.pornhub.com' + sites[index], "incognito": true});
}