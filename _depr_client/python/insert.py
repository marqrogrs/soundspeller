import mysql.connector as mysql
from dotenv import load_dotenv
from pathlib import Path
import os

env_path = Path('..') / '.env'

load_dotenv(dotenv_path=env_path)

db = mysql.connect(
    host=os.getenv("host"),
    user=os.getenv("db"),
    password=os.getenv('password'),
    database=os.getenv("db")
)

cursor = db.cursor(buffered=True)

print(cursor)

def insert(table, *args, **kwargs):

        sql_insert = "insert into {0} ({1}) values (".format(table, ','.join(args))
        values = []
        tuple = ()

        for key, value in kwargs.items():
             data = ("{0}".format(value),)
             sql_insert += "%s,"
             tuple += data

        values.append(tuple)
        sql_insert = sql_insert[:-1]
        sql_insert += ")"

        cursor.executemany(sql_insert, values)
        db.commit()

        print(cursor.rowcount, "record insereted")


def update(table, column, value, condition_column, value_condition):
    sql = "UPDATE {0} SET {1} = '{2}' WHERE {3} = '{4}'".format(table,column,value, condition_column, value_condition)

    cursor.execute(sql)
    db.commit()

    print(cursor.rowcount, "record updated")
