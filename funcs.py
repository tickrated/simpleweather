import requests
import json
import eel
from datetime import datetime

WEATHERAPI_KEY = '' # Change to your API key
API_URL = 'https://api.weatherapi.com/v1/'
images = ['/img/morning.png', '/img/day.png', '/img/sunset.png', '/img/night.png']

@eel.expose
def get_weather(location):
    payload = {'key': WEATHERAPI_KEY,
               'q': f'{location}'
               }
    response = requests.get(f'{API_URL}current.json', params=payload)
    response_json = json.loads(response.text)
    if response.status_code != 200:
        return False
    current_hours = datetime.strptime(response_json['location']['localtime'], '%Y-%m-%d %H:%M').hour
    background_image = ''
    if 5 <= current_hours < 12:
        background_image = images[0]
    if 12 <= current_hours < 17:
        background_image = images[1]
    if 17 <= current_hours < 21:
        background_image = images[2]
    else:
        background_image = images[3]

    data = {
        'country': response_json['location']['country'],
        'city': response_json['location']['name'],
        'temp': response_json['current']['temp_c'],
        'feelslike': response_json['current']['feelslike_c'],
        'condition': response_json['current']['condition']['text'],
        'icon': response_json['current']['condition']['icon'],
        'background': background_image
    }
    return data

def start_app():
    eel.init('www')
    eel.start('index.html', size=(400, 600), resizable=False)
