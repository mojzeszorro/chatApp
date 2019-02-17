from flask import Flask, render_template, request, redirect
import requests
from flask_socketio import SocketIO, emit

app=Flask(__name__)
app.config["SECRET_KEY"] = "VERYNOTSECRETKEY"
socketio = SocketIO(app)

@app.route("/", methods=["GET","POST"])
def index():
    return render_template("index.html")
@socketio.on('message')
def send(msg):
  msg=request.form.get('username')
  emit("send_msg", {"msg":msg},broadcast=True)

if __name__ == '__main__':
  socketio.run(app)