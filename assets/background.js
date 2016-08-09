// Copyright Benjamin Developments (c) 2015 - All rights reserved

// Random background selection script
var backgroundNames = Array(121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120);
var imageUpdateDate = "Friday, 29<sup>th</sup> July 2016";
var backgroundNumber = function() {
  return backgroundNames[Math.floor(Math.random() * backgroundNames.length)];
};

// Set last background image update date in options & information menu
innerHTML("infoImgUpdt", imageUpdateDate);

// Setting background
var setBackID;
var setBack = function(id) {
  if (id === "random") {
    setBackID = backgroundNumber();
    backImageData();
    document.getElementById("header").style.backgroundImage = "url('assets/images/backgrounds/" + setBackID + ".jpg')";
  } else {
    setBackID = id;
    backImageData();
    document.getElementById("header").style.backgroundImage = "url('assets/images/backgrounds/" + setBackID + ".jpg')";
  };
};

// New background image function
var opChBkImgFnctn = function() {
  styleGrayscale(0, "header", "true");
  styleOpacity(100, "header", "0");
  styleOpacity(550, "header", "1");
  if (getCookie("opGryscl") === "false") {
    styleGrayscale(650, "header", "false");
  };
  setTimeout(function() {
    setBack("random");
  }, 500);
};
document.getElementById("opChBkImg").addEventListener("click", function() {
  opChBkImgFnctn();
}, false);

// Five minute background change
var newBackID;
var min;
var minNum;
setInterval(function() {
  min = new Date();
  minNum = min.getMinutes();
}, 1);
var checkBackgroundTimer;
var startBackgroundTimer = function() {
  checkBackgroundTimer = setInterval(function() {
    if (minNum === 00 || minNum === 05 || minNum === 10 || minNum === 15 || minNum === 20 || minNum === 25 || minNum === 30 || minNum === 35 || minNum === 40 || minNum === 45 || minNum === 50 || minNum === 55) {
      clearInterval(checkBackgroundTimer);
      setTimeout(function() {
        startBackgroundTimer();
      }, 60001);
      opChBkImgFnctn();
    };
  }, 2);
};
startBackgroundTimer();

// Background image information menu
var backImgInfo = function(imgID, imgAuth, imgAuthPro, imgAuthWeb) {
  if (main) {
    innerHTML("bkgrndImgInf1", imgAuth);
    innerHTML("bkgrndImgInf2", "<a target='_blank' href='" + imgAuthPro + "'>" + imgAuthPro + "</a>");
    innerHTML("bkgrndImgInf3", "<a target='_blank' href='https://unsplash.com/photos/" + imgID + "'>" + "https://unsplash.com/photos/" + imgID + "</a>");
    innerHTML("bkgrndImgInf4", "<a target='_blank' href='" + imgAuthPro + "/portfolio'>Click to see</a>");
  };
};
document.getElementById("infoBackgroundImage").addEventListener("click", function() {
  clearMenu("true");
  styleVisibility(1000, "bkgrndImgInf", "visible");
  styleOpacity(1000, "bkgrndImgInf", 1);
}, false);
document.getElementById("bkgrndImgInfclose").addEventListener("click", function() {
  clearMenu("true");
}, false);

// Background image data
var backImageData = function() {
  if (setBackID === 121) {
    backImgInfo("O85h02qZ24w", "Anders Jildén", "https://unsplash.com/@andersjilden");
  } else if (setBackID === 122) {
    backImgInfo("kVf7VRgg4p8", "Samuel Zeller", "https://unsplash.com/@samuelzeller");
  } else if (setBackID === 123) {
    backImgInfo("O0dEH-UPj68", "NASA", "https://unsplash.com/@nasa");
  } else if (setBackID === 124) {
    backImgInfo("MKLRMeKctI4", "Matt Benson", "https://unsplash.com/@mattgyver");
  } else if (setBackID === 125) {
    backImgInfo("hXOGHaGCtdA", "Aron Van de Pol", "https://unsplash.com/@aronvandepol");
  } else if (setBackID === 126) {
    backImgInfo("-sQ4FsomXEs", "Alexander Rotker", "https://unsplash.com/@alex_zandric");
  } else if (setBackID === 127) {
    backImgInfo("VZ07w73ta-k", "Mike Wilson", "https://unsplash.com/@mkwlsn");
  } else if (setBackID === 128) {
    backImgInfo("Sq7WPOjHGDs", "Loic Djim", "https://unsplash.com/@loic");
  } else if (setBackID === 129) {
    backImgInfo("xRbArjajH2o", "LoboStudio Hamburg", "https://unsplash.com/@lobostudiohamburg");
  } else if (setBackID === 130) {
    backImgInfo("TV2gg2kZD1o", "SpaceX", "https://unsplash.com/@spacex");
  } else if (setBackID === 111) {
    backImgInfo("U713MZX1x0w", "Drew Collins", "https://unsplash.com/@drewjohncollins");
  } else if (setBackID === 112) {
    backImgInfo("NF2K1dI3Gew", "Benny Jackson", "https://unsplash.com/@themightymerlin");
  } else if (setBackID === 113) {
    backImgInfo("Rdsc2L517iQ", "Roya Ann Miller", "https://unsplash.com/@royaannmiller");
  } else if (setBackID === 114) {
    backImgInfo("FgPGGFlY1gY", "Dan Carlson", "https://unsplash.com/@dan_carl5on");
  } else if (setBackID === 115) {
    backImgInfo("A0l8ZExLuwk", "Tim Marshall", "https://unsplash.com/@timmarshall");
  } else if (setBackID === 116) {
    backImgInfo("BfLyP-vPoOI", "Paul Gilmore", "https://unsplash.com/@paulgilmore_");
  } else if (setBackID === 117) {
    backImgInfo("rNcSTzp0Xv8", "Brian Erickson", "https://unsplash.com/@bw_erickson");
  } else if (setBackID === 118) {
    backImgInfo("gvLRWYcPEs4", "Phoebe Dill", "https://unsplash.com/@phoebe_dill");
  } else if (setBackID === 119) {
    backImgInfo("b2-fBVrfx0o", "Dominik Martin", "https://unsplash.com/@dominikmartin");
  } else if (setBackID === 120) {
    backImgInfo("9i9RquPtXsg", "Lionello DelPiccolo", "https://unsplash.com/@liodp");
  };
};

setBack("random");
