
from bs4 import BeautifulSoup
import requests
import re
from urllib.parse import unquote
import json

class Crawl_FTP:

	def __init__(self, URL):

		self.URL = URL
		self.base_URL = URL.split("/FTP")[0]	
		self.data = []

	def get_soup(self, URL):
		r = requests.get(URL)
		return BeautifulSoup(r.content, 'html.parser')

	def get_obj(self, soup):
		temp = soup.find_all('a',{'href': re.compile(r"/FTP-*")})
		return [ {'title': x.text , 'link': self.base_URL + x['href']} for x in temp]

	def dig_down(self, soup):
		
		obj = self.get_obj(soup)

		for i in obj:
			temp = i['link'][-5:]
			
			if "." in temp:
				# l = len(temp.split(".")[1])
				# if l == 3:
				if ".mp4" in temp or ".mkv" in temp or ".avi" in temp:
					# self.data["data"].append(i)
					self.data.append(i)
			else:
				temp_soup = self.get_soup(i['link'])
				self.dig_down(temp_soup)

	def save_json(self):

		try:
			with open( 'hello.json', 'w') as f:
				json.dump(self.data, f)
				print("File saved successfully")
		except:
			print("Error saving file")

	def save_csv(self):

		try:
			with open( 'hello.csv', 'w') as f:
				
				f.write("Title, Link \n")

				for i in self.data:
					f.write(i['title'] + "," + i['link'] + "\n" )
			
			print("File saved successfully")
		except:
			print("Error saving file")

	def run(self):
		soup = self.get_soup(self.URL)
		self.dig_down(soup)
		# print(self.data)
		# self.save_json()
		self.save_csv()

# URL = "http://server2.ftpbd.net/FTP-2/"
URL = "http://server2.ftpbd.net/FTP-2/English%20Movies/"
# URL = "http://server2.ftpbd.net/FTP-2/English%20Movies/1996/"
# URL = "http://server2.ftpbd.net/FTP-2/English%20Movies/1996/A%20Time%20To%20Kill%20%281996%29%201080p/"
# URL = "http://server2.ftpbd.net/FTP-2/English%20Movies/1996/Before%20and%20After%20%281996%29/"

Crawl_FTP(URL).run()