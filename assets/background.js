// Copyright Benjamin Developments (c) 2016 - All rights reserved

var backgroundNames = Array(183, 184, 185, 186);
var imageUpdateDate = "Saturday, 17<sup>th</sup> December 2016";
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
    if (minNum === 00 || minNum === 20 || minNum === 40) {
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
  if (setBackID === 183) {
    backImageInfo("yN-8V0K5QBU", "Linda Xu", "rhindaxu");
  } else if (setBackID === 184) {
    backImageInfo("fHXP17AxOEk", "Arto Marttinen", "wandervisions");
  } else if (setBackID === 185) {
    backImageInfo("qLhCKmBjTec", "Wilson Ye", "wilsonye123");
  } else if (setBackID === 186) {
    backImageInfo("8EwXo2mHtjs", "Blake Richard Verdoorn", "blakeverdoorn");
  };
};
var newBackground = function() {
  styleOpacity(0, "header", "0");
  setTimeout(function() {
    setBack();
  }, 200);
};
setBack();
