# -*- coding:: utf-8 -*-
"""
Created on Mon May 25 10:48:11 2022
@author: AlejoFlorez0
"""

from flask import Flask
from jose import jwt
from flask import request
import os

app = Flask(__name__)

@app.route("/")
def index():
    return "<h1>APH - Universidad de Caldas</h1>"

@app.route("/createToken")
def createToken():
    name = request.args.get('name');
    personId = request.args.get('nroDocument');
    rolId = request.args.get('rolId');
    
    try:
        secretKey = os.environ.get("JWT_SECRET_KEY");
        token = jwt.encode({'name': name,'id':personId,'rolId':rolId}, secretKey, algorithm='HS256')
        # return {"response":"OK","token":token}
        return token
    except Exception as e:
        return ""

@app.route("/validateToken")
def validateToken():
    token = request.args.get('token');
    _rolId = request.args.get('rolId');
    
    try:
        secretKey = os.environ.get("JWT_SECRET_KEY");
        token = jwt.decode(token, secretKey, algorithms=['HS256'])
        
        if token["rolId"] == _rolId:
            return "True"
        else:
            return "False"
        
    except Exception as e:
        return "False"

if __name__ == '__main__':
    app.run(host='localhost',port=5001)
    