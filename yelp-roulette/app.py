from flask import Flask, render_template
from call_yelp import chooseAtRandom

# Initialize flask app
app = Flask(__name__)

# Home Route
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_location')
def getCoords():
    return render_template('loc-request.html')

@app.route('/choice/<lat>/<lon>')
def getRestaurant(lat, lon):
    selection = chooseAtRandom(lat, lon)
    return render_template('display-choice.html', selection = selection)

# Debugger on
if __name__ == "__main__":
    app.run(debug = True)