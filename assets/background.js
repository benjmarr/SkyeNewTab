// Copyright Benjamin Developments (c) 2015 - All rights reserved

// Random background selection script
var backgroundNames = Array(101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 93, 94, 95, 96, 97, 98, 99, 100);
var imageUpdateDate = "Sunday, 10<sup>th</sup> July 2016";
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
setInterval(opChBkImgFnctn, 300000);

// Background image information menu
var backImgInfo = function(imgID, imgAuth, imgAuthPro, imgAuthWeb) {
  innerHTML("bkgrndImgInf1", imgAuth);
  innerHTML("bkgrndImgInf2", "<a target='_blank' href='" + imgAuthPro + "'>" + imgAuthPro + "</a>");
  innerHTML("bkgrndImgInf3", "<a target='_blank' href='https://unsplash.com/photos/" + imgID + "'>" + "https://unsplash.com/photos/" + imgID + "</a>");
  innerHTML("bkgrndImgInf4", "<a target='_blank' href='" + imgAuthPro + "/portfolio'>Click to see</a>");
  // if (imgAuthWeb === "" || imgAuthWeb === "web_address") {
  //   innerHTML("bkgrndImgInf4", "Not available");
  // } else {
  //   innerHTML("bkgrndImgInf4", "<a target='_blank' href='" + imgAuthWeb + "'>" + imgAuthWeb + "</a>");
  // };
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
  if (setBackID === 101) {
    backImgInfo("F9o7u-CnDJk", "Tony Webster", "https://unsplash.com/@tonywebster");
  } else if (setBackID === 102) {
    backImgInfo("VBNb52J8Trk", "SpaceX", "https://unsplash.com/@spacex");
  } else if (setBackID === 103) {
    backImgInfo("a8YV2C3yBMk", "Manik Rathee", "https://unsplash.com/@manikrathee");
  } else if (setBackID === 104) {
    backImgInfo("iOWEyl7sEgY", "Jimmy Musto", "https://unsplash.com/@jmust13");
  } else if (setBackID === 105) {
    backImgInfo("eh_vUyioHhc", "João Silas", "https://unsplash.com/@joaosilaas");
  } else if (setBackID === 106) {
    backImgInfo("Hc42xXu_WOg", "veeterzy", "https://unsplash.com/@veeterzy");
  } else if (setBackID === 107) {
    backImgInfo("O_uHS1bru2k", "Steve Richey", "https://unsplash.com/@steverichey");
  } else if (setBackID === 108) {
    backImgInfo("T16-cG1gEdo", "Jimmy Musto", "https://unsplash.com/@jmust13");
  } else if (setBackID === 109) {
    backImgInfo("RRNbMiPmTZY", "Denys Nevozhai", "https://unsplash.com/@dnevozhai");
  } else if (setBackID === 110) {
    backImgInfo("_4Ib-a8g9aA", "Teddy Kelley", "https://unsplash.com/@teddykelley");
  } else if (setBackID === 111) {
    backImgInfo("U713MZX1x0w", "Drew Collins", "https://unsplash.com/@drewjohncollins");
  } else if (setBackID === 112) {
    backImgInfo("NF2K1dI3Gew", "Benny Jackson", "https://unsplash.com/@themightymerlin");
  } else if (setBackID === 93) {
    backImgInfo("zFnk_bTLApo", "Ismael Nieto", "https://unsplash.com/@ismaelnieto");
  } else if (setBackID === 94) {
    backImgInfo("AbTa_gQ74fs/", "Matthew Wiebe", "https://unsplash.com/@matthewwiebe");
  } else if (setBackID === 95) {
    backImgInfo("qH36EgNjPJY", "Alex Siale", "https://unsplash.com/@alexsialecreative");
  } else if (setBackID === 96) {
    backImgInfo("kKxfELd_5pg", "Julian Lavallée", "https://unsplash.com/@julienlavallee");
  } else if (setBackID === 97) {
    backImgInfo("uohGiEVhWiQ", "Artem Verbo", "https://unsplash.com/@artemverbo");
  } else if (setBackID === 98) {
    backImgInfo("HhCANDrFzZ0", "Priscilla Westra", "https://unsplash.com/@pwestra");
  } else if (setBackID === 99) {
    backImgInfo("44t1AZNIMIE", "Tobias van Schneider", "https://unsplash.com/@vanschneider");
  } else if (setBackID === 100) {
    backImgInfo("sfgH9dXcMRw", "Anton Repponen", "https://unsplash.com/@repponen");
  };
};

setBack("random");
