// Copyright Benjamin (c) All rights reserved - 2016

console.log("Skye New Tab page copyright (c) Benjamin, 2016 - All rights reserved.");
console.log("main.js loaded.");
var PAGEurl = "https://github.com/BenAndy/SkyeNewTab/tree/master";

// Reset function
document.getElementById("optionRESET").addEventListener("click", function() {RESET()}, false);
var RESET = function() {
  var resetConfirm = confirm("Are you sure you want to reset all settings?");
  if (resetConfirm) {
    opacity("header", 0, 0);
    opacity("unsplash", 0, 3000);
    opacity("options", 0, 0);
    opacity("link", 0, 0);
    setCookie("setBack", "", 365);
    setCookie("name", "", 365);
    setCookie("optionQUOTE", "", 365);
    setCookie("dateFormatting", "", 365);
    setCookie("showPMAM", "", 365);
    setCookie("grayscaleBackCOOKIE", "", 365);
    setCookie("iconVisi", "", 365);
    window.location = "";
  };
};

// opacity() method
var opacity = function(id, opacity, delay) {
  setTimeout(function() {
    document.getElementById(id).style.opacity = opacity;
  }, delay);
};

// grayscale() method
var grayscale = function(id, delay, truefalse) {
  setTimeout(function() {
    if (truefalse) {
      document.getElementById(id).style.webkitFilter = "grayscale(1)";
    } else {
      document.getElementById(id).style.webkitFilter = "grayscale(0)";
    };
  }, delay);
};

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

// Set your name
var getName = function() {
  var name = prompt("What's your name? If you don't wish to have your name shown, just press enter.", "Type your name here!");
  setCookie("name", name, 365);
  if (getCookie("name") === "Type your name here!" || getCookie("name") === "" || getCookie("name") === "null") {
    setCookie("name", "none", 365);
    alert("You can add your name in the options menu (Press 'O' for options...)!");
    document.getElementById("optionNAME").innerHTML = "<a>Add your name</a>";
  } else {
    alert("Thanks," + " " + name + ". You can change your name in the options menu (Press 'O' for options...)!");
    document.getElementById("optionNAME").innerHTML = "<a>Remove your name</a>";
  }
  console.log("User:" + " " + getCookie("name"));
};

if (getCookie("name") === "Type your name here!" || getCookie("name") === "" || getCookie("name") === "null") {
  getName();
} else if (getCookie("name") === "none") {
  document.getElementById("optionNAME").innerHTML = "<a>Add your name</a>";
} else {
  document.getElementById("optionNAME").innerHTML = "<a>Remove your name</a>";
};

// Show/Hide the quotes
if (getCookie("optionQUOTE") === "" || getCookie("optionQUOTE") === "true") {
  setCookie("optionQUOTE", true, 365);
  document.getElementById("optionQUOTE").innerHTML = "<a>Hide the quotes</a>";
} else {
  document.getElementById("optionQUOTE").innerHTML = "<a>Show the quotes</a>";
};

document.getElementById("optionQUOTE").addEventListener("click", function() {
  if (getCookie("optionQUOTE") === "true") {
    setCookie("optionQUOTE", false, 365);
    document.getElementById("optionQUOTE").innerHTML = "<a>Show the quotes</a>";
  } else {
    setCookie("optionQUOTE", true, 365);
    document.getElementById("optionQUOTE").innerHTML = "<a>Hide the quotes</a>";
  };
}, false);

// Icon visibility settings
document.getElementById("optionICONS").addEventListener("click", function() {
  document.getElementById("iconVisibilitySettings").style.visibility = "visible";
  opacity("iconVisibilitySettings", 0.9, 0);
  document.getElementById("optionsImg").style.visibility = "visible";
  opacity("optionsImg", 1, 0);
  opacity("optionsMenu", 0, 0);
  setTimeout(function() {
    document.getElementById("optionsMenu").style.visibility = "hidden";
  }, 600);
}, false);

document.getElementById("iconVisibilityX").addEventListener("click", function() {
  opacity("iconVisibilitySettings", 0, 0);
  setTimeout(function() {
    document.getElementById("iconVisibilitySettings").style.visibility = "hidden";
  }, 600);
}, false);

