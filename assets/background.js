// Copyright Benjamin Developments (c) 2015 - All rights reserved

// Random background selection script
var backgroundNames = Array(81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 75, 76, 77, 78, 79, 80);
var imageUpdateDate = "Saturday, 21<sup>st</sup> May 2016";
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
  } else if (setBackID === 82) {
    backImgInfo("https://unsplash.com/photos/dccIfU1V1VU", "Verne Ho", "https://unsplash.com/verneho");
  } else if (setBackID === 83) {
    backImgInfo("https://unsplash.com/photos/fwsvUxNgLRs", "Sweet Ice Cream Photography", "https://unsplash.com/sweeticecreamphotography");
  } else if (setBackID === 84) {
    backImgInfo("https://unsplash.com/photos/OJJIaFZOeX4", "veeterzy", "https://unsplash.com/veeterzy");
  } else if (setBackID === 85) {
    backImgInfo("https://unsplash.com/photos/6wQId4r0uA4", "Vladimir Chuchadeev", "https://unsplash.com/@chuchad")
  } else if (setBackID === 86) {
    backImgInfo("https://unsplash.com/photos/aIYFR0vbADk", "Erol Ahmed", "https://unsplash.com/@erol");
  } else if (setBackID === 87) {
    backImgInfo("https://unsplash.com/photos/DMcI0cmYJYk", "Samuel Scrimshaw", "https://unsplash.com/@samscrim");
  } else if (setBackID === 88) {
    backImgInfo("https://unsplash.com/photos/TBQXwj3DEOY", "Sujan Sundarewaran", "https://unsplash.com/@sujansundareswaran");
  } else if (setBackID === 89) {
    backImgInfo("https://unsplash.com/photos/c8TWWQ5ZnUw", "Hoach Le Dinh", "https://unsplash.com/@hachld");
  } else if (setBackID === 90) {
    backImgInfo("https://unsplash.com/photos/TZCehSn-T-o/", "Anders Jildén", "https://unsplash.com/@andersjilden");
  } else if (setBackID === 91) {
    backImgInfo("https://unsplash.com/photos/3wbxAMUj7sg/", "Roksolana Zasiadko", "https://unsplash.com/@cieloadentro");
  } else if (setBackID === 92) {
    backImgInfo("https://unsplash.com/photos/rTZW4f02zY8/", "NASA", "https://unsplash.com/@nasa");
  } else if (setBackID === 93) {
    backImgInfo("https://unsplash.com/photos/zFnk_bTLApo", "Ismael Nieto", "https://unsplash.com/@ismaelnieto");
  } else if (setBackID === 94) {
    backImgInfo("https://unsplash.com/photos/AbTa_gQ74fs/", "Matthew Wiebe", "https://unsplash.com/@matthewwiebe");
  } else if (setBackID === 75) {
    backImgInfo("https://unsplash.com/photos/vC-GqGbakJo", "Clark Street Mercantile", "https://unsplash.com/mercantile");
  } else if (setBackID === 76) {
    backImgInfo("https://unsplash.com/photos/_SmZSuZwkHg", "Setfan Kunze", "https://unsplash.com/stefankunze");
  } else if (setBackID === 77) {
    backImgInfo("https://unsplash.com/photos/sseiVD2XsOk", "Sam Scrimshaw", "https://unsplash.com/samscrim");
  } else if (setBackID === 78) {
    backImgInfo("https://unsplash.com/photos/iNmouRApXYM", "Padurariu Alexandru", "https://unsplash.com/worthyofelegance");
  } else if (setBackID === 79) {
    backImgInfo("https://unsplash.com/photos/3I5j50pIXvU", "Sean Stratton", "https://unsplash.com/seanstratton");
  } else if (setBackID === 80) {
    backImgInfo("https://unsplash.com/photos/wpTWYBll4_w", "Marat Gilyadzinov", "https://unsplash.com/m3design");
  };
};

setBack("random");
