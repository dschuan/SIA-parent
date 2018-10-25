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
    return "Hello, World!"


@app.route('/post-image/<plane_id>', methods=['POST'])
def postImage(plane_id):
    print(plane_id)
    names = list(request.files.keys())

    filesToProcess = []
    for name in names:

        fileImg  = request.files[name]
        filename = request.files[name].filename
        print('typeis ********************',type(fileImg))
        im = Image.open(fileImg)
        nameSaved = './photoDump/' + str(time.time()).replace('.', '')[-3:] + filename
        print(nameSaved)
        im.save(nameSaved)
        filesToProcess.append(nameSaved)

    results = classify.classifyFromPathList(filesToProcess)
    print(results)
    return json.dumps(results)


from werkzeug.datastructures import FileStorage
@app.route('/updateImages', methods=['GET'])
def updateImages():
    allResults = []
    photoDump = './photoDump'
    for name in listdir(photoDump):

        filename = photoDump + '/' + name
        with open(filename, "rb") as f:
            b = f.read()
            image = bytearray(b)
        results = classify.classifyFromPathList([filename])
        results[0]['image'] = str(image)
        allResults.append(results)

    return json.dumps(results)



from io import BytesIO
@app.route('/sendImage', methods=['POST'])
def get_image():
    if request.method =='POST':
        print(list(request.files.keys()))
        names = list(request.files.keys())
        for name in names:
            print('received')
            fileImg  = request.files[name].stream.read()
            filename = request.files[name].filename
            print(type(fileImg))
            im = Image.open(BytesIO(fileImg))
            nameSaved = './photoDump/' + str(time.time()).replace('.', '')[-3:] + filename
            print(nameSaved)
            im.show()
            im.save(nameSaved)

    return 'success'


if __name__ == '__main__':
    app.run(debug=True, port=8001)
