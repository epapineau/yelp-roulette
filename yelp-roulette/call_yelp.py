# Import dependencies
import time
import json
import random
import requests
import pandas as pd
import datetime as dt
from config import auth, key


def chooseAtRandom(searchLat, searchLon):
    # Authorize to yelp
    headers = {"Authorization":"Bearer " + auth}
    plusHour = dt.datetime.now() + dt.timedelta(hours = 1)
    plusHour = time.mktime(plusHour.timetuple())
    plusHour = int(plusHour)
    walkingDistance = 1600  # 1 mile = 1609.34 meters

    yelpURL = f"https://api.yelp.com/v3/businesses/search?latitude={searchLat}&longitude={searchLon}&open_at={plusHour}&radius={walkingDistance}&term=restaurants&limit=50"
    nearbyOptions = requests.get(yelpURL, headers = headers).json()

    # Test response
    if(nearbyOptions['total'] == 0):
        return {'image_url': '', 'name': 'No Restaurants', 'location': 'test'}
    else:
        return nearbyOptions['businesses'][random.randrange(len(nearbyOptions['businesses']))]