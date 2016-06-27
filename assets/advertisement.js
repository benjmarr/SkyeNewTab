// Copyright Benjamin Developments (c) 2016 - All rights reserved

var defaultAdvert = "Want to advertise right here on Skye New Tab for free?! Contact <a href='mailto:benjaminandyy@gmail.com'>benjaminandyy@gmail.com</a> for information. We look forward to hearing from you!";
var haveAdvert = false;
var advertMsg = "advertisement_message_here";
var advertWeb = "https://twitter.com/Ben_AndyMC/status/747069137596219392";

styleOpacity(15000, "adText", "1");

if (haveAdvert) {
  innerHTML("adText", advertMsg);
} else {
  innerHTML("adText", defaultAdvert);
};
