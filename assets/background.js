// Copyright Benjamin Developments (c) 2016 - All rights reserved

var backgroundNames = Array(170, 171, 172, 173, 175, 168, 169);
var imageUpdateDate = "Sunday, 6<sup>th</sup> November 2016";
var backgroundNumber = function() {
  return backgroundNames[Math.floor(Math.random() * backgroundNames.length)];
};
innerHTML("infoImgUpdt", imageUpdateDate);
var setBackID = backgroundNumber();
var changeToID;
document.getElementById("header").style.backgroundImage = "url('assets/images/backgrounds/" + setBackID + ".jpg')";
var getBackID = function() {
  changeToID = backgroundNumber();
  if (setBackID = changeToID) {
    setBackID = backgroundNumber();
  } else {
    setBackID = changeToID;
  };
  return setBackID;
};
var setBack = function() {
  document.getElementById("header").style.backgroundImage = "url('assets/images/backgrounds/" + getBackID() + ".jpg')";
  styleOpacity(100, "header", "1");
  backImageData();
};
var min;
var minNum;
setInterval(function() {
  min = new Date();
  minNum = min.getMinutes();
}, 2);
var checkBackgroundTimer;
var startBackgroundTimer = function() {
  checkBackgroundTimer = setInterval(function() {
    if (minNum === 00 || minNum === 10 || minNum === 20 || minNum === 30 || minNum === 40 || minNum === 50) {
      clearInterval(checkBackgroundTimer);
      setTimeout(function() {
        startBackgroundTimer();
      }, 61000);
      styleOpacity(0, "header", "0");
      newBackground();
    };
  }, 10);
};
startBackgroundTimer();
var backImageInfo = function(imgID, imgAuth, imgAuthPro) {
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
var backImageData = function() {
  if (setBackID === 170) {
    backImageInfo("3MNzGlQM7qs", "Anton Repponen", "repponen");
  } else if (setBackID === 171) {
    backImageInfo("zpkYWVAni30", "Pineapples", "pineapple");
  } else if (setBackID === 172) {
    backImageInfo("XF8gmVVDWYA", "John Chavez", "johnachavez");
  } else if (setBackID === 173) {
    backImageInfo("XtXdHH-Ib7c", "Olia Gozha", "olia");
  } else if (setBackID === 174) {
    backImageInfo("I1vgh8AJr94", "Alec Weir", "xcvii");
  } else if (setBackID === 175) {
    backImageInfo("O_uV3KhQuo8", "Elle Zhu", "eszhu");
  } else if (setBackID === 168) {
    backImageInfo("3OiYMgDKJ6k", "Dariusz Sankowski", "dariuszsankowski");
  } else if (setBackID === 169) {
    backImageInfo("AekHfFqOtgU", "Stefan Kunze", "stefankunze");
  };
};
var newBackground = function() {
  styleOpacity(0, "header", "0");
  setTimeout(function() {
    setBack();
  }, 200);
};
setBack();
