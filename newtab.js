// Copyright Benjamin (c) All rights reserved - 2016

console.log("Skye New Tab page copyright (c) Benjamin, 2016 - All rights reserved.");
var backgroundNumber = Array(41,42,43,44,45,46,47,48,49,50,51,32,33,34,35,36,37,38,39,40);
document.getElementById("ImageUpdateDate").innerHTML = "Tuesday, 26<sup>th</sup> January 2016";
// NOTE Maximum of 20 backgrounds NOTE Add number onto end for new images, delete lowest number (This is just a weird developer note)
var PAGEurl = "https://github.com/BenAndy/SkyeNewTab/tree/master";
var randBack = function() {
  return backgroundNumber[Math.floor(Math.random() * backgroundNumber.length)];
};

var currentBackgroundID;
var backgroundChange = function(id) {
  if (id === "random") {
    currentBackgroundID = randBack();
    document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
  } else {
    document.getElementById("header").style.backgroundImage = "url('content/background/" + id + ".jpg')";
  }
};

backgroundChange("random");

// Image data
var unsplashImageData = function(imgUrl, imgAuth, imgAuthPro) {
  // Feature soon to come
};

if (currentBackgroundID === 41) {

} else if (currentBackgroundID === 42) {
  unsplashImageData("https://unsplash.com/photos/hIMdKs_0cSE", "Sylvain Guiheneuc", "https://unsplash.com/sylvain_guiheneuc");
} else if (currentBackgroundID === 43) {
  unsplashImageData("https://unsplash.com/photos/T8gIOL3_sdI", "Frances Gunn", "https://unsplash.com/francesgunn");
} else if (currentBackgroundID === 44) {
  unsplashImageData("https://unsplash.com/photos/85hdWh8KtR4", "Jean-Marie Grange", "https://unsplash.com/jeanmariegrange");
} else if (currentBackgroundID === 45) {
  unsplashImageData("https://unsplash.com/photos/FQgHHJzbwo0", "Leeroy", "https://unsplash.com/leeroy");
} else if (currentBackgroundID === 46) {
  unsplashImageData("https://unsplash.com/photos/ywnnwzcdR5o", "Jonathan Bean", "https://unsplash.com/jonathanbean");
} else if (currentBackgroundID === 47) {
  unsplashImageData("https://unsplash.com/photos/r75qppvP-FE", "Eric Huang", "https://unsplash.com/erichuang78910");
} else if (currentBackgroundID === 48) {
  unsplashImageData("https://unsplash.com/photos/DjlKxYFJlTc", "Elliott Engelmann", "https://unsplash.com/elliottengelmann");
} else if (currentBackgroundID === 49) {
  unsplashImageData("https://unsplash.com/photos/Xwk4gkiMNGc", "Oliver & Hen Pritchard-Barrett", "https://unsplash.com/olliepb");
} else if (currentBackgroundID === 50) {
  unsplashImageData("https://unsplash.com/photos/2p1HOcpi14U", "Hide Obara", "https://unsplash.com/hideobara");
} else if (currentBackgroundID === 51) {
  unsplashImageData("https://unsplash.com/photos/sokDJl8L-fs", "Benjamin", "https://unsplash.com/ben_andy");
} else if (currentBackgroundID === 32) {
  unsplashImageData("", "", "");
} else if (currentBackgroundID === 33) {
  unsplashImageData("", "", "");
} else if (currentBackgroundID === 34) {
  unsplashImageData("", "", "");
} else if (currentBackgroundID === 35) {
  unsplashImageData("", "", "");
} else if (currentBackgroundID === 36) {
  unsplashImageData("", "", "");
} else if (currentBackgroundID === 37) {
  unsplashImageData("", "", "");
} else if (currentBackgroundID === 38) {
  unsplashImageData("", "", "");
} else if (currentBackgroundID === 39) {
  unsplashImageData("", "", "");
} else if (currentBackgroundID === 40) {
  unsplashImageData("", "", "");
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

document.getElementById("shortcutList").addEventListener("click", function() {
  document.getElementById("shortcutMenu").style.visibility = "visible";
  document.getElementById("shortcutMenu").style.opacity = "0.9";
  document.getElementById("optionsImg").style.visibility = "visible";
  document.getElementById("optionsImg").style.opacity = "1";
  document.getElementById("optionsMenu").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("optionsMenu").style.visibility = "hidden";
  }, 600);
}, false);

document.getElementById("shortcutX").addEventListener("click", function() {
  document.getElementById("shortcutMenu").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("shortcutMenu").style.visibility = "hidden";
  }, 600);
}, false);

