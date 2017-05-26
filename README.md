# Julian HQ

## Overview
This is a basic SPA to monitor the tank vitals for a vivarium. It will stream temperature, humidity, and light status from an Arduino/Raspberry pi, and will document feedings.
* The **website** is built with Polymer and Node.js/Express, with Firebase as a db and for static hosting. The data server is hosted on Heroku. 
* I am using a modified **Arduino Uno** that I built myself (so no particular brand), with a DHT22 sensor plugged directly into the board on 2, 5V, and GND. The sketches on Arduino are written in modified C/C++.
* I am using a **Raspberry Pi 3 Model B+** connected to the Pi through USB and communicating over Serial. The Raspberri Pi code is in Python. 


## Progress
### Done
* Dashboard page
* Stream realtime data from firebase
* Connect sensor to Arduino and write sketch
* Connect Arduino to Pi and write data transfer script
* Write server to accept data
* Send Pi data to server, save in firebase
* Food form page

### TODO
* [P0] Submit form into db
* [P0] Add more food options/images to the database
* [P1] Add graphs for temperature trends
* [P1] Service worker for food submissions
* [P2] Integrate security video streaming
* [P2] Change route strings
* [P2] Send a text if the temp drops
* [P2] Integrate buttons into Julian's tank, so he can send texts