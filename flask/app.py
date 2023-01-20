from flask import Flask
from flask import jsonify
import pymssql

app = Flask(__name__)

conn = pymssql.connect(server='213.140.22.237\SQLEXPRESS', user='salvini.matteo', password='xxx123##', database='salvini.matteo')

@app.route('/Docenti')
def get_data():
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM Docente")
    rows = cursor.fetchall()
    return jsonify(rows)

@app.route('/Verifiche')
def get_data2():
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM VERIFICA")
    rows = cursor.fetchall()
    return jsonify(rows)

if __name__ == "__main__":
    
    app.run()