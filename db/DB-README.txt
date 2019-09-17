
Install:

sudo apt-get update

sudo apt-get install mysql-server

sudo apt install mysql-client-core-5.7

sudo mysql_secure_installation utility

-------------

setup DB:

sudo mysql -uroot -padmin

#Avoid needing to use sudo:
#From: https://stackoverflow.com/questions/37239970/connect-to-mysql-server-without-sudo
CREATE USER 'black'@'localhost' IDENTIFIED BY 'hack';
GRANT ALL PRIVILEGES ON ixhack.* TO 'black'@'localhost';

create database ixhack;

use ixhack;

create table scholarship (
url varchar(255)  NOT NULL,
school varchar(100)  NOT NULL,
scholarship_name varchar(100) NOT NULL,
scholarship_provider varchar(100),
value MEDIUMINT(8),
value_description varchar(500),
criteria_notes varchar(500),
award_type varchar(100),
deadline varchar(100),
type_of_student varchar(100),
level_of_study varchar(100),
number_of_awards MEDIUMINT(8),
renewable bit
);



insert into scholarship (url, school, scholarship_name, scholarship_provider, value, value_description, criteria_notes) VALUES ('uwaterloo.ca/future-students/financing/scholarships', 'university of waterloo', 'Presidents Scholarship of Distinction', 'university of waterloo', 2000, '2000 Entrance Scholarship', 'Early May admission average of 95');


Test select:

mysql> select * from scholarship;
+-----------------------------------------------------+------------------------+---------------------------------------+------------------------+-------+---------------------------+-----------------------------------+------------+----------+-----------------+----------------+------------------+-----------+
| url                                                 | school                 | scholarship_name                      | scholarship_provider   | value | value_description         | criteria_notes                    | award_type | deadline | type_of_student | level_of_study | number_of_awards | renewable |
+-----------------------------------------------------+------------------------+---------------------------------------+------------------------+-------+---------------------------+-----------------------------------+------------+----------+-----------------+----------------+------------------+-----------+
| uwaterloocascholarships                             | university waterloo    | Presidentstinction                    | NULL                   |  NULL | NULL                      | NULL                              | NULL       | NULL     | NULL            | NULL           |             NULL | NULL      |
| uwaterloo.ca/future-students/financing/scholarships | university of waterloo | Presidents Scholarship of Distinction | university of waterloo |  2000 | 2000 Entrance Scholarship | Early May admission average of 95 | NULL       | NULL     | NULL            | NULL           |             NULL | NULL      |
+-----------------------------------------------------+------------------------+---------------------------------------+------------------------+-------+---------------------------+-----------------------------------+------------+----------+-----------------+----------------+------------------+-----------+
2 rows in set (0.00 sec)



----

REMOTE SQL ACCESS:
(using my virtual 10.5.29.7)

Step 0:
Install mysql client:
sudo apt install mysql-client-core-5.7

Step 1:
use VPN:
https://confluence.indexexchange.com/display/IT1/Connecting+to+the+Corporate+VPN

Step 2:
Find ip address to use:

Run command to get ip:
mysql -u userFAKE -h 10.5.29.7 -ppassword -D ixhack

Sample output:
mysql: [Warning] Using a password on the command line interface can be insecure.
ERROR 1045 (28000): Access denied for user 'userFAKE'@'10.3.63.233' (using password: YES)

sample IP: 10.3.63.233

Step 3:

Please send Michael your public keys and I'll add it to the DB server's authorized_keys
(It's the output of:
cat ~/.ssh/id_rsa.pub
)
AND 
Ask Michael to add permissions for you

What Michael will do:

Add your machine to authorized_keys:
in the DB server (10.5.29.7)
~/.ssh/authorized_keys

In DB Server (10.5.29.7):
Grant SQL permissions:
CREATE USER 'user'@'<IP>' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON ixhack.* TO 'user'@'<IP>' IDENTIFIED BY 'password';

CREATE USER 'user'@'10.3.63.233' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON ixhack.* TO 'user'@'<IP>' IDENTIFIED BY 'password';

mysql -u user -h 10.5.29.7 -ppassword -D ixhack



