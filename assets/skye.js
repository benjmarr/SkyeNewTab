// Copyright Benjamin Developments (c) 2017 - All rights reserved
console.log("Skye New Tab copyright Benjamin Developments (c) 2017 - All rights reserved");
var rootUrl = "https://github.com/BenAndy/SkyeNewTab/tree/master";
var ckiUpdDte = "November 17, 2016";

// Cookie handlers
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
};
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  };
  return "";
};

// Anti-Right click
if (document.addEventListener) {
  document.addEventListener("contextmenu", function(e) {
    if (document.activeElement.tagName != "INPUT") {
      e.preventDefault();
    };
  }, false);
} else {
  document.attachEvent("oncontextmenu", function() {
    if (document.activeElement.tagName != "INPUT") {
      window.event.returnValue = false;
    };
  });
};

// Style methods
  // document.getElementById(x).innerHTML
var innerHTML = function(id, string) {
  document.getElementById(id).innerHTML = string;
};
  // Opacity style
var styleOpacity = function(delay, id, value) {
  setTimeout(function() {
    document.getElementById(id).style.opacity = value;
  }, delay);
};
  // Grayscale style
var styleGrayscale = function(delay, id, value) {
  setTimeout(function() {
    if (value === "true") {
      document.getElementById(id).style.webkitFilter = "grayscale(1)";
    } else {
      document.getElementById(id).style.webkitFilter = "grayscale(0)";
    };
  }, delay);
};
  // Visibility style
var styleVisibility = function(delay, id, value) {
  setTimeout(function() {
    document.getElementById(id).style.visibility = value;
  }, delay);
};
  // Background color style
var styleBackgroundColor = function(delay, id, value) {
  setTimeout(function() {
    document.getElementById(id).style.backgroundColor = value;
  }, delay);
};

// Clear menus
var clearMenu = function(opB) {
  styleOpacity(0, "opM", 0);
  styleVisibility(300, "opM", "hidden");
  styleOpacity(0, "dteFom", 0);
  styleVisibility(300, "dteFom", "hidden");
  styleOpacity(0, "bkgrndImgInf", 0);
  styleVisibility(300, "bkgrndImgInf", "hidden");
  styleOpacity(0, "icnVsblty", 0);
  styleVisibility(300, "icnVsblty", "hidden");
  styleOpacity(0, "kybdCntrls", 0);
  styleVisibility(300, "kybdCntrls", "hidden");
  styleOpacity(0, "ckiUpd", 0);
  styleVisibility(300, "ckiUpd", "hidden");
  styleOpacity(0, "srchBxChcs", 0);
  styleVisibility(300, "srchBxChcs", "hidden");
  if (opB === "true") {
    styleVisibility(0, "options", "visible");
    styleOpacity(0, "options", 1);
  } else {
    styleVisibility(300, "options", "hidden");
    styleOpacity(0, "options", 0);
  };
};

// Cookie update alerts
if (getCookie("ckiUpd") === "") {
  setCookie("ckiUpd", "firstLoad", 365);
};
if (getCookie("ckiUpd") === ckiUpdDte || getCookie("ckiUpd") === "firstLoad") {
  console.log("Cookies last updated on " + ckiUpdDte);
  setCookie("ckiUpd", ckiUpdDte, 365);
} else {
  setCookie("ckiUpd", ckiUpdDte, 365);
  styleVisibility(0, "ckiUpd", "visible");
  styleOpacity(0, "ckiUpd", 0.9);
  innerHTML("ckiUpdMsg", "New cookies have been added since you last visited this page. Cookies were last updated on " + ckiUpdDte + ". You can view our cookie policy, privacy policy, terms of use and change log below.");
  console.log("Cookies last updated on " + ckiUpdDte);
};
document.getElementById("ckiUpdclose").addEventListener("click", function() {
  clearMenu("true");
}, false);


// Get name
var retriveUserName = function() {
  var promptName = prompt("What would you like to be called? If you don't wish to have your name shown, just press enter.", "Type your name here!");
  if (promptName === "Type your name here!" || promptName === "" || promptName === "null" || promptName === null) {
    setCookie("usingName", "false", 365);
  } else {
    setCookie("userName", promptName, 365);
    setCookie("usingName", "true", 365);
  };
};
if (getCookie("usingName") === "") {
  retriveUserName();
};

