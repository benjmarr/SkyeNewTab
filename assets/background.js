// Copyright Benjamin Developments (c) 2016 - All rights reserved

//TODO Re-write this entire document.

// Random background selection script
var backgroundNames = Array(170, 171, 172, 173, 175, 176, 168, 169);
var imageUpdateDate = "Tuesday, 18<sup>th</sup> October 2016";
var backgroundNumber = function() {
  return backgroundNames[Math.floor(Math.random() * backgroundNames.length)];
};

// Set last background image update date in options & information menu
innerHTML("infoImgUpdt", imageUpdateDate);

// Setting background
var setBackID;
var setBack = function(id) {
  if (id === "random") {
    if (setBackID === "") {
      setBackID = backgroundNumber();
    } else {
      var x = backgroundNumber();
      setBackID = backgroundNumber();
      if (setBackID === x) {
        setBackID = backgroundNumber();
      };
    };
  } else {
    setBackID = id;
  };
  setTimeout(function() {
    document.getElementById("header").style.backgroundImage = "url('assets/images/backgrounds/" + setBackID + ".jpg')";
    backImageData();
  }, 50);
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
    if (minNum === 00 || minNum === 10 || minNum === 20 || minNum === 30 || minNum === 40 || minNum === 50) {
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
var backImgInfo = function(imgID, imgAuth, imgAuthPro) {
  imgAuthPro = "https://unsplash.com/@" + imgAuthPro;
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
  if (setBackID === 170) {
    backImgInfo("3MNzGlQM7qs", "Anton Repponen", "repponen");
  } else if (setBackID === 171) {
    backImgInfo("zpkYWVAni30", "Pineapples", "pineapple");
  } else if (setBackID === 172) {
    backImgInfo("XF8gmVVDWYA", "John Chavez", "johnachavez");
  } else if (setBackID === 173) {
    backImgInfo("XtXdHH-Ib7c", "Olia Gozha", "olia");
  } else if (setBackID === 174) {
    backImgInfo("I1vgh8AJr94", "Alec Weir", "xcvii");
  } else if (setBackID === 175) {
    backImgInfo("O_uV3KhQuo8", "Elle Zhu", "eszhu");
  } else if (setBackID === 168) {
    backImgInfo("3OiYMgDKJ6k", "Dariusz Sankowski", "dariuszsankowski");
  } else if (setBackID === 169) {
    backImgInfo("AekHfFqOtgU", "Stefan Kunze", "stefankunze");
  };
};

setBack("random");
