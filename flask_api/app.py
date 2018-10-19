#!flask/bin/python

from flask import Flask,jsonify
from flask_cors import CORS
from pymongo import MongoClient

client = MongoClient()
mongo = client.python_web

app = Flask(__name__)
CORS(app)

def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    if request.method == 'OPTIONS':
        response.headers['Access-Control-Allow-Methods'] = 'DELETE, GET, POST, PUT'
        headers = request.headers.get('Access-Control-Request-Headers')
        if headers:
            response.headers['Access-Control-Allow-Headers'] = headers
    return response

app.after_request(add_cors_headers)


@app.route('/')
def index():
    return "Hello, World!"

@app.route('/get-param1/<int:plane_id>', methods=['POST'])
def retrieveFoodInfo(plane_id):
    if plane_id != 1:
        abort(404)
    return(jsonify({"empty": 15, "half": 15, "full": 70}))

if __name__ == '__main__':
    app.run(debug=True)