// Set date, time, date alerts & welcome messages
var nday;
var nmonth;
var ndate;
var strdndth;
var hourtf;
var tday = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var tmonth = new Array ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
setInterval(clock, 100);
function clock() {
  var d = new Date();
  nday = d.getDay()
  nmonth = d.getMonth()
  ndate = d.getDate();
  var nhour = d.getHours(), nmin = d.getMinutes(), ap;
  var thour = d.getHours();
  if (nhour === 0) {
    ap = " AM";
    nhour = 12;
  } else if (nhour < 12) {
    ap = " AM";
  } else if (nhour === 12) {
    ap = " PM";
  } else if (nhour > 12) {
    ap = " PM";
    nhour -= 12;
  };
  if (nmin <= 9) {
    nmin = "0" + nmin;
  };
  if (ndate === 1 || ndate === 21 || ndate === 31) {
    strdndth = "st";
  } else if (ndate === 2 || ndate === 22) {
    strdndth = "nd";
  } else if (ndate === 3 || ndate === 23) {
    strdndth = "rd";
  } else {
    strdndth = "th";
  };
  if (tmonth[nmonth] === "January" && ndate === 1) {
    innerHTML("alertBox", "Happy new year!");
  } else if (tmonth[nmonth] === "November" && ndate === 28) {
    innerHTML("alertBox", "Happy birthday, Skye New Tab!");
  } else if (tmonth[nmonth] === "December" && ndate === 25) {
    innerHTML("alertBox", "Merry Christmas!");
  } else {
    if (thour < 12) {
      if (getCookie("usingName") === "false") {
        innerHTML("alertBox", "Good morning");
      } else {
        innerHTML("alertBox", "Good morning, " + getCookie("userName"));
      };
    } else if (thour < 18) {
      if (getCookie("usingName") === "false") {
        innerHTML("alertBox", "Good afternoon");
      } else {
        innerHTML("alertBox", "Good afternoon, " + getCookie("userName"));
      };
    } else {
      if (getCookie("usingName") === "false") {
        innerHTML("alertBox", "Good evening");
      } else {
        innerHTML("alertBox", "Good evening, " + getCookie("userName"));
      };
    };
  };
  if (getCookie("opTwntyFrHrTm") === "24") {
    hourtf = nhour + 12;
    innerHTML("clockBox", hourtf + ":" + nmin);
  } else {
    if (getCookie("opAMPM") === "show") {
      innerHTML("clockBox", nhour + ":" + nmin + ap);
    } else {
      innerHTML("clockBox", nhour + ":" + nmin);
    };
  };
  if (getCookie("opDteFom") === "1") {
    innerHTML("dateBox", tday[nday] + ", " + tmonth[nmonth] + " " + ndate + "<sup>" + strdndth + "</sup>");
  } else if (getCookie("opDteFom") === "2") {
    innerHTML("dateBox", tmonth[nmonth] + " " + ndate + "<sup>" + strdndth + "</sup>");
  } else if (getCookie("opDteFom") === "3") {
    innerHTML("dateBox", tday[nday] + ", " + ndate + " " + tmonth[nmonth]);
  } else if (getCookie("opDteFom") === "4") {
    innerHTML("dateBox", tmonth[nmonth] + " " + ndate + "<sup>" + strdndth + "</sup>");
  };
};

// Keyboard shortcuts
document.addEventListener("keydown", function(e) {
  if (document.activeElement.tagName != "INPUT") {
    e = e || window.event;
    if (e.keyCode === 27) {
      clearMenu("true");
    } else if (e.keyCode === 79) {
      clearMenu("false");
      styleVisibility(1000, "opM", "visible");
      styleOpacity(1000, "opM", 0.9);
    } else if (e.keyCode === 71) {
      opGryscl();
    } else if (e.keyCode === 65) {
      window.location = advertWeb;
    };
  };
}, false);

// Options button click
document.getElementById("options").addEventListener("click", function() {
  clearMenu("false");
  styleVisibility(300, "opM", "visible");
  styleOpacity(300, "opM", 0.9);
}, false);

// Options close
document.getElementById("opMclose").addEventListener("click", function() {
  clearMenu("true");
}, false);

// Option menu options
  // Show & hide the AM/PM