document.getElementById("iconVisi0").addEventListener("click", function() {setCookie("iconVisi", 0, 365);}, false);
document.getElementById("iconVisi1").addEventListener("click", function() {setCookie("iconVisi", 1, 365);}, false);
document.getElementById("iconVisi2").addEventListener("click", function() {setCookie("iconVisi", 2, 365);}, false);

if (getCookie("iconVisi") === "") {
  setCookie("iconVisi", 0, 365);
};

// Date formatting options
document.getElementById("optionDATEFORMAT").addEventListener("click", function() {
  document.getElementById("dateFormatMenu").style.visibility = "visible";
  opacity("dateFormatMenu", 0.9, 0);
  document.getElementById("optionsImg").style.visibility = "visible";
  opacity("optionsImg", 1, 0);
  opacity("optionsMenu", 0, 0);
  setTimeout(function() {
    document.getElementById("optionsMenu").style.visibility = "hidden";
  }, 600);
}, false);

document.getElementById("dateFormatX").addEventListener("click", function() {
  opacity("dateFormatMenu", 0, 0);
  setTimeout(function() {
    document.getElementById("dateFormatMenu").style.visibility = "hidden";
  }, 600);
}, false);

if (getCookie("dateFormatting") === "") {
  setCookie("dateFormatting", 0, 365);
};

document.getElementById("dateFormatting0").addEventListener("click", function() {setCookie("dateFormatting", 0, 365);}, false);
document.getElementById("dateFormatting1").addEventListener("click", function() {setCookie("dateFormatting", 1, 365);}, false);
document.getElementById("dateFormatting2").addEventListener("click", function() {setCookie("dateFormatting", 2, 365);}, false);
document.getElementById("dateFormatting3").addEventListener("click", function() {setCookie("dateFormatting", 3, 365);}, false);
document.getElementById("dateFormatting4").addEventListener("click", function() {setCookie("dateFormatting", 4, 365);}, false);
document.getElementById("dateFormatting5").addEventListener("click", function() {setCookie("dateFormatting", 5, 365);}, false);

// Shortcut list button
document.getElementById("shortcutList").addEventListener("click", function() {
  document.getElementById("shortcutMenu").style.visibility = "visible";
  opacity("shortcutMenu", 0.9, 0);
  document.getElementById("optionsImg").style.visibility = "visible";
  opacity("optionsImg", 1, 0);
  opacity("optionsMenu", 0, 0);
  setTimeout(function() {
    document.getElementById("optionsMenu").style.visibility = "hidden";
  }, 600);
}, false);

// Shortcut close button
document.getElementById("shortcutX").addEventListener("click", function() {
  opacity("shortcutMenu", 0, 0);
  setTimeout(function() {
    document.getElementById("shortcutMenu").style.visibility = "hidden";
  }, 600);
}, false);

// Options open image button
document.getElementById("optionsImg").addEventListener("click", function() {
  document.getElementById("optionsMenu").style.visibility = "visible";
  opacity("optionsMenu", 0.9, 0);
  opacity("optionsImg", 0, 0);
  opacity("shortcutMenu", 0, 0);
  opacity("dateFormatMenu", 0, 0);
  opacity("iconVisibilitySettings", 0, 0);
  opacity("imageInformationMenu", 0, 0);
  setTimeout(function() {
    document.getElementById("optionsImg").style.visibility = "hidden";
    document.getElementById("shortcutMenu").style.visibility = "hidden";
    document.getElementById("dateFormatMenu").style.visibility = "hidden";
  }, 600);
}, false);

// Options close button
document.getElementById("optionsX").addEventListener("click", function() {
  document.getElementById("optionsImg").style.visibility = "visible";
  opacity("optionsMenu", 0, 0);
  opacity("optionsImg", 0.9, 0);
  setTimeout(function() {
    document.getElementById("optionsMenu").style.visibility = "hidden";
  }, 600);
}, false);

