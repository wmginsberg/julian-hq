from flask import Flask, current_app


# Instantiate a Flask app 
app = Flask(__name__) 

# Program catch-all for routes to send the static index.html file to the current app 
# @app.route('/', defaults={'path': ''}) 
# @app.route('/<path:path>') 
@app.route('/') 
@app.route('/view1') 
@app.route('/view2') 
@app.route('/view3') 
def index(): 
    return current_app.send_static_file('static/index.html') 