document.getElementById("optionsImg").addEventListener("click", function() {
  document.getElementById("optionsMenu").style.visibility = "visible";
  document.getElementById("optionsMenu").style.opacity = "0.9";
  document.getElementById("optionsImg").style.opacity = "0";
  document.getElementById("shortcutMenu").style.opacity = "0";
  setTimeout(function() {
    document.getElementById("shortcutMenu").style.visibility = "hidden";
    document.getElementById("optionsImg").style.visibility = "hidden";
  }, 600);
}, false);

document.getElementById("optionsX").addEventListener("click", function() {
  document.getElementById("optionsImg").style.visibility = "visible";
  document.getElementById("optionsMenu").style.opacity = "0";
  document.getElementById("optionsImg").style.opacity = "0.9";
  setTimeout(function() {
    document.getElementById("optionsMenu").style.visibility = "hidden";
  }, 600);
}, false);

// Options click
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
  document.getElementById("header").style.opacity = "0";
  setTimeout(function() {
    backgroundChange("random");
  }, 600);
  setTimeout(function() {
    document.getElementById("header").style.opacity = "1";
  }, 900);
}, false);

document.getElementById("optionRELOAD").addEventListener("click", function() {
  document.getElementById("optionRELOAD").innerHTML = "<a>Reloading...</a>";
  document.getElementById("optionsMenu").style.opacity = "0";
  document.getElementById("shortcutMenu").style.opacity = "0";
  document.getElementById("link").style.opacity = "0";
  document.getElementById("body").style.opacity = "0";
  setTimeout(function() {
    window.location = "";
  }, 2500);
}, false);

setTimeout(function() {
  setTimeout(function() {
    document.getElementById("quoteBox").style.opacity = "1";
  }, 3000);
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
}, 50);