// Hide/Show the PM/AM
document.getElementById("optionPMAM").addEventListener("click", function() {
  if (getCookie("showPMAM") === "true") {
    setCookie("showPMAM", "false", 365);
  } else {
    setCookie("showPMAM", "true", 365);
  };
}, false);

document.getElementById("optionNAME").addEventListener("click", function() {
  if (getCookie("name") === "none") {
    getName();
  } else {
    setCookie("name", "none", 365);
    document.getElementById("optionNAME").innerHTML = "<a>Add your name</a>";
  }
}, false);

document.getElementById("optionNEWBACK").addEventListener("click", function() {
  opacity("header", 0, 0);
  setTimeout(function() {
    backgroundChange("random");
  }, 600);
  setTimeout(function() {
    opacity("header", 1, 0);
  }, 900);
}, false);

document.getElementById("optionRELOAD").addEventListener("click", function() {window.location = "";}, false);

setTimeout(function() {
  setInterval(function() {
    if (getCookie("optionQUOTE") === "true") {
      opacity("quoteBox", 1, 0);
    } else {
      opacity("quoteBox", 0, 0);
    };
  }, 10);
  var quoteChoose = Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
  var quoteNumber = quoteChoose[Math.floor(Math.random() * quoteChoose.length)];
  setTimeout(function() {
    // NOTE Change quote number 4
    if (quoteNumber === 1) {
      document.getElementById("quoteBox").innerHTML = "<sup>&quot;</sup>Do not let the behavior of others destroy your inner peace.<sup>&quot;</sup> - Dalai Lama";
    } else if (quoteNumber === 2) {
      document.getElementById("quoteBox").innerHTML = "<sup>&quot;</sup>The true secret of happiness lies in taking a genuine interest in all the details of daily life.<sup>&quot;</sup> - William Morris";
    } else if (quoteNumber === 3) {
      document.getElementById("quoteBox").innerHTML = "<sup>&quot;</sup>When we are in love we often doubt that which we most believe.<sup>&quot;</sup> - Francois de La Rochefoucauld";
    } else if (quoteNumber === 4) {
      document.getElementById("quoteBox").innerHTML = "<sup>&quot;</sup>Anyone who has ever made anything of importance was disciplined.<sup>&quot;</sup> - Andrew Hendrixson";
    } else if (quoteNumber === 5) {
      document.getElementById("quoteBox").innerHTML = "<sup>&quot;</sup>Don’t spend time beating on a wall, hoping to transform it into a door.<sup>&quot;</sup> -  Coco Chanel";
    } else if (quoteNumber === 6) {
      document.getElementById("quoteBox").innerHTML = "<sup>&quot;</sup>Creativity is intelligence having fun.<sup>&quot;</sup> - Albert Einstein";
    } else if (quoteNumber === 7) {
      document.getElementById("quoteBox").innerHTML = "<sup>&quot;</sup>Optimism is the one quality more associated with success and happiness than any other.<sup>&quot;</sup> - Brian Tracy";
    } else if (quoteNumber === 8) {
      document.getElementById("quoteBox").innerHTML = "<sup>&quot;</sup>Always keep your eyes open. Keep watching. Because whatever you see can inspire you.<sup>&quot;</sup> - Grace Coddington";
    } else if (quoteNumber === 9) {
      document.getElementById("quoteBox").innerHTML = "<sup>&quot;</sup>What you get by achieving your goals is not as important as what you become by achieving your goals.<sup>&quot;</sup> - Henry David Thoreau";
    } else if (quoteNumber === 10) {
      document.getElementById("quoteBox").innerHTML = "<sup>&quot;</sup>If the plan doesn’t work, change the plan, but never the goal.<sup>&quot;</sup> - Author Unknown";
    } else if (quoteNumber === 11) {
      document.getElementById("quoteBox").innerHTML = "<sup>&quot;</sup>I destroy my enemies when I make them my friends.<sup>&quot;</sup> - Abraham Lincoln";
    } else if (quoteNumber === 12) {
      document.getElementById("quoteBox").innerHTML = "<sup>&quot;</sup>Don’t live the same year 75 times and call it a life.<sup>&quot;</sup> - Robin Sharma";
    } else if (quoteNumber === 13) {
      document.getElementById("quoteBox").innerHTML = "<sup>&quot;</sup>You cannot save people, you can just love them.<sup>&quot;</sup> - Anaïs Nin";
    } else if (quoteNumber === 14) {
      document.getElementById("quoteBox").innerHTML = "<sup>&quot;</sup>It wasn’t raining when Noah built the ark.<sup>&quot;</sup> - Howard Ruff";
    } else if (quoteNumber === 15) {
      document.getElementById("quoteBox").innerHTML = "<sup>&quot;</sup>Take your dreams seriously.<sup>&quot;</sup> - Author Unknown";
    } else if (quoteNumber === 16) {
      document.getElementById("quoteBox").innerHTML = "<sup>&quot;</sup>There is no way to happiness. Happiness is the way.<sup>&quot;</sup> - Thich Nhat Hanh";
    } else if (quoteNumber === 17) {
      document.getElementById("quoteBox").innerHTML = "<sup>&quot;</sup>Champions keep playing until they get it right.<sup>&quot;</sup> - Billie Jean King";
    } else if (quoteNumber === 18) {
      document.getElementById("quoteBox").innerHTML = "<sup>&quot;</sup>You will succeed because most people are lazy.<sup>&quot;</sup> - Shahir Zag";
    } else if (quoteNumber === 19) {
      document.getElementById("quoteBox").innerHTML = "<sup>&quot;</sup>Genius is 1% inspiration, 99% perspiration.<sup>&quot;</sup> - Thomas Edison";
    } else if (quoteNumber === 20) {
      document.getElementById("quoteBox").innerHTML = "<sup>&quot;</sup>How come you can drink a drink, but you can't food a food.<sup>&quot;</sup> - Jaden Smith";
    }
  }, 100);
}, 2000);

