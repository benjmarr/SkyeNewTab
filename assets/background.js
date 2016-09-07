// Copyright Benjamin Developments (c) 2015 - All rights reserved

// Random background selection script
var backgroundNames = Array(141, 142, 143, 144, 145, 146, 137, 138, 139, 140);
var imageUpdateDate = "Wednesday, 7<sup>th</sup> September 2016";
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
  if (setBackID === 141) {
    backImgInfo("le60j2br1BI", "Zachary Staines", "zac_staines");
  } else if (setBackID === 142) {
    backImgInfo("jYBy2HCUve0", "Jeff King", "jeffkingla");
  } else if (setBackID === 143) {
    backImgInfo("TilfTdj3x6U", "Benny Jackson", "themightymerlin");
  } else if (setBackID === 144) {
    backImgInfo("KX1StEax7Jk", "Michael Ramey", "qtip94ramey");
  } else if (setBackID === 145) {
    backImgInfo("p3OzJuT_Dks", "Kace Rodriguez", "kace");
  } else if (setBackID === 146) {
    backImgInfo("pQS0ETF3KTI", "Arto Marttinen", "whiteboytravels");
  } else if (setBackID === 137) {
    backImgInfo("Gacd_XeSGQk", "Charlie Harutaka", "charlieharutaka");
  } else if (setBackID === 138) {
    backImgInfo("g-AklIvI1aI", "Steven Wei", "stevenwei");
  } else if (setBackID === 139) {
    backImgInfo("s1M0ncSl9l4", "Uğur Gürcüoğlu", "sharkdesignstudio");
  } else if (setBackID === 140) {
    backImgInfo("ahi73ZN5P0Y", "Federico Beccari", "federize");
  };
};

setBack("random");
