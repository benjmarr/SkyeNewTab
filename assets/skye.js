// Copyright Benjamin Developments (c) 2015 - All rights reserved
console.log("Skye New Tab copyright Benjamin Developments (c) 2015 - All rights reserved");
var rootUrl = "https://github.com/BenAndy/SkyeNewTab/tree/master";
var ckiUpdDte = "April 10, 2016";

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
    e.preventDefault();
  }, false);
} else {
  document.attachEvent("oncontextmenu", function() {
    window.event.returnValue = false;
  });
};

// Custom 'document.getElementById().innerHTML' method
var innerHTML = function(id, string) {
  document.getElementById(id).innerHTML = string;
};

// Style methods
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
  setCookie("ckiUpd", "January 1, 1970", 365);
};
if (getCookie("ckiUpd") === ckiUpdDte) {
  console.log("Cookies last updated on " + ckiUpdDte);
} else {
  setCookie("ckiUpd", ckiUpdDte, 365);
  styleVisibility(0, "ckiUpd", "visible");
  styleOpacity(0, "ckiUpd", 0.9);
  innerHTML("ckiUpdMsg", "New cookies have been added since you last visited this page. Cookies were last updated on " + ckiUpdDte + ". You can view our cookie policy, privacy policy, terms of use and change log below.");
};
document.getElementById("ckiUpdclose").addEventListener("click", function() {
  clearMenu("true");
}, false);

// Get name
var retriveUserName = function() {
  var promptName = prompt("What's your name? If you don't wish to have your name shown, just press enter.", "Type your name here!");
  if (promptName === "Type your name here!" || promptName === "" || promptName === "null" || promptName === null) {
    alert("You can add your name in the options menu at any time!\nJust press 'O' for options!");
    setCookie("usingName", "false", 365);
  } else {
    alert("Thanks, " + promptName + ". You can change your name in the options menu at any time!\nJust press 'O' for options!");
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
  if (tmonth[nmonth] === "January") {
    if (ndate === 1) {
      innerHTML("alertBox", "Happy new year!");
    };
  } else if (tmonth[nmonth] === "December") {
    if (ndate === 25) {
      innerHTML("alertBox", "Merry Christmas!");
    };
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
    if  (nhour < 12) {
      if (getCookie("opAMPM") === "show") {
        innerHTML("clockBox", hourtf + ":" + nmin + ap);
      } else {
        innerHTML("clockBox", hourtf + ":" + nmin);
      };
    } else {
      if (getCookie("opAMPM") === "show") {
        innerHTML("clockBox", hourtf + ":" + nmin + ap);
      } else {
        innerHTML("clockBox", hourtf + ":" + nmin);
      };
    };
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
  if (main && document.activeElement.tagName != "INPUT") {
    e = e || window.event;
    if (e.keyCode === 27) {
      clearMenu("true");
    } else if (e.keyCode === 79) {
      clearMenu("false");
      styleVisibility(1000, "opM", "visible");
      styleOpacity(1000, "opM", 0.9);
    } else if (e.keyCode === 78) {
      opChBkImgFnctn();
    } else if (e.keyCode === 71) {
      opGryscl();
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

// Online/offline detection
function showUnsplash() {
  if (main) {
    styleOpacity(2000, "unsplash", "0");
    setTimeout(function() {
      document.getElementById("unsplash").innerHTML = "Images provided by <a href='https://unsplash.com' target='_blank'>unsplash.com</a>";
    }, 2501);
    styleOpacity(2502, "unsplash", "1");
  };
};
function doConnectFunction() {
  document.getElementById("unsplash").innerHTML = "Connected";
  showUnsplash();
};
function doNotConnectFunction() {
  document.getElementById("unsplash").innerHTML = "Not connected";
  showUnsplash();
};
var i = new Image();
i.onload = doConnectFunction;
i.onerror = doNotConnectFunction;
i.src = 'http://gfx2.hotmail.com/mail/uxp/w4/m4/pr014/h/s7.png?d=' + escape(Date());

// Run when page finished loading
window.onload = function() {
  styleOpacity(0, "body", 1);
  if (getCookie("opGryscl") === "false") {
    styleGrayscale(50, "header", "false");
  };
  if (main) {
    styleOpacity(100, "options", 1);
    styleOpacity(200, "unsplash", 1);
  };
  styleOpacity(300, "title", 1);
  styleOpacity(400, "clockBox", 1);
  styleOpacity(500, "dateBox", 1);
  if (getCookie("opWlcmMsgs") === "show") {
    styleOpacity(600, "alertBox", 1);
  };
  if (main) {
    styleOpacity(700, "linkDiv", 1);
  } else {
    document.getElementById("linkDiv").innerHTML = "";
  };
  setTimeout(opSrchBx, 800);
};
