from bs4 import BeautifulSoup
import urllib.request
import json

url = 'https://www.pornhub.com/playlist/154702881'
page = urllib.request.urlopen(url)
soup = BeautifulSoup(page, 'html.parser')

videosTiles = soup.find_all("a", class_="fade")

with open('sites.json') as json_file:
    sites = json.load(json_file)

for video in videosTiles:
    sites.append(video.get("href"))

with open('sites.json', 'w') as json_file:
    json.dump(sites, json_file)
