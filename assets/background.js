// Copyright Benjamin Developments (c) 2017 - All rights reserved

var backgroundNames = Array(190, 191, 192, 193, 194);
var imageUpdateDate = "Thrusday, 5<sup>th</sup> January 2017";
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
  if (setBackID === 190) {
    backImageInfo("XyoW1MhPqbs", "Felix Russell-Saw", "frsphoto");
  } else if (setBackID === 191) {
    backImageInfo("MAxHEAaAukI", "Vincent Guth", "vingtcent");
  } else if (setBackID === 192) {
    backImageInfo("duiETcZN7O4", "Cristina Gottardi", "cristina_gottardi");
  } else if (setBackID === 193) {
    backImageInfo("zPptO_0swGc", "Nathan Boadle", "nathanb");
  } else if (setBackID === 194) {
    backImageInfo("M_5bO1WKP4o", "Nathan Anderson", "nathananderson");
  };
};
var newBackground = function() {
  styleOpacity(0, "header", "0");
  setTimeout(function() {
    setBack();
  }, 200);
};
setBack();