setTimeout(function() {
  document.getElementById("body").style.opacity = "1";
  setTimeout(function() {
    document.getElementById("optionsImg").style.opacity = "1";
    if (getCookie("grayscaleBackCOOKIE") == 0) {
      document.getElementById("header").style.webkitFilter = "grayscale(0)";
    } else {
      document.getElementById("header").style.webkitFilter = "grayscale(1)";
    };
  }, 1500);

  setTimeout(function() {
    document.getElementById("link1").style.opacity = "0.7";
    setTimeout(function() {
      document.getElementById("link2").style.opacity = "0.7";
      setTimeout(function() {
        document.getElementById("link3").style.opacity = "0.7";
        setTimeout(function() {
          document.getElementById("link4").style.opacity = "0.7";
          setTimeout(function() {
            document.getElementById("link5").style.opacity = "0.7";
            setTimeout(function() {
              document.getElementById("link6").style.opacity = "0.7";
              setTimeout(function() {
                document.getElementById("link1").style.webkitFilter = "grayscale(1)";
                setTimeout(function() {
                  document.getElementById("link2").style.webkitFilter = "grayscale(1)";
                  setTimeout(function() {
                    document.getElementById("link3").style.webkitFilter = "grayscale(1)";
                    setTimeout(function() {
                      document.getElementById("link4").style.webkitFilter = "grayscale(1)";
                      setTimeout(function() {
                        document.getElementById("link5").style.webkitFilter = "grayscale(1)";
                        setTimeout(function() {
                          document.getElementById("link6").style.webkitFilter = "grayscale(1)";
                        }, 500);
                      }, 500);
                    }, 500);
                  }, 500);
                }, 500);
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }, 500);
}, 50);

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

  // Clock & date box
  document.getElementById("datebox").innerHTML = "" + tday[nday] + ", " +tmonth[nmonth]+ " " + ndate + "" + "<sup>" + strdndth + "</sup>";
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
      setTimeout(function() {
        document.getElementById("dateAlert").style.opacity = "1";
      }, 1000);
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
    }
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
    document.getElementById("welcomeMessage").style.opacity = "1";
  }, 500);
}

setTimeout(function() {
  document.getElementById("clockbox").style.opacity = "1";
  setTimeout(function() {
    document.getElementById("datebox").style.opacity = "1";
  }, 500);
}, 1000);

var dimScreen = 1;
var lookedConsole = 0;
document.addEventListener("keydown", function(e) {
  e = e || window.event;
  if (e.keyCode == "27") {
    document.getElementById("optionsMenu").style.opacity = "0";
    document.getElementById("shortcutMenu").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("optionsMenu").style.visibility = "hidden";
      document.getElementById("shortcutMenu").style.visibility = "hidden";
      document.getElementById("optionsImg").style.visibility = "visible";
      document.getElementById("optionsImg").style.opacity = "0.9";
    }, 600);
  } else if (e.keyCode == "79") {
    document.getElementById("optionsMenu").style.visibility = "visible";
    document.getElementById("optionsMenu").style.opacity = "0.9";
    document.getElementById("optionsImg").style.opacity = "0";
    document.getElementById("shortcutMenu").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("shortcutMenu").style.visibility = "hidden";
      document.getElementById("optionsImg").style.visibility = "hidden";
    }, 600);
  } else if (e.keyCode == "82") {
    document.getElementById("optionsMenu").style.opacity = "0";
    document.getElementById("shortcutMenu").style.opacity = "0";
    document.getElementById("link").style.opacity = "0";
    setTimeout(function() {
      document.getElementById("header").style.opacity = "0";
      setTimeout(function() {
        window.location = "";
      }, 500);
    }, 500);
  } else if (e.keyCode == "38") {
    if (dimScreen !== 1) {
      dimScreen = dimScreen + 0.1;
      document.getElementById("body").style.opacity = dimScreen;
    }
  } else if (e.keyCode == "40") {
    if (dimScreen > 0) {
      dimScreen = dimScreen - 0.1;
      document.getElementById("body").style.opacity = dimScreen;
    }
  } else if (e.keyCode == "71") {
    if (getCookie("grayscaleBackCOOKIE") == 0) {
      document.getElementById("header").style.webkitFilter = "grayscale(1)";
      setCookie("grayscaleBackCOOKIE", 1, 365);
    } else {
      document.getElementById("header").style.webkitFilter = "grayscale(0)";
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
  }
  document.getElementById("link1").onmouseout = function() {
    document.getElementById("link1").style.opacity = "0.7";
    document.getElementById("link1").style.webkitFilter = "grayscale(1)";
  }
  document.getElementById("link2").onmouseover = function() {
    iconLinkMouseover(2, "https://www.twitter.com/");
  }
  document.getElementById("link2").onmouseout = function() {
    document.getElementById("link2").style.opacity = "0.7";
    document.getElementById("link2").style.webkitFilter = "grayscale(1)";
  }
  document.getElementById("link3").onmouseover = function() {
    iconLinkMouseover(3, "https://www.facebook.com/");
  }
  document.getElementById("link3").onmouseout = function() {
    document.getElementById("link3").style.opacity = "0.7";
    document.getElementById("link3").style.webkitFilter = "grayscale(1)";
  }
  document.getElementById("link4").onmouseover = function() {
    iconLinkMouseover(4, "https://www.youtube.com/");
  }
  document.getElementById("link4").onmouseout = function() {
    document.getElementById("link4").style.opacity = "0.7";
    document.getElementById("link4").style.webkitFilter = "grayscale(1)";
  }
  document.getElementById("link5").onmouseover = function() {
    iconLinkMouseover(5, "https://www.pinterest.com/");
  }
  document.getElementById("link5").onmouseout = function() {
    document.getElementById("link5").style.opacity = "0.7";
    document.getElementById("link5").style.webkitFilter = "grayscale(1)";
  }
  document.getElementById("link6").onmouseover = function() {
    iconLinkMouseover(6, "https://www.instagram.com/");
  }
  document.getElementById("link6").onmouseout = function() {
    document.getElementById("link6").style.opacity = "0.7";
    document.getElementById("link6").style.webkitFilter = "grayscale(1)";
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
  document.getElementById("timer").style.opacity = "1";
  document.getElementById("optionsMenu").style.opacity = "0";
  document.getElementById("optionsImg").style.visibility = "visible";
  setTimeout(function() {
    document.getElementById("optionsImg").style.opacity = "1";
    document.getElementById("optionsMenu").style.visibility = "hidden";
  }, 1100);

  document.getElementById("timerButton").innerHTML = "<span id='timerStop'><a>Stop the timer</a></span>";

  document.getElementById("timerStop").addEventListener("click", function() {
    document.getElementById("timerButton").innerHTML = "Timer stopped.";
    clearInterval(secondCount);
    setTimeout(function() {
      document.getElementById("timer").style.opacity = "0";
    }, 500);
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
  document.getElementById("header").style.opacity = "0";
  setTimeout(function() {
    backgroundChange("random");
  }, 600);
  setTimeout(function() {
    document.getElementById("header").style.opacity = "1";
  }, 900);
}, 600000);
