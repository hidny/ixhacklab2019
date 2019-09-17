sudo apt-get update

sudo apt-get install mysql-server

sudo apt install mysql-client-core-5.7

sudo mysql_secure_installation utility

sudo mysql -padmin

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



mysql> select * from scholarship;
+-----------------------------------------------------+------------------------+---------------------------------------+------------------------+-------+---------------------------+-----------------------------------+------------+----------+-----------------+----------------+------------------+-----------+
| url                                                 | school                 | scholarship_name                      | scholarship_provider   | value | value_description         | criteria_notes                    | award_type | deadline | type_of_student | level_of_study | number_of_awards | renewable |
+-----------------------------------------------------+------------------------+---------------------------------------+------------------------+-------+---------------------------+-----------------------------------+------------+----------+-----------------+----------------+------------------+-----------+
| uwaterloocascholarships                             | university waterloo    | Presidentstinction                    | NULL                   |  NULL | NULL                      | NULL                              | NULL       | NULL     | NULL            | NULL           |             NULL | NULL      |
| uwaterloo.ca/future-students/financing/scholarships | university of waterloo | Presidents Scholarship of Distinction | university of waterloo |  2000 | 2000 Entrance Scholarship | Early May admission average of 95 | NULL       | NULL     | NULL            | NULL           |             NULL | NULL      |
+-----------------------------------------------------+------------------------+---------------------------------------+------------------------+-------+---------------------------+-----------------------------------+------------+----------+-----------------+----------------+------------------+-----------+
2 rows in set (0.00 sec)




