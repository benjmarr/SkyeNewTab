// Copyright Benjamin Developments (c) 2017 - All rights reserved

var backgroundNames = Array(203, 204, 205, 206, 207);
var imageUpdateDate = "Wednesday, 8<sup>th</sup> February 2017";
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
  if (setBackID === 203) {
    backImageInfo("Qyw_0tb3rwY", "Sticker Mule", "stickermule");
  } else if (setBackID === 204) {
    backImageInfo("AaExF6NxvQo", "Martin Jernberg", "martinjphoto");
  } else if (setBackID === 205) {
    backImageInfo("_fYBsiQzMHI", "Austin Neill", "arstyy");
  } else if (setBackID === 206) {
    backImageInfo("zZkMki0yH6I", "Anna Popović", "and_her_eyes_were_wild");
  } else if (setBackID === 207) {
    backImageInfo("qVMqF_DL1h4", "Lance Asper", "lance_asper");
  };
};
var newBackground = function() {
  styleOpacity(0, "header", "0");
  setTimeout(function() {
    setBack();
  }, 200);
};
setBack();
