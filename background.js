function randomButton(site) {
    chrome.windows.create({"url": site, "incognito": true});
}
