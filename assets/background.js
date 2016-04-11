// Copyright Benjamin Developments (c) 2015 - All rights reserved

// Random background selection script
var backgroundNames = Array(81, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80);
var imageUpdateDate = "Monday, 11<sup>th</sup> April 2016";
var backgroundNumber = function() {
  return backgroundNames[Math.floor(Math.random() * backgroundNames.length)];
};

// Set last updated date in options & information menu
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

// Five minute background change
var newBackID;
newBackTimer = setInterval(function() {
  styleGrayscale(0, "header", "true");
  styleOpacity(200, "header", "0");
  styleOpacity(1100, "header", "1");
  if (getCookie("opGryscl") === "false") {
    styleGrayscale(1300, "header", "false");
  };
  setTimeout(function() {
    setBack("random");
  }, 1000);
}, 300000);

// New background image option
var opChBkImgFnctn = function() {
  clearInterval(newBackTimer);
  styleGrayscale(0, "header", "true");
  styleOpacity(200, "header", "0");
  styleOpacity(1100, "header", "1");
  if (getCookie("opGryscl") === "false") {
    styleGrayscale(1300, "header", "false");
  };
  setTimeout(function() {
    setBack("random");
  }, 1000);
};
document.getElementById("opChBkImg").addEventListener("click", function() {
  opChBkImgFnctn();
}, false);

// Background image information menu
var backImgInfo = function(imgUrl, imgAuth, imgAuthPro) {
  innerHTML("bkgrndImgInf1", imgAuth);
  innerHTML("bkgrndImgInf2", "<a target='_blank' href='" + imgAuthPro + "'>" + imgAuthPro + "</a>");
  innerHTML("bkgrndImgInf3", "<a target='_blank' href='" + imgUrl + "'>" + imgUrl + "</a>");
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
  if (setBackID === 81) {
    backImgInfo("https://unsplash.com/photos/SE96YSv1Xcc", "Padurariu Alexandru", "https://unsplash.com/worthyofelegance");
  } else if (setBackID === 62) {
    backImgInfo("https://unsplash.com/photos/bClr95glx6k", "Vashishta Jogi", "https://unsplash.com/jogi");
  } else if (setBackID === 63) {
    backImgInfo("https://unsplash.com/photos/_h7aBovKia4", "Philippe Wuyts", "https://unsplash.com/photos/_h7aBovKia4");
  } else if (setBackID === 64) {
    backImgInfo("https://unsplash.com/photos/-oWyJoSqBRM", "Alexey Topolyanskiy", "https://unsplash.com/devilcoders");
  } else if (setBackID === 65) {
    backImgInfo("https://unsplash.com/photos/93Ep1dhTd2s", "William Hook", "https://unsplash.com/williamtm")
  } else if (setBackID === 66) {
    backImgInfo("https://unsplash.com/photos/KqVHRmHVwwM", "Erez Attias", "https://unsplash.com/erezattias");
  } else if (setBackID === 67) {
    backImgInfo("https://unsplash.com/photos/E7q00J_8N7A", "NASA", "https://unsplash.com/nasa");
  } else if (setBackID === 68) {
    backImgInfo("https://unsplash.com/photos/U5rMrSI7Pn4", "Metthew Wiebe", "https://unsplash.com/matthewwiebe");
  } else if (setBackID === 69) {
    backImgInfo("https://unsplash.com/photos/Ixp4YhCKZkI", "Steve Carter", "https://unsplash.com/stvcrtr");
  } else if (setBackID === 70) {
    backImgInfo("https://unsplash.com/photos/mWRR1xj95hg", "Christian Joudrey", "https://unsplash.com/cjoudrey");
  } else if (setBackID === 71) {
    backImgInfo("https://unsplash.com/photos/yEOCA6oiVqg", "Tim Marshall", "https://unsplash.com/timmarshall");
  } else if (setBackID === 72) {
    backImgInfo("https://unsplash.com/photos/HkTMcmlMOUQ", "Ales Krivec", "https://unsplash.com/aleskrivec");
  } else if (setBackID === 73) {
    backImgInfo("https://unsplash.com/photos/xcC5ozHk_N8", "Joseph Barrientos", "https://unsplash.com/thata7guy");
  } else if (setBackID === 74) {
    backImgInfo("https://unsplash.com/photos/sai-x7brics", "Alexandre Perotto", "https://unsplash.com/perotto");
  } else if (setBackID === 75) {
    backImgInfo("https://unsplash.com/photos/vC-GqGbakJo", "Clark Street Mercantile", "https://unsplash.com/mercantile");
  } else if (setBackID === 76) {
    backImgInfo("https://unsplash.com/photos/_SmZSuZwkHg", "Setfan Kunze", "https://unsplash.com/stefankunze");
  } else if (setBackID === 77) {
    backImgInfo("https://unsplash.com/photos/sseiVD2XsOk", "Sam Scrimshaw", "https://unsplash.com/samscrim");
  } else if (setBackID === 78) {
    backImgInfo("https://unsplash.com/photos/iNmouRApXYM", "Padurariu Alexandru", "https://unsplash.com/worthyofelegance");
  } else if (setBackID === 79) {
    backImgInfo("https://unsplash.com/photos/3I5j50pIXvU", "Sean Stratton" "https://unsplash.com/seanstratton");
  } else if (setBackID === 80) {
    backImgInfo("https://unsplash.com/photos/wpTWYBll4_w", "Marat Gilyadzinov", "https://unsplash.com/m3design");
  };
};

setBack("random");
