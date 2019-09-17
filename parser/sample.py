#!/usr/bin/env python3

from urllib.request import urlopen
from bs4 import BeautifulSoup

quote_page = 'https://www.scholarshipscanada.com/Scholarships/ScholarshipSearch.aspx?type=ScholarshipName&s=toronto'
page = urlopen(quote_page)
soup = BeautifulSoup(page, 'html.parser')

name_box = soup.find_all('td', attrs={'class': 'Table-Standard-AwardName'})

print("len: {}".format(len(name_box)))

for i in name_box:
	print(i.text.strip())
	print()

