#!flask/bin/python

from flask import Flask,jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/get-param1/<int:plane_id>', methods=['GET'])
def getparam1(plane_id):
    if plane_id != 1:
        abort(404)
    return(jsonify({"empty": 15, "half": 15, "full": 70}))

if __name__ == '__main__':
    app.run(debug=True)
