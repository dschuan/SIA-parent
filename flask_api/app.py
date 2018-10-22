#!flask/bin/python
from flask import Flask, jsonify, session, request
from bson.objectid import ObjectId
from flask_cors import CORS
from pymongo import MongoClient



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

@app.route('/retrieveFoodInfo/<flight_num>', methods=['GET'])
def retrieveFoodInfo(flight_num):

    flight = mongo.flights.find_one({'flight_num':flight_num})
    print(flight)

    if flight is None:
        return "Unsuccessful, food information for your flight number does not exist in our database."
    else:
        return(jsonify(plane))


if __name__ == '__main__':
    app.run(debug=True)
