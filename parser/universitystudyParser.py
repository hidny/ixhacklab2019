#!/usr/bin/env python3

from urllib.request import urlopen
from bs4 import BeautifulSoup
from selenium import webdriver
import pymysql


BASE_URL = 'https://scholarships.universitystudy.ca/scholarships/?pg_scholarships='


def getSoup(link):
    page = urlopen(link)
    soup = BeautifulSoup(page, 'html.parser')
    return soup

# Open database connection
db = pymysql.connect('10.5.29.7', 'ixhack', 'user', 'password')

# prepare a cursor object using cursor() method
cursor = db.cursor()

# Parse html into scholarship info
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
        if(deadLine != "Closed"):
            provider = sidebarContent[0].text.strip()
            value = sidebarContent[1].text.strip()
            deadLine = sidebarContent[3].text.strip()
            title = awardSoup.find('h1', attrs={'class': 'entry-title'}).text.strip()
            print("title: {}".format(title))
            print("link: {}".format(link))
            print("deadline: {}, provider: {}, value: {}".format(deadLine, provider, value))

            sidebarField = awardSoup.find('div',attrs={'class':'info-set'})
            field = sidebarField.find('li')
            field = field.text.strip()
            print("field: {}".format(field))

            # Prepare SQL query to INSERT a record into the database.
            sql = "INSERT INTO scholarship \
                (link, school, award_name, amount, deadline, field_of_study) \
                VALUES ('%s', '%s', '%s', '%d', '%s', '%s')" % \
                (link, provider, title, value, deadLine, field)
            #    VALUES ('%s', '%s', '%s', '%s', '%d', \
            #        '%s', '%s', '%s', '%s', '%s', '%s', \
            #            '%d', '%d', '%s' )" % \
            try:
                # Execute the SQL command
                cursor.execute(sql)
                # Commit your changes in the database
                db.commit()
            except:
                # Rollback in case there is any error
                db.rollback()

            j = j+1
            print()
        if j > 100:
            break

print("{}/{}".format(j, total))

# disconnect from server
db.close()