if (getCookie("opAMPM") === "") {
  setCookie("opAMPM", "show", 365);
};
var opAMPM = function(value) {
  if (value === "show") {
    setCookie("opAMPM", "show", 365);
    innerHTML("opAMPM", "Hide the AM/PM");
  } else if (value === "hide") {
    setCookie("opAMPM", "hide", 365);
    innerHTML("opAMPM", "Show the AM/PM");
  } else if (value === "pageLoad") {
    if (getCookie("opAMPM") === "show") {
      opAMPM("show");
    } else {
      opAMPM("hide");
    };
  };
};
document.getElementById("opAMPM").addEventListener("click", function() {
  if (getCookie("opAMPM") === "show") {
    opAMPM("hide");
  } else {
    opAMPM("show");
  };
}, false);
opAMPM("pageLoad");
  // Change your name
document.getElementById("opChngNme").addEventListener("click", function() {
  retriveUserName();
}, false);
  // Change the date format
document.getElementById("opChngeDteFrmt").addEventListener("click", function() {
  clearMenu("true");
  styleVisibility(300, "dteFom", "visible");
  styleOpacity(300, "dteFom", 0.9);
}, false);
document.getElementById("dteFomclose").addEventListener("click", function() {
  styleOpacity(0, "dteFom", 0);
  styleVisibility(300, "dteFom", 0);
}, false);
if (getCookie("opDteFom") === "") {
  setCookie("opDteFom", 1, 365);
};
setTimeout(function() {
  innerHTML("opDteFom1", tday[nday] + ", " + tmonth[nmonth] + " " + ndate + "<sup>" + strdndth + "</sup>");
  innerHTML("opDteFom2", tmonth[nmonth] + " " + ndate + "<sup>" + strdndth + "</sup>");
  innerHTML("opDteFom3", tday[nday] + ", " + ndate + " " + tmonth[nmonth]);
  innerHTML("opDteFom4", tmonth[nmonth] + " " + ndate + "<sup>" + strdndth + "</sup>");
}, 200);
document.getElementById("opDteFom1").addEventListener("click", function() {
  setCookie("opDteFom", 1, 365);
}, false);
document.getElementById("opDteFom2").addEventListener("click", function() {
  setCookie("opDteFom", 2, 365);
}, false);
document.getElementById("opDteFom3").addEventListener("click", function() {
  setCookie("opDteFom", 3, 365);
}, false);
document.getElementById("opDteFom4").addEventListener("click", function() {
  setCookie("opDteFom", 4, 365);
}, false);
  // Hide or show the welcome messages
if (getCookie("opWlcmMsgs") === "") {
  setCookie("opWlcmMsgs", "show", 365);
  innerHTML("opWlcmMsgs", "Hide the welcome message");
} else if (getCookie("opWlcmMsgs") === "show") {
  innerHTML("opWlcmMsgs", "Hide the welcome message");
} else {
  innerHTML("opWlcmMsgs", "Show the welcome message");
};
document.getElementById("opWlcmMsgs").addEventListener("click", function() {
  if (getCookie("opWlcmMsgs") === "show") {
    setCookie("opWlcmMsgs", "hide", 365);
      innerHTML("opWlcmMsgs", "Show the welcome message");
    styleOpacity(0, "alertBox", 0);
  } else {
    setCookie("opWlcmMsgs", "show", 365);
      innerHTML("opWlcmMsgs", "Hide the welcome message");
    styleOpacity(0, "alertBox", 1);
  };
}, false);
  // Keyboard controls menu
document.getElementById("opKybdCntrls").addEventListener("click", function() {
  clearMenu("true");
  styleVisibility(300, "kybdCntrls", "visible");
  styleOpacity(300, "kybdCntrls", 1);
}, false);
document.getElementById("kybdCntrlsclose").addEventListener("click", function() {
  clearMenu("true");
}, false);
  // 24 hour time option
