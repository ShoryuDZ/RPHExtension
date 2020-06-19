from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
import json

# Opens any url, returns soup of page
def openPage(url):
    hdr = {'User-Agent': 'Chrome/70.0.3538.77'}
    req = Request(url, headers=hdr)
    page = urlopen(req)
    return BeautifulSoup(page, "html.parser")

# Open Playlist Page
playListSoup = openPage('https://www.pornhub.com/playlist/154702881') 

# Find Number of Videos in the playlist
playlistTitle = playListSoup.find("div", class_="sectionWrapper clearfix").find("div", class_="usernameWrap clearfix").getText().split()
playlistVideos = 0
for word in playlistTitle:
    if (word.isdigit()):
        playlistVideos = int(word)
        break

# Create List of viewChunked URLs
numberOfPages = 1
if (playlistVideos % 50 == 0):
    numberOfPages = playlistVideos/50
else:
    numberOfPages = playlistVideos/50 + 1
pages = []
i = 0
while i < numberOfPages:
    pages.append("https://www.pornhub.com/playlist/viewChunked?id=154702881&offset=" + str(i*50) +"&itemsPerPage=50")
    i += 1

# Save all video links from pages
links = []
for page in pages:
    pageSoup = openPage(page)
    videos = pageSoup.find_all("span", class_="title")
    for video in videos:
        fullLink = video.find("a").get("href")
        linkParts = fullLink.split('&')
        links.append(linkParts[0])

# Save .json
with open('sites.json', 'w') as json_file:
    json.dump(links, json_file)