setTimeout(function() {
  opacity("body", 1, 0);
  opacity("optionsImg", 1, 1500);
  opacity("unsplash", 1, 3500);
  if (getCookie("grayscaleBackCOOKIE") == 0) {
    grayscale("header", 1500, false);
  } else {
    grayscale("header", 1500, true);
  };
}, 50);

var checkIconVisiInterval;
var checkIconVisi = function() {
  checkIconVisiInterval = setInterval(function() {
    if (getCookie("iconVisi") === "0") {
      opacity("link1", 0.8, 0);
      opacity("link2", 0.8, 0);
      opacity("link3", 0.8, 0);
      opacity("link4", 0.8, 0);
      opacity("link5", 0.8, 0);
      opacity("link6", 0.8, 0);
      grayscale("link1", 0, true);
      grayscale("link2", 500, true);
      grayscale("link3", 1000, true);
      grayscale("link4", 1500, true);
      grayscale("link5", 2000, true);
      grayscale("link6", 2500, true);
    } else if (getCookie("iconVisi") === "1") {
      opacity("link1", 0.8, 0);
      opacity("link2", 0.8, 0);
      opacity("link3", 0.8, 0);
      opacity("link4", 0.8, 0);
      opacity("link5", 0.8, 0);
      opacity("link6", 0.8, 0);
      grayscale("link1", 0, false);
      grayscale("link2", 500, false);
      grayscale("link3", 1000, false);
      grayscale("link4", 1500, false);
      grayscale("link5", 2000, false);
      grayscale("link6", 2500, false);
    } else if (getCookie("iconVisi") === "2") {
      opacity("link1", 0, 0);
      opacity("link2", 0, 0);
      opacity("link3", 0, 0);
      opacity("link4", 0, 0);
      opacity("link5", 0, 0);
      opacity("link6", 0, 0);
    };
  }, 100);
};
setTimeout(function() {
  checkIconVisi();
}, 2000);

var tday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var tmonth = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

