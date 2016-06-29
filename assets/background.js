// Copyright Benjamin Developments (c) 2015 - All rights reserved

// Random background selection script
var backgroundNames = Array(101, 102, 103, 104, 105, 106, 107, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100);
var imageUpdateDate = "Wednesday, 29<sup>th</sup> June 2016";
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
var backImgInfo = function(imgUrl, imgAuth, imgAuthPro, imgAuthWeb) {
  innerHTML("bkgrndImgInf1", imgAuth);
  innerHTML("bkgrndImgInf2", "<a target='_blank' href='" + imgAuthPro + "'>" + imgAuthPro + "</a>");
  innerHTML("bkgrndImgInf3", "<a target='_blank' href='" + imgUrl + "'>" + imgUrl + "</a>");
  // innerHTML("bkgrndImgInf4", "<a target='_blank' href='" + imgAuthWeb + "'>" + imgAuthWeb + "</a>");
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
    backImgInfo("https://unsplash.com/photos/F9o7u-CnDJk", "Tony Webster", "https://unsplash.com/@tonywebster", "web_address");
  } else if (setBackID === 102) {
    backImgInfo("https://unsplash.com/photos/VBNb52J8Trk", "SpaceX", "https://unsplash.com/@spacex", "web_address");
  } else if (setBackID === 103) {
    backImgInfo("https://unsplash.com/photos/a8YV2C3yBMk", "Manik Rathee", "https://unsplash.com/@manikrathee", "web_address");
  } else if (setBackID === 104) {
    backImgInfo("https://unsplash.com/photos/iOWEyl7sEgY", "Jimmy Musto", "https://unsplash.com/@jmust13", "web_address");
  } else if (setBackID === 105) {
    backImgInfo("https://unsplash.com/photos/eh_vUyioHhc", "João Silas", "https://unsplash.com/@joaosilaas", "https://www.instagram.com/joaosilas");
  } else if (setBackID === 106) {
    backImgInfo("https://unsplash.com/photos/Hc42xXu_WOg", "veeterzy", "https://unsplash.com/@veeterzy", "https://veeterzy.com");
  } else if (setBackID === 107) {
    backImgInfo("https://unsplash.com/photos/O_uHS1bru2k", "Steve Richey", "https://unsplash.com/@steverichey", "https://www.rvcmedia.com/");
  } else if (setBackID === 88) {
    backImgInfo("https://unsplash.com/photos/TBQXwj3DEOY", "Sujan Sundarewaran", "https://unsplash.com/@sujansundareswaran", "web_address");
  } else if (setBackID === 89) {
    backImgInfo("https://unsplash.com/photos/c8TWWQ5ZnUw", "Hoach Le Dinh", "https://unsplash.com/@hachld", "web_address");
  } else if (setBackID === 90) {
    backImgInfo("https://unsplash.com/photos/TZCehSn-T-o/", "Anders Jildén", "https://unsplash.com/@andersjilden", "web_address");
  } else if (setBackID === 91) {
    backImgInfo("https://unsplash.com/photos/3wbxAMUj7sg/", "Roksolana Zasiadko", "https://unsplash.com/@cieloadentro", "web_address");
  } else if (setBackID === 92) {
    backImgInfo("https://unsplash.com/photos/rTZW4f02zY8/", "NASA", "https://unsplash.com/@nasa", "web_address");
  } else if (setBackID === 93) {
    backImgInfo("https://unsplash.com/photos/zFnk_bTLApo", "Ismael Nieto", "https://unsplash.com/@ismaelnieto", "web_address");
  } else if (setBackID === 94) {
    backImgInfo("https://unsplash.com/photos/AbTa_gQ74fs/", "Matthew Wiebe", "https://unsplash.com/@matthewwiebe", "web_address");
  } else if (setBackID === 95) {
    backImgInfo("https://unsplash.com/photos/qH36EgNjPJY", "Alex Siale", "https://unsplash.com/@alexsialecreative", "web_address");
  } else if (setBackID === 96) {
    backImgInfo("https://unsplash.com/photos/kKxfELd_5pg", "Julian Lavallée", "https://unsplash.com/@julienlavallee", "web_address");
  } else if (setBackID === 97) {
    backImgInfo("https://unsplash.com/photos/uohGiEVhWiQ", "Artem Verbo", "https://unsplash.com/@artemverbo", "web_address");
  } else if (setBackID === 98) {
    backImgInfo("https://unsplash.com/photos/HhCANDrFzZ0", "Priscilla Westra", "https://unsplash.com/@pwestra", "web_address");
  } else if (setBackID === 99) {
    backImgInfo("https://unsplash.com/photos/44t1AZNIMIE", "Tobias van Schneider", "https://unsplash.com/@vanschneider", "web_address");
  } else if (setBackID === 100) {
    backImgInfo("https://unsplash.com/photos/sfgH9dXcMRw", "Anton Repponen", "https://unsplash.com/@repponen", "web_address");
  };
};

setBack("random");
