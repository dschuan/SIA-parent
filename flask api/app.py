#!flask/bin/python

from flask import Flask,jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!"

@app.route('get-param1/<int:plane_id>', methods=['GET'])
def getparam1(plane_id):
    if plane_id not 1:
        abort(404)
    return(jsonify({'res': 'testing'}))

if __name__ == '__main__':
    app.run(debug=True)