if (getCookie("opTwntyFrHrTm") === "") {
  setCookie("opTwntyFrHrTm", "12", 365);
  innerHTML("opTwntyFrHrTm", "Change to 24 hour time");
} else if (getCookie("opTwntyFrHrTm") === "12") {
  setCookie("opTwntyFrHrTm", "12", 365);
  innerHTML("opTwntyFrHrTm", "Change to 24 hour time");
} else {
  setCookie("opTwntyFrHrTm", "24", 365);
  innerHTML("opTwntyFrHrTm", "Change to 12 hour time");
};
document.getElementById("opTwntyFrHrTm").addEventListener("click", function() {
  if (getCookie("opTwntyFrHrTm") === "12") {
    setCookie("opTwntyFrHrTm", "24", 365);
    innerHTML("opTwntyFrHrTm", "Change to 12 hour time");
  } else {
    setCookie("opTwntyFrHrTm", "12", 365);
    innerHTML("opTwntyFrHrTm", "Change to 24 hour time");
  };
}, false);
if (getCookie("opGryscl") === "") {
  setCookie("opGryscl", false, 365);
} else if (getCookie("opGryscl") === "true") {
  styleGrayscale(0, "header", "true");
};
var opGryscl = function() {
  if (getCookie("opGryscl") === "true") {
    setCookie("opGryscl", "false", 365);
    styleGrayscale(0, "header", "false");
  } else {
    setCookie("opGryscl", "true", 365);
    styleGrayscale(0, "header", "true");
  };
};
document.getElementById("opGryscl").addEventListener("click", function() {
  opGryscl();
}, false);

// Online/offline & Unsplash credit
var onlineYN = function() {
  styleOpacity(0, "dText", "1");
  styleOpacity(2000, "dText", "0");
  setTimeout(function() {
    innerHTML("dText", "Not connected");
    var i = new Image();
    i.onload = function() {innerHTML("dText", "Connected")};
    i.src = 'http://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png?d=' + escape(Date());
  }, 2501);
  styleOpacity(4000, "dText", "1");
  styleOpacity(6000, "dText", "0");
};

// Background code
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
  innerHTML("bkgrndImgInf1", imgAuth);
  innerHTML("bkgrndImgInf2", "<a target='_blank' href='" + imgAuthPro + "'>" + imgAuthPro + "</a>");
  innerHTML("bkgrndImgInf3", "<a target='_blank' href='https://unsplash.com/photos/" + imgID + "'>" + "https://unsplash.com/photos/" + imgID + "</a>");
  innerHTML("bkgrndImgInf4", "<a target='_blank' href='" + imgAuthPro + "/portfolio'>Click to see</a>");
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

