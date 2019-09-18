from flask import Flask, render_template, request
# from flask_mysqldb import MySQL
from flask_cors import CORS
from flask import jsonify
from flask import Response
import pymysql.cursors

import json

app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = '10.5.29.7'
app.config['MYSQL_DB'] = 'ixhack'
app.config['MYSQL_USER'] = 'user'
app.config['MYSQL_PASSWORD'] = 'password'

mysql = pymysql.connect(host='172.17.0.2',
                             user='root',
                             password='password123',
                             db='ixhack',
                             cursorclass=pymysql.cursors.DictCursor)

@app.route('/', methods=['GET', 'POST'])
def index():
    
    details = request.form
    #firstName = details['fname']
    #lastName = details['lname']
    cursor = mysql.cursor()

    mySql_select_query = "select * from scholarship;"
    result = cursor.execute(mySql_select_query)

    print("Scholarship Table created successfully ")

    #records = cursor.fetchall()
    #print("Total number of rows in scholarship is: ", cursor.rowcount)

    #print("\nPrinting each record")
    #for row in records:
    #   print("url = ", row[0], )
    #   print("school = ", row[1])
    #   print("scholarship_name  = ", row[2])
    #   print

    row_headers=[x[0] for x in cursor.description] #this will extract row headers
    rv = cursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))



    print("Done sql command")
    #mysql.connection.commit()
    cursor.close()

    return Response(json.dumps(json_data), mimetype='application/json')

if __name__ == '__main__':
    app.run()
