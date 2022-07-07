# https://www.w3schools.com/tags/ref_urlencode.asp


from bs4 import BeautifulSoup
import requests
import re
from urllib.parse import unquote


def get_soup(URL):
	base_URL = URL.split("/FTP")[0]
	r = requests.get(URL)
	return BeautifulSoup(r.content, 'html.parser'), base_URL


def get_obj(soup, base_URL):
	temp = soup.find_all('a',{'href': re.compile(r"/FTP-*")})
	return [ {'title': x.text , 'link': base_URL + x['href']} for x in temp]

def get_name(URL):
	return " ".join(unquote(URL).split("/")[-3:])

def write_playlist(filename, data):

	with open(filename,"w") as file:
		file.write("#EXTM3U\n")

		for temp in data:
			file.write("#EXTINF:3244," + temp['title'] + "\n")
			file.write(temp['link'] + "\n")


# URL = "http://server2.ftpbd.net/FTP-2/English%20Movies/1999/8MM%20%281999%29%20BluRay%201080p/"
# URL = "http://server4.ftpbd.net/FTP-4/English%20%26%20Foreign%20TV%20Series/Daredevil%20%28TV%20Series%202015-2018%20%29/720%20%5BDual%20Audio%5D/Season%201%20%5BHindi%20%20%2B%20English%5D%20720p/"
URL = "http://server4.ftpbd.net/FTP-4/English%20%26%20Foreign%20TV%20Series/Westworld%20%28TV%20Series%202016%20%29/Season%201%20720p/"

filename = get_name(URL)
soup, base_URL = get_soup(URL)
obj = get_obj(soup, base_URL)
write_playlist( filename + ".m3u", obj)