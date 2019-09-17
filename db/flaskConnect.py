from flask import Flask, render_template, request
from flask_mysqldb import MySQL
app = Flask(__name__)


app.config['MYSQL_HOST'] = '10.5.29.7'
app.config['MYSQL_DB'] = 'ixhack'
app.config['MYSQL_USER'] = 'user'
app.config['MYSQL_PASSWORD'] = 'password'

mysql = MySQL(app)


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == "POST":
        details = request.form
        firstName = details['fname']
        lastName = details['lname']
        cur = mysql.connection.cursor()
        cur.execute("insert into scholarship (link, school, award_name, scholarship_provider, amount, value_description, criteria_notes) VALUES ('uwaterloo.ca/future-students/financing/scholarships', 'university of waterloo', 'Presidents Scholarship of Distinction', 'university of waterloo', 2000, '2000 Entrance Scholarship', 'TESTTESTTEST');")
        mysql.connection.commit()
        cur.close()
        return 'success'
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
