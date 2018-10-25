#!flask/bin/python

from flask import Flask, jsonify, request, Response, send_from_directory
import json
from flask_cors import CORS
from PIL import Image
import time
import classify
from os import listdir
from os.path import join
app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return "<img src='/static/044motion.jpg' />"


@app.route('/post-image/<plane_id>', methods=['POST'])
def postImage(plane_id):
    print(plane_id)
    names = list(request.files.keys())

    with open('db.json') as f:
        allResults = json.load(f)

    for name in names:

        fileImg  = request.files[name]
        filename = request.files[name].filename
        print('typeis ********************',type(fileImg))
        im = Image.open(fileImg)
        nameSaved = './static/' + str(time.time()).replace('.', '')[-3:] + filename
        print(nameSaved)
        im.save(nameSaved)

        url = nameSaved[1:]
        #classify the results
        results = classify.classifyFromPathList([nameSaved])
        results[0]['image'] = url
        allResults.append(results[0])

    with open('db.json', 'w') as fp:
        json.dump(allResults, fp)
    return json.dumps(allResults)


from werkzeug.datastructures import FileStorage
@app.route('/updateImages', methods=['GET'])
def updateImages():
    with open('db.json') as f:
        allResults = json.load(f)
    # photoDump = './photoDump'
    # for name in listdir(photoDump):
    #
    #     filename = photoDump + '/' + name
    #     with open(filename, "rb") as f:
    #         b = f.read()
    #         image = bytearray(b)
    #     results = classify.classifyFromPathList([filename])
    #     results[0]['image'] = str(image)
    #     allResults.append(results[0])

    return json.dumps(allResults)

import io
@app.route('/sendImage', methods=['POST'])
def get_image():
    if request.method =='POST':
        with open('db.json') as f:
            allResults = json.load(f)
        names = list(request.files.keys())
        for name in names:
            #first receive the file from the raspi
            print('received')
            fileImg  = request.files[name].read()
            filename = request.files[name].filename
            print(type(fileImg))
            im = Image.open(io.BytesIO(fileImg))
            nameSaved = './static/' + str(time.time()).replace('.', '')[-3:] + filename
            im.save(nameSaved)

            #host the file in static folder
            url = nameSaved[1:]
            #classify the results
            results = classify.classifyFromPathList([nameSaved])
            results[0]['image'] = url
            allResults.append(results[0])
        with open('db.json', 'w') as fp:
            json.dump(allResults, fp)
    return 'success'


if __name__ == '__main__':
    app.run(debug=True, port=8001)
