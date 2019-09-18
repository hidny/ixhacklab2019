#!/usr/bin/env python3

from urllib.request import urlopen
from bs4 import BeautifulSoup
from selenium import webdriver


BASE_URL = 'https://scholarships.universitystudy.ca/scholarships/?pg_scholarships='


def getSoup(link):
    page = urlopen(link)
    soup = BeautifulSoup(page, 'html.parser')
    return soup


def parse():
    j = 0
    total = 0
    
    for i in range(1, 156):
        url = BASE_URL + str(i)
        soup = getSoup(url) 

        awardNames = soup.find_all('tr')
        awardNames = awardNames[1:]

        for award in awardNames:
            total += 1
            link = award.find('a')['href']
            awardSoup = getSoup(link)

            sidebar = awardSoup.find('div',attrs={'class': 'box'})
            sidebarContent = sidebar.find_all('p')
            deadLine = sidebarContent[3].text.strip()
            if(deadLine != "Closed"):
                provider = sidebarContent[0].text.strip()
                value = sidebarContent[1].text.strip()
                print("deadline: {}, provider: {}, value: {}".format(deadLine,provider,value))

                sidebarField = awardSoup.find('div',attrs={'class':'info-set'})
                field = sidebarField.find('li')
                print("field: {}".format(field.text.strip()))
                
                j = j+1
                print()
            if j > 100:
                break
    print("{}/{}".format(j, total))


parse()