setInterval(GetClock,1000);
function GetClock() {
  var d = new Date();
  var nday = d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
  var d = new Date();
  var nhour = d.getHours(),nmin=d.getMinutes(),ap;
  var thour = d.getHours();

  if (nhour == 0) {
    ap = " AM";
    nhour=12;
  } else if (nhour < 12) {
    ap = " AM";
  } else if (nhour == 12) {
    ap = " PM";
  } else if (nhour > 12) {
    ap = " PM";
    nhour-=12;
  }

  if (nmin <= 9) {
    nmin = "0" + nmin;
  }

  if (ndate === 1 || ndate === 21 || ndate === 31) {
    var strdndth = "st";
  } else if (ndate === 2 || ndate === 22) {
    var strdndth = "nd";
  } else if (ndate === 3 || ndate === 23) {
    var strdndth = "rd";
  } else {
    var strdndth = "th";
  }

  var setDateFormat = function(formatID) {
    if (formatID === "0") {
      document.getElementById("datebox").innerHTML = tday[nday] + ", " + tmonth[nmonth] + " " + ndate + "<sup>" + strdndth + "</sup>";
    } else if (formatID === "1") {
      document.getElementById("datebox").innerHTML = tmonth[nmonth] + " " + ndate + "<sup>" + strdndth + "</sup>";
    } else if (formatID === "2") {
      document.getElementById("datebox").innerHTML = tday[nday] + ", " + ndate + "<sup>" + strdndth + "</sup>" + " " + tmonth[nmonth];
    } else if (formatID === "3") {
      document.getElementById("datebox").innerHTML = tday[nday] + " " + "the" + " " + ndate + "<sup>" + strdndth + "</sup> of" + " " + tmonth[nmonth];
    } else if (formatID === "4") {
      document.getElementById("datebox").innerHTML = tday[nday];
    } else if (formatID === "5") {
      document.getElementById("datebox").innerHTML = tday[nday] + ", " + ndate + " " + tmonth[nmonth];
    };
  };

  // Clock & date box
  setDateFormat(getCookie("dateFormatting"));
  if (getCookie("showPMAM") === "") {
    setCookie("showPMAM", "true", 365);
    document.getElementById("optionPMAM").innerHTML = "<a>Hide the 'PM' and 'AM'</a>";
    document.getElementById("clockbox").innerHTML = "" + nhour + ":" + nmin + ap + "";
  } else if (getCookie("showPMAM") === "true") {
    document.getElementById("optionPMAM").innerHTML = "<a>Hide the 'PM' and 'AM'</a>";
    document.getElementById("clockbox").innerHTML = "" + nhour + ":" + nmin + ap + "";
  } else {
    setCookie("showPMAM", "false", 365);
    document.getElementById("optionPMAM").innerHTML = "<a>Show the 'PM' and 'AM'</a>";
    document.getElementById("clockbox").innerHTML = "" + nhour + ":" + nmin + "";
  };

  // Date Alerts
  setTimeout(function() {
    var dateAlert = function(thisAlert) {
      document.getElementById("welcomeMessage").style.visibility = "hidden";
      document.getElementById("dateAlert").innerHTML = thisAlert;
      opacity("dateAlert", 1, 1000);
    };
    if (tmonth[nmonth] === "January") {
      if (ndate === 1) {
        dateAlert("Happy new year!");
      };
      if (ndate === 6) {
        dateAlert("Rest in piece Kevin Jobe");
      }
    } else if (tmonth[nmonth] === "February") {

    } else if (tmonth[nmonth] === "March") {
      if (ndate === 27) {
        dateAlert("Happy Easter!");
      };
    } else if (tmonth[nmonth] === "April") {

    } else if (tmonth[nmonth] === "May") {

    } else if (tmonth[nmonth] === "June") {

    } else if (tmonth[nmonth] === "July") {

    } else if (tmonth[nmonth] === "August") {

    } else if (tmonth[nmonth] === "September") {

    } else if (tmonth[nmonth] === "October") {
      if (ndate === 17) {
        dateAlert("Happy birthday, Benjamin!");
      };
    } else if (tmonth[nmonth] === "November") {
      if (ndate  === 13) {
        dateAlert("#PrayForParis");
      };
    } else if (tmonth[nmonth] === "December") {
      if (ndate === 25) {
        dateAlert("Merry Christmas!");
      };
    } else {
      document.getElementById("dateAlert").style.visibility = "hidden";
    };
  }, 1000);

  setTimeout(function() {
    if (thour < 12) {
      if (getCookie("name") === "none") {
        document.getElementById("welcomeMessage").innerHTML = "Good morning";
      } else {
        document.getElementById("welcomeMessage").innerHTML = "Good morning," + " " + getCookie("name");
      }
    } else if (thour < 18) {
      if (getCookie("name") === "none") {
        document.getElementById("welcomeMessage").innerHTML = "Good afternoon";
      } else {
        document.getElementById("welcomeMessage").innerHTML = "Good afternoon," + " " + getCookie("name");
      }
    } else {
      if (getCookie("name") === "none") {
        document.getElementById("welcomeMessage").innerHTML = "Good evening";
      } else {
        document.getElementById("welcomeMessage").innerHTML = "Good evening," + " " + getCookie("name");
      }
    };
  }, 500);
  opacity("welcomeMessage", 1, 500);
};

