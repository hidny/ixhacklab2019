#!/usr/bin/env python3

from urllib.request import urlopen
from bs4 import BeautifulSoup
from selenium import webdriver


BASE_URL = 'https://www.scholarshipscanada.com'


def getSoup(link):
    page = urlopen(link)
    soup = BeautifulSoup(page, 'html.parser')
    return soup


def parse(soup):
    awardNames = soup.find_all('td', attrs={'class': 'Table-Standard-AwardName'})
    amounts = soup.find_all('td', attrs={'class': 'Table-Standard-Amount'})
    deadlines = soup.find_all('td', attrs={'class': 'Table-Standard-Deadline'})

    links = []

    for award in awardNames:
        link = BASE_URL + award.find('a')['href']
        scholarship = getSoup(link)
        link = scholarship.find('a', attrs={'class': 'iButton'}, string='More Info')['href']
        links.append(link)

    for i in range(len(awardNames)):
        awardInfo = awardNames[i].text.strip().split('\n')
        print("award name: {}".format(awardInfo[0]))
        print("school: {}".format(awardInfo[1][8:]))
        print("field of study: {}".format(awardInfo[2][16:]))
        print("amount: {}".format(amounts[i].text.strip()))
        print("deadline: {}".format(deadlines[i].text.strip()))    
        print("link: {}".format(links[i]))
        print()

    print("len: {}".format(len(awardNames)))


soup = getSoup('https://www.scholarshipscanada.com/Scholarships/ScholarshipSearch.aspx?type=ScholarshipName&s=toronto')
parse(soup)
