// Import npm modules
//var client = require('./node_modules/twilio')('ACff1ac681b33572df5f79ebfe345cc371', 'd1e91c6aabb4864a8a4d5bb7f1994ee1');
var express = require('express');
var bodyParser = require('body-parser');

// Launch Express instance
var app = express();
app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  			extended: true
		}));

// Configure Firebase
var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyDrmstgzMqLGcrq7xpxuYCcTi0LzucVfF0",
    authDomain: "julian-hq.firebaseapp.com",
    databaseURL: "https://julian-hq.firebaseio.com",
    projectId: "julian-hq",
    storageBucket: "julian-hq.appspot.com",
    messagingSenderId: "635857217481"
  };
  firebase.initializeApp(config);

 

var user = firebase.auth().currentUser;
var port = process.env.PORT || 8080;

// Get a reference to the database service
var database = firebase.database();

// Initializing variables
var numbers = [];
var searchTexts = [];
var dict_of_texts = [];
var counter = 0;
var size = 0;

// Write data to db
function writeUserData(temp,hum,lightOn) {
  var date = Date();
  console.log(date);
  // var dbDate = parseDate(date);//.toJSON();//date.getYear() + "-" + date.getMonth() + "-" + date.getDate();
  var monthMap = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
  var s = date.split(' ');
  console.log(s);

  var dbDate = s[3] + '-' + monthMap[s[1]] + '-' + s[2] + ': ' + s[4];
  console.log(dbDate);
  var lightOff = !lightOn;
  var foods = {
  	p: 'Kingworms',
  	v1: 'Collard Greens',
  	v2: 'Butternut Squash',
  	v3: 'Strawberries'
  }
  firebase.database().ref('updates/' + dbDate).set({
    temp: temp,
    hum: hum,
    lightOn: lightOn,
    lightOff: lightOff,
    food: foods
  });

  firebase.database().ref('updates/current').set({
    temp: temp,
    hum: hum,
    lightOn: lightOn,
    lightOff: lightOff,
    food: foods
  });
}

console.log("Writing user data.");
writeUserData(100,51,false);
console.log("Write complete.");

function parseDate(date) {
	// Wed May 24 2017 07:57:50 GMT-0700 (PDT)
	
}
// // Set up Flickr API reference
// var Flickr = require("node-flickr"),
//     keys = {
//       api_key: "06b987a38cf03f2cc126be0ef9911978",
//       secret: "480cf5b5069d4f32"
//     };
// flickr = new Flickr(keys);

// // Request user data from database
// firebase.database().ref('/updates/').once('value').then(function(data) {
//    var obj = data.val();

//    for (var userKey in obj) {
//    		counter++;
//    		size++;
//    }
//    urls = new Array(size);
//    for (var userKey in obj) {
// 	    var myString = obj[userKey]['number'].toString()
// 	    var searchText = 'iguana';
// 	    if (obj[userKey]['searchText'] != null) {
// 	    	searchText = obj[userKey]['searchText']
// 	    }
// 	    var number = "+1" + myString.replace(/\D/g,'');
// 	    numbers.push(number);
// 	    searchTexts.push(searchText);
// 	}
// 	getPhotos(numbers,searchTexts);
// });



// // Bundle of content to send to user (number, url, and search text)
// function sendMessages(item) {
// 	var textNum = item['num'];
// 	var url = item['url'];
// 	var msg = "Here's your weekly " + item['st'] + " pic.";
// 	console.log("[" + textNum + "]   " + msg);
// 	console.log("        " + url);
// 	client.sendMessage( { to:textNum, from:'+14243206951', body:msg, mediaUrl:url}, function( err, data ) {});
// }
			

