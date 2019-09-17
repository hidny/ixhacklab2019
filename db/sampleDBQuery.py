#sudo apt install python-pip
#python -m pip install mysql-connector 
#python sampleDBQuery.py

import mysql.connector
from mysql.connector import Error

try:
    #connection = mysql.connector.connect(host='localhost',
    #                                     database='ixhack',
    #                                     user='black',
    #                                     password='hack')
    connection = mysql.connector.connect(host='10.5.29.7',
                                         database='ixhack',
                                         user='user',
                                         password='password')
    if connection.is_connected():
        db_Info = connection.get_server_info()
        print("Connected to MySQL Server version ", db_Info)
        cursor = connection.cursor()
        cursor.execute("select database();")
        record = cursor.fetchone()
        print("Your connected to database: ", record)
    
    mySql_select_query = """select * from scholarship;"""
    
    cursor = connection.cursor()
    result = cursor.execute(mySql_select_query)
    print("Scholarship Table created successfully ")
 
    records = cursor.fetchall()
    print("Total number of rows in scholarship is: ", cursor.rowcount)

    print("\nPrinting each record")
    for row in records:
        print("url = ", row[0], )
        print("school = ", row[1])
        print("scholarship_name  = ", row[2])
        print

    #Sample insert: from https://pynative.com/python-mysql-insert-data-into-database-table/
    # mySql_insert_query = """INSERT INTO Laptop (Id, Name, Price, Purchase_date) 
    #                       VALUES 
    #                       (1, 'Lenovo ThinkPad P71', 6459, '2019-08-14') """

    #cursor = connection.cursor()
    #result = cursor.execute(mySql_insert_query)
    #connection.commit()
    #print("Record inserted successfully into Laptop table")

except mysql.connector.Error as error:
    print("Failed to create table in MySQL: {}".format(error))
finally:
    if (connection.is_connected()):
        cursor.close()
        connection.close()
        print("MySQL connection is closed")
