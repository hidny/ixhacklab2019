#!/usr/bin/env python3

from urllib.request import urlopen
from bs4 import BeautifulSoup
from selenium import webdriver
import pymysql


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
        title = awardInfo[0]
        provider = awardInfo[1][8:]
        field = awardInfo[2][16:]
        value = amounts[i].text.strip()
        deadline = deadlines[i].text.strip()
        link = links[i]
        print("award name: {}".format(title))
        print("school: {}".format(provider))
        print("field of study: {}".format(field))
        print("amount: {}".format(value))
        print("deadline: {}".format(deadline))    
        print("link: {}".format(link))
        print()

        # Prepare SQL query to INSERT a record into the database.
        sql = "INSERT INTO scholarship \
            (link, school, award_name, amount, deadline, field_of_study) \
            VALUES ('%s', '%s', '%s', '%s', '%s', '%s')" % \
            (link, provider, title, value, deadline, field)
        try:
            # Execute the SQL command
            cursor.execute(sql)
            # Commit your changes in the database
            db.commit()
        except:
            # Rollback in case there is any error
            db.rollback()

    print("len: {}".format(len(awardNames)))


# Open database connection
db = pymysql.connect('10.5.29.7', 'user', 'password', 'ixhack')

# prepare a cursor object using cursor() method
cursor = db.cursor()

soup = getSoup('https://www.scholarshipscanada.com/Scholarships/ScholarshipSearch.aspx?type=ScholarshipName&s=toronto')
parse(soup)

# disconnect from server
db.close()