opacity("clockbox", 1, 1000);
opacity("datebox", 1, 1500);

var dimScreen = 1;
var lookedConsole = 0;
document.addEventListener("keydown", function(e) {
  e = e || window.event;
  if (e.keyCode == "27") {
    opacity("optionsMenu", 0, 0);
    opacity("shortcutMenu", 0, 0);
    opacity("dateFormatMenu", 0, 0);
    opacity("iconVisibilitySettings", 0, 0);
    opacity("imageInformationMenu", 0, 0);
    opacity("optionsImg", 0.9, 600);
    setTimeout(function() {
      document.getElementById("optionsMenu").style.visibility = "hidden";
      document.getElementById("shortcutMenu").style.visibility = "hidden";
      document.getElementById("dateFormatMenu").style.visibility = "hidden";
      document.getElementById("optionsImg").style.visibility = "visible";
    }, 600);
  } else if (e.keyCode == "79") {
    document.getElementById("optionsMenu").style.visibility = "visible";
    opacity("optionsMenu", 0.9, 0);
    opacity("optionsImg", 0, 0);
    opacity("shortcutMenu", 0, 0);
    opacity("dateFormatMenu", 0, 0);
    opaicty("iconVisibilitySettings", 0, 0);
    opacity("imageInformationMenu", 0, 0);
    setTimeout(function() {
      document.getElementById("shortcutMenu").style.visibility = "hidden";
      document.getElementById("dateFormatMenu").style.visibility = "hidden";
      document.getElementById("optionsImg").style.visibility = "hidden";
    }, 600);
  } else if (e.keyCode == "82") {
    window.location = "";
  } else if (e.keyCode == "38") {
    if (dimScreen !== 1) {
      dimScreen = dimScreen + 0.1;
      opacity("body", dimScreen, 0);
    }
  } else if (e.keyCode == "40") {
    if (dimScreen > 0) {
      dimScreen = dimScreen - 0.1;
      opacity("body", dimScreen, 0);
    }
  } else if (e.keyCode == "71") {
    if (getCookie("grayscaleBackCOOKIE") == 0) {
      grayscale("header", 0, true);
      setCookie("grayscaleBackCOOKIE", 1, 365);
    } else {
      grayscale("header", 0, false);
      setCookie("grayscaleBackCOOKIE", 0, 365);
    }
  } else if (e.keyCode == "123") {
    if (lookedConsole == 0) {
      console.log("\nI see you're looking at the console, aye..? Feel free to play around on here... Just don't ruin anything.\nJavaScript source: " + PAGEurl + "/newtab.js");
      lookedConsole = 1;
    };
  }
}, false);

if (getCookie("grayscaleBackCOOKIE") == "") {
  setCookie("grayscaleBackCOOKIE", 0, 365);
};

// Link icons grayscale, mouse over & click
var iconLinkMouseover = function(linkID, linkURL) {
  document.getElementById("link" + linkID).style.opacity = "1";
  document.getElementById("link" + linkID).style.webkitFilter = "grayscale(0)";
  document.getElementById("link" + linkID).addEventListener("click", function() {
    window.location = linkURL;
    document.getElementById("body").style.backgroundColor = "#FFFFFF";
    document.getElementById("body").style.opacity = "0";
  }, false);
};