// Hotlinks code
if (getCookie("opIcnVsblty") === "") {
  setCookie("opIcnVsblty", "4", 365);
};
var goLink = function(url) {
  styleBackgroundColor(0, "body", "#FFFFFF");
  styleOpacity(0, "body", 0);
  window.location = url;
};
document.getElementById("link1").addEventListener("click", function() {
  goLink("https://google.com/");
}, false);
document.getElementById("link2").addEventListener("click", function() {
  goLink("https://facebook.com/");
}, false);
document.getElementById("link3").addEventListener("click", function() {
  goLink("https://instagram.com/");
}, false);
document.getElementById("link4").addEventListener("click", function() {
  goLink("https://pinterest.com/");
}, false);
document.getElementById("link5").addEventListener("click", function() {
  goLink("https://twitter.com/");
}, false);
document.getElementById("link6").addEventListener("click", function() {
  goLink("https://youtube.com/");
}, false);
document.getElementById("link1").addEventListener("mouseover", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link1", "false");
  };
}, false);
document.getElementById("link1").addEventListener("mouseout", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link1", "true");
  };
}, false);
document.getElementById("link2").addEventListener("mouseover", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link2", "false");
  };
}, false);
document.getElementById("link2").addEventListener("mouseout", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link2", "true");
  };
}, false);
document.getElementById("link3").addEventListener("mouseover", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link3", "false");
  };
}, false);
document.getElementById("link3").addEventListener("mouseout", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link3", "true");
  };
}, false);
document.getElementById("link4").addEventListener("mouseover", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link4", "false");
  };
}, false);
document.getElementById("link4").addEventListener("mouseout", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link4", "true");
  };
}, false);
document.getElementById("link5").addEventListener("mouseover", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link5", "false");
  };
}, false);
document.getElementById("link5").addEventListener("mouseout", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link5", "true");
  };
}, false);
document.getElementById("link6").addEventListener("mouseover", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link6", "false");
  };
}, false);
document.getElementById("link6").addEventListener("mouseout", function() {
  if (getCookie("opIcnVsblty") === "4") {
    styleGrayscale(0, "link6", "true");
  };
}, false);
var grayscaleOn = function() {
  styleGrayscale(0, "link1", "true");
  styleGrayscale(0, "link2", "true");
  styleGrayscale(0, "link3", "true");
  styleGrayscale(0, "link4", "true");
  styleGrayscale(0, "link5", "true");
  styleGrayscale(0, "link6", "true");
};
var grayscaleOff = function() {
  styleGrayscale(0, "link1", "false");
  styleGrayscale(0, "link2", "false");
  styleGrayscale(0, "link3", "false");
  styleGrayscale(0, "link4", "false");
  styleGrayscale(0, "link5", "false");
  styleGrayscale(0, "link6", "false");
};
var visibleOn = function() {
  styleVisibility(0, "link1", "visible");
  styleVisibility(0, "link2", "visible");
  styleVisibility(0, "link3", "visible");
  styleVisibility(0, "link4", "visible");
  styleVisibility(0, "link5", "visible");
  styleVisibility(0, "link6", "visible");
};
var visibleOff = function() {
  styleVisibility(500, "link1", "hidden");
  styleVisibility(500, "link2", "hidden");
  styleVisibility(500, "link3", "hidden");
  styleVisibility(500, "link4", "hidden");
  styleVisibility(500, "link5", "hidden");
  styleVisibility(500, "link6", "hidden");
};
var opacityOn = function() {
  styleOpacity(0, "link1", 1);
  styleOpacity(0, "link2", 1);
  styleOpacity(0, "link3", 1);
  styleOpacity(0, "link4", 1);
  styleOpacity(0, "link5", 1);
  styleOpacity(0, "link6", 1);
};
var opacityOff = function() {
  styleOpacity(0, "link1", 0);
  styleOpacity(0, "link2", 0);
  styleOpacity(0, "link3", 0);
  styleOpacity(0, "link4", 0);
  styleOpacity(0, "link5", 0);
  styleOpacity(0, "link6", 0);
};
var opIcnVsblty1 = function() {
  setCookie("opIcnVsblty", "1", 365);
  grayscaleOff();
  visibleOn();
  opacityOn();
};
document.getElementById("opIcnVsblty1").addEventListener("click", function() {
  opIcnVsblty1();
}, false);
var opIcnVsblty2 = function() {
  setCookie("opIcnVsblty", "2", 365);
  grayscaleOn();
  visibleOn();
  opacityOn();
};
document.getElementById("opIcnVsblty2").addEventListener("click", function() {
  opIcnVsblty2();
}, false);
var opIcnVsblty3 = function() {
  setCookie("opIcnVsblty", "3", 365);
  visibleOff();
  opacityOff();
};
document.getElementById("opIcnVsblty3").addEventListener("click", function() {
  opIcnVsblty3();
}, false);
var opIcnVsblty4 = function() {
  setCookie("opIcnVsblty", "4", 365);
  setTimeout(function() {
    grayscaleOn();
  }, 1500);
  visibleOn();
  opacityOn();
};
document.getElementById("opIcnVsblty4").addEventListener("click", function() {
  opIcnVsblty4();
}, false);
document.getElementById("opIcnVsblty").addEventListener("click", function() {
  clearMenu("true");
  styleVisibility(1000, "icnVsblty", "visible");
  styleOpacity(1000, "icnVsblty", 0.9);
}, false);
document.getElementById("icnVsbltyclose").addEventListener("click", function() {
  clearMenu("true");
}, false);
if (getCookie("opIcnVsblty") === "1") {
  opIcnVsblty1();
} else if (getCookie("opIcnVsblty") === "2") {
  opIcnVsblty2();
} else if (getCookie("opIcnVsblty") === "3") {
  opIcnVsblty3();
} else if (getCookie("opIcnVsblty") === "4") {
  opIcnVsblty4();
};

