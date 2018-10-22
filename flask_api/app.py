#!flask/bin/python

from flask import Flask, jsonify, request, Response
import json
from flask_cors import CORS
from PIL import Image
import time
import classify
app = Flask(__name__)
CORS(app)


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


@app.route('/post-image/<plane_id>', methods=['POST'])
def postImage(plane_id):
    print(plane_id)
    names = list(request.files.keys())
    filesToProcess = []
    for name in names:

        fileImg  = request.files[name]
        filename = request.files[name].filename
        print(str(fileImg))
        im = Image.open(fileImg)
        im.show()
        nameSaved = './photoDump/' + str(time.time()).replace('.', '')[-3:] + filename
        print(nameSaved)
        im.save(nameSaved)
        filesToProcess.append(nameSaved)

    results = classify.classifyFromPathList(filesToProcess)
    print(results)
    return json.dumps(results)

if __name__ == '__main__':
    app.run(debug=True)