setTimeout(function() {
  document.getElementById("link1").onmouseover = function() {
    iconLinkMouseover(1, "https://www.google.com/");
    clearInterval(checkIconVisiInterval);
  }
  document.getElementById("link1").onmouseout = function() {
    opacity("link1", 0.7, 0);
    grayscale("link1", 0, true);
    checkIconVisi();
  }
  document.getElementById("link2").onmouseover = function() {
    iconLinkMouseover(2, "https://www.twitter.com/");
    clearInterval(checkIconVisiInterval);
  }
  document.getElementById("link2").onmouseout = function() {
    opacity("link2", 0.7, 0);
    grayscale("link2", 0, true);
    checkIconVisi();
  }
  document.getElementById("link3").onmouseover = function() {
    iconLinkMouseover(3, "https://www.facebook.com/");
    clearInterval(checkIconVisiInterval);
  }
  document.getElementById("link3").onmouseout = function() {
    opacity("link3", 0.7, 0);
    grayscale("link3", 0, true);
    checkIconVisi();
  }
  document.getElementById("link4").onmouseover = function() {
    iconLinkMouseover(4, "https://www.youtube.com/");
    clearInterval(checkIconVisiInterval);
  }
  document.getElementById("link4").onmouseout = function() {
    opacity("link4", 0.7, 0);
    grayscale("link4", 0, true);
    checkIconVisi();
  }
  document.getElementById("link5").onmouseover = function() {
    iconLinkMouseover(5, "https://www.pinterest.com/");
    clearInterval(checkIconVisiInterval);
  }
  document.getElementById("link5").onmouseout = function() {
    opacity("link5", 0.7, 0);
    grayscale("link5", 0, true);
    checkIconVisi();
  }
  document.getElementById("link6").onmouseover = function() {
    iconLinkMouseover(6, "https://www.instagram.com/");
    clearInterval(checkIconVisiInterval);
  }
  document.getElementById("link6").onmouseout = function() {
    opacity("link6", 0.7, 0);
    grayscale("link6", 0, true);
    checkIconVisi();
  }
}, 100);

if (document.addEventListener) {
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  }, false);
} else {
  document.attachEvent("oncontextmenu", function() {
    window.event.returnValue = false;
  });
}

document.getElementById("optionTIMER").addEventListener("click", function() {setTimeout(timer,10)}, false);
var sec = 0;
var min = 0;
var hour = 0;
function timer() {
  var secondCount;
  secondCount = setInterval(time, 1000);
  opacity("timer", 1, 0);

  document.getElementById("timerButton").innerHTML = "<span id='timerStop'><a>Stop the timer</a></span>";

  document.getElementById("timerStop").addEventListener("click", function() {
    document.getElementById("timerButton").innerHTML = "Timer stopped.";
    clearInterval(secondCount);
    opacity("timer", 0, 500);
  }, false);
}

function time() {
  sec = sec + 1;

  if (sec < 10) {
    document.getElementById("timerSecond").innerHTML = "0" + sec;
  } else {
    document.getElementById("timerSecond").innerHTML = sec;
  }

  if (min < 10) {
    document.getElementById("timerMinute").innerHTML = "0" + min;
  } else {
    document.getElementById("timerMinute").innerHTMl = min;
  }

  if (hour < 10) {
    document.getElementById("timerHour").innerHTML = "0" + hour;
  } else {
    document.getElementById("timerHour").innerHTML = hour;
  }

  if (sec == 58) {
    setTimeout(function() {
      min = min + 1;
      sec = sec - 60;
    }, 1000);
  }

  if (min == 60) {
    hour = hour + 1;
    min = min - 60;
  }

  var stopHour;
  var stopMinute;
  var stopSecond;

  if (hour == 0) {
    stopHour = "no hours";
  } else if (hour == 1) {
    stopHour = "1 hour";
  } else {
    stopHour = hour + " hours";
  }
}

setInterval(function() {
  opacity("header", 0, 0);
  setTimeout(function() {
    backgroundChange("random");
  }, 600);
  opacity("header", 1, 900);
}, 600000);