// Search box code
var makeSearchBox = function(url, id) {
  innerHTML("srchBx", "<form id='formForm' method='get' action='" + url + "'><input type='text' name='q' size='31' id='srchImg' /></form>");
  hideAllSearchImages();
  styleOpacity(5, "searchImage" + id, 1);
  styleVisibility(5, "searchImage" + id, "visible");
};
if (getCookie("opSrchBx") === "") {
  setCookie("opSrchBx", "google", 365);
};
var opSrchBx = function() {
  if (getCookie("opSrchBx") === "hide") {
    innerHTML("srchBxChcsHS", "Show the search box");
    styleOpacity(0, "srchBx", 0);
    styleVisibility(300, "srchBx", "hidden");
    hideAllSearchImages();
  } else if (getCookie("opSrchBx") === "show") {
    setCookie("opSrchBx", "google", 365);
    opSrchBx();
  } else {
    innerHTML("srchBxChcsHS", "Hide the search box");
    styleOpacity(0, "srchBx", 1);
    styleVisibility(0, "srchBx", "visible");
  };
  if (getCookie("opSrchBx") === "google") {
    makeSearchBox("https://www.google.com/search", 1);
  } else if (getCookie("opSrchBx") === "twitter") {
    makeSearchBox("https://www.twitter.com/search", 2);
  } else if (getCookie("opSrchBx") === "facebook") {
    makeSearchBox("https://www.facebook.com/search/top", 3);
  } else if (getCookie("opSrchBx") === "youtube") {
    makeSearchBox("https://www.youtube.com/results", 4);
  } else if (getCookie("opSrchBx") === "github") {
    makeSearchBox("https://www.github.com/search", 5);
  };
};
document.getElementById("opSrchBx").addEventListener("click", function() {
  clearMenu("true");
  styleVisibility(300, "srchBxChcs", "visible");
  styleOpacity(300, "srchBxChcs", 0.9);
}, false);
document.getElementById("srchBxChcsclose").addEventListener("click", function() {
  clearMenu("true");
}, false);
document.getElementById("srchBxChcsHS").addEventListener("click", function() {
  if (getCookie("opSrchBx") === "hide") {
    setCookie("opSrchBx", "show", 365);
  } else if (getCookie("srchBxChcs") === "show") {
    setCookie("opSrchBx", "hide", 365);
  } else {
    setCookie("opSrchBx", "hide", 365);
  };
  opSrchBx();
}, false);
innerHTML("srchBxChcs1", "Google search engine");
document.getElementById("srchBxChcs1").addEventListener("click", function() {
  setCookie("opSrchBx", "google", 365);
  opSrchBx();
}, false);
innerHTML("srchBxChcs2", "Twitter search engine");
document.getElementById("srchBxChcs2").addEventListener("click", function() {
  setCookie("opSrchBx", "twitter", 365);
  opSrchBx();
}, false);
innerHTML("srchBxChcs3", "Facebook search engine");
document.getElementById("srchBxChcs3").addEventListener("click", function() {
  setCookie("opSrchBx", "facebook", 365);
  opSrchBx();
}, false);
innerHTML("srchBxChcs4", "YouTube search engine");
document.getElementById("srchBxChcs4").addEventListener("click", function() {
  setCookie("opSrchBx", "youtube", 365);
  opSrchBx();
}, false);
innerHTML("srchBxChcs5", "GitHub search engine");
document.getElementById("srchBxChcs5").addEventListener("click", function() {
  setCookie("opSrchBx", "github", 365);
  opSrchBx();
}, false);

// Hide all search images function
var hideAllSearchImages = function() {
  styleOpacity(0, "searchImage1", 0);
  styleOpacity(0, "searchImage2", 0);
  styleOpacity(0, "searchImage3", 0);
  styleOpacity(0, "searchImage4", 0);
  styleOpacity(0, "searchImage5", 0);
};

// Search image click
document.getElementById("searchImageBox").addEventListener("click", function() {
  clearMenu("true");
  styleVisibility(300, "srchBxChcs", "visible");
  styleOpacity(300, "srchBxChcs", 0.9);
}, false);


// Run when page finished loading
window.onload = function() {
  styleOpacity(0, "body", 1);
  if (getCookie("opGryscl") === "false") {
    styleGrayscale(50, "header", "false");
  };
  setTimeout(function() {
      document.getElementById("body").style.backgroundColor = "#000000";
  }, 1000);
  styleOpacity(100, "options", 1);
  styleOpacity(200, "dText", 1);
  styleOpacity(300, "title", 1);
  styleOpacity(400, "clockBox", 1);
  styleOpacity(500, "dateBox", 1);
  if (getCookie("opWlcmMsgs") === "show") {
    styleOpacity(600, "alertBox", 1);
  };
  styleOpacity(700, "linkDiv", 1);
  setTimeout(opSrchBx, 800);
  styleOpacity(1700, "title", 0);
  setTimeout(function() {
    innerHTML("title", "Skye New Tab");
    onlineYN();
  }, 2700);
  styleOpacity(2701, "title", 1);
};
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-89454896-3']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
