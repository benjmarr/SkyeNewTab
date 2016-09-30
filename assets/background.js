// Copyright Benjamin Developments (c) 2015 - All rights reserved

// Random background selection script
var backgroundNames = Array(151, 152, 153, 154, 145, 146, 147, 148, 149, 150);
var imageUpdateDate = "Friday, 30<sup>th</sup> September 2016";
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
  if (setBackID === 151) {
    backImgInfo("_SFJhRPzJHs", "NASA", "nasa");
  } else if (setBackID === 152) {
    backImgInfo("_vPCiuXL2HE", "Li Yang", "ly0ns");
  } else if (setBackID === 153) {
    backImgInfo("bk4HoBc4k60", "Martin Ezequiel Sanchez", "mzeketv");
  } else if (setBackID === 154) {
    backImgInfo("CSIcgaLiFO0", "Mark Asthoff", "qa9de");
  } else if (setBackID === 145) {
    backImgInfo("p3OzJuT_Dks", "Kace Rodriguez", "kace");
  } else if (setBackID === 146) {
    backImgInfo("pQS0ETF3KTI", "Arto Marttinen", "whiteboytravels");
  } else if (setBackID === 147) {
    backImgInfo("sAGXVK6bNFc", "Amar Yashlaha", "pictagramar");
  } else if (setBackID === 148) {
    backImgInfo("YrtFlrLo2DQ", "Marcela Laskoski", "ponicornio");
  } else if (setBackID === 149) {
    backImgInfo("IEHPDNk2-8w", "Sam Ferrara", "samferrara");
  } else if (setBackID === 150) {
    backImgInfo("USrZRcRS2Lw", "Todd Quackenbush", "toddquackenbush");
  };
};

setBack("random");
