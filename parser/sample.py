#!/usr/bin/env python3

from urllib.request import urlopen
from bs4 import BeautifulSoup
print("hello 1")

quote_page = 'https://www.scholarshipscanada.com/Scholarships/ScholarshipSearch.aspx?type=ScholarshipName&s=toronto'
page = urlopen(quote_page)
soup = BeautifulSoup(page, 'html.parser')
name_box = soup.find('td', attrs={'class': 'Table-Standard-AwardName'})

name = name_box.text.strip() # strip() is used to remove starting and trailing
print("hello 2")
print(name)