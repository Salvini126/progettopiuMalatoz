from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS
from flask_pymssql import pymssql  
from flask import pandas as pd


app = Flask(__name__)


# Per rispondere alle chiamate cross origin
CORS(app)

conn = pymssql.connect(server='213.140.22.237\SQLEXPRESS', user='salvini.matteo', password='xxx123##', database='salvini.matteo')

@app.route('/Docenti')
def get_data():
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM Docente")
    rows = cursor.fetchall()
    return jsonify(rows)



if __name__ == "__main__":
    
    app.run()