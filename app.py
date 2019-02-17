from flask import Flask, render_template, request, redirect
import requests
from flask_socketio import SocketIO, emit

app=Flask(__name__)
app.config["SECRET_KEY"] = "VERYNOTSECRETKEY"
socketio = SocketIO(app)

@app.route("/")
def index():
    return render_template("index.html")
if __name__ == '__main__':
  socketio.run(app)