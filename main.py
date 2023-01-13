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
# Annotation that allows the function to be hit at the specific URL.
@app.route("/")
# Generic Python functino that returns "Hello world!"
def index():
    return "Hello world!"

# Questa route effettua una find() su tutto il DB (si limita ai primi 100 risultati)
@app.route('/addresses', methods=['GET'])
def get_all_addresses():
    mil4326WKT = mongo.db.MilWKT4326
    output = []
    for s in mil4326WKT.find().limit(100):
        output.append(s['INDIRIZZO'])
    return jsonify({'result': output})

@app.route("/collegamneto")
    def getConnnesione():
      
    df = pd.read_sql_query('select * from Docente', conn)
    df

# Checks to see if the name of the package is the run as the main package.
if __name__ == "__main__":
    # Runs the Flask application only if the main.py file is being run.
    app.run()