// Copyright Benjamin Developments (c) 2017 - All rights reserved
var rl = "https://github.com/BenAndy/SkyeNewTab/tree/master";
var cud = "000005";

// Cookie handlers
function sc(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
};
function gc(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  };
  return "";
};

// Disable right click
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

// Display alert message if need be
if (gc("alrtmsg") != cud) {
  $("#am").css({"visibility": "visible", "opacity": "0.9"});
  sc("alrtmsg", cud, 99*99);
};

// Get name
var rum = function() {
  var pn = prompt("What would you like to be called? You can change your name later in the options menu if need be. If you don't wish to have your name displayed, just press [ENTER].", "Your name");
  if (pn === "Your name" || pn === "" || pn === null) {
    sc("n", "false", 99*99);
  } else {
    sc("n", pn, 99*99);
  };
};
if (gc("n") === "") {
  rum();
};

// Background image & information
var bn = Array(221, 222);
var iud = "Friday 7<sup>th</sup> April, 2017";
var bo = function() {
  return bn[Math.floor(Math.random() * bn.length)];
};
var sbi = bo();
$("#b").css({"background-image": "url('a/i/b/" + sbi + ".jpg')"});
$("#iue").html(iud);
var bii = function(x, y, z) {
  z = "https://unsplash.com/@" + z;
  $("#bii0").html(y);
  $("#bii1").html("<a target='_blank' href='" + z + "'>" + z + "</a>");
  $("#bii2").html("<a target='_blank' href='https://unsplash.com/photos/" + x + "'>" + "https://unsplash.com/photos/" + x + "</a>");
  $("#bii3").html("<a target='_blank' href='" + z + "/portfolio'>Click to see</a>");
};
if (sbi === bn[0]) {
  bii("VfUN94cUy4o", "David Marcu", "davidmarcu");
} else if (sbi === bn[1]) {
  bii("Y_YSuBfQCmI", "Ishan @seefromthesky", "seefromthesky");
};

// Set/Read/Change/Open options
    // Close all menus
var cn = function(x) {
  var ms = Array("mom", "dfm", "sbr", "biim", "am", "kcm", "ildm");
  var y = function(z) {
    setTimeout(function() {
      $("#" + z).css({"visibility": "hidden"});
    }, 301);
  };
  for (i = 0; i < ms.length; i++) {
    $("#" + ms[i]).css({"opacity": "0"});
    y(ms[i]);
  };
  if (x) {
    setTimeout(function() {
      $("#mom").css({"visibility": "visible", "opacity": "0.9"});
      $("#o").css({"opacity": "0"});
      setTimeout(function() {
        $("#o").css({"visibility": "hidden"});
      }, 301);
    }, 400);
  } else {
    $("#o").css({"opacity": "1", "visibility": "visible"});
  };
};
    // Close menu button
$("#cnmom").on("click", function() {
  cn();
});
$("#cndfm").on("click", function() {
  cn();
});
$("#cnsbr").on("click", function() {
  cn();
});
$("#cnbiim").on("click", function() {
  cn();
});
$("#cnam").on("click", function() {
  cn();
});
$("#cnkcm").on("click", function() {
  cn();
});
$("#cnildm").on("click", function() {
  cn();
});
    // Open options menu
$("#o").on("click", function() {
  cn(true);
});
    // Toggle background grayscale
if (gc("ogs") === "") {
  sc("ogs", "f", 99*99);
};
$("#gs").on("click", function() {
  if (gc("ogs") === "f") {
    sc("ogs", "t", 99*99);
    $("#b").css({"webkit-filter": "grayscale(1)"});
  } else {
    sc("ogs", "f", 99*99);
    $("#b").css({"webkit-filter": "grayscale(0)"});
  };
});
    // Toggle 24 hour time
if (gc("otht") === "") {
  sc("otht", "12", 99*99);
};
$("#tht").on("click", function() {
  if (gc("otht") === "24") {
    sc("otht", "12", 99*99);
  } else {
    sc("otht", "24", 99*99);
  };
});
    // Toggle AM/PM visibility
if (gc("oap") === "") {
  sc("oap", "v", 99*99);
};
$("#ap").on("click", function() {
  if (gc("oap") === "v") {
    sc("oap", "h", 99*99);
  } else {
    sc("oap", "v", 99*99);
  };
  if (gc("otht") === "24") {
    sc("otht", "12", 99*99);
    sc("oap", "v", 99*99);
  };
});
    // Change date format
if (gc("dfo") === "") {
  sc("dfo", "0", 99*99);
};
$("#df").on("click", function() {
  cn();
  setTimeout(function() {
    $("#dfm").css({"visibility": "visible", "opacity": "0.9"});
  }, 400);
});
$("#dfo0").on("click", function() {
  sc("dfo", "0", 99*99);
});
$("#dfo1").on("click", function() {
  sc("dfo", "1", 99*99);
});
$("#dfo2").on("click", function() {
  sc("dfo", "2", 99*99);
});
$("#dfo3").on("click", function() {
  sc("dfo", "3", 99*99);
});
    // Change or remove your name
$("#cu").on("click", function() {
  rum();
  cn();
});
    // Search box options
$("#osb").on("click", function() {
  cn();
  setTimeout(function() {
    $("#sbr").css({"visibility": "visible", "opacity": "0.9"});
  }, 400);
});
if (gc("osb") === "") {
  sc("osb", "g", 99*99);
};
if (gc("osbvh") === "") {
  sc("osbvh", "v", 99*99);
};
$("#sbrvh").on("click", function() {
  if (gc("osbvh") === "v") {
    sc("osbvh", "h", 99*99);
  } else {
    sc("osbvh", "v", 99*99);
  };
  ttt();
});
$("#sbr0").on("click", function() {
  sc("osb", "g", 99*99);
  sc("osbvh", "v", 99*99);
  ttt();
});
$("#sbr1").on("click", function() {
  sc("osb", "t", 99*99);
  sc("osbvh", "v", 99*99);
  ttt();
});
$("#sbr2").on("click", function() {
  sc("osb", "f", 99*99);
  sc("osbvh", "v", 99*99);
  ttt();
});
$("#sbr3").on("click", function() {
  sc("osb", "y", 99*99);
  sc("osbvh", "v", 99*99);
  ttt();
});
$("#sbr4").on("click", function() {
  sc("osb", "gi", 99*99);
  sc("osbvh", "v", 99*99);
  ttt();
});
    // View background image infomration
$("#ibi").on("click", function() {
  cn();
  setTimeout(function() {
    $("#biim").css({"visibility": "visible", "opacity": "1"});
  }, 400);
});
    // Icon Link Display
if (gc("ild") === "") {
  sc("ild", "3", 99*99);
  ild();
};
$("#ild").on("click", function() {
  cn();
  setTimeout(function() {
    $("#ildm").css({"visibility": "visible", "opacity": "1"});
  }, 400);
});
$("#ild0").on("click", function() {
  sc("ild", "0", 99*99);
  ild();
});
$("#ild1").on("click", function() {
  sc("ild", "1", 99*99);
  ild();
});
$("#ild2").on("click", function() {
  sc("ild", "2", 99*99);
  ild();
});
$("#ild3").on("click", function() {
  sc("ild", "3", 99*99);
  ild();
});
function ild() {
  $("#l0, #l1, #l2, #l3, #l4, #l5").css({"transition": "-webkit-filter 0.5s"});
  if (gc("ild") === "0") {
    $("#l0, #l1, #l2, #l3, #l4, #l5").css({"opacity": "1", "webkit-filter": "grayscale(0)"});
  } else if (gc("ild") === "1") {
    $("#l0, #l1, #l2, #l3, #l4, #l5").css({"opacity": "1", "webkit-filter": "grayscale(1)"});
  } else if (gc("ild") === "2") {
    $("#l0, #l1, #l2, #l3, #l4, #l5").css({"opacity": "0"});
  } else if (gc("ild") === "3") {
    $("#l0, #l1, #l2, #l3, #l4, #l5").css({"opacity": "1", "webkit-filter": "grayscale(1)"});
    $("#l0").on("mouseover", function() {if (gc("ild") === "3") {$("#l0").css({"webkit-filter": "grayscale(0)"});};});
    $("#l0").on("mouseout", function() {$("#l0").css({"webkit-filter": "grayscale(1)"});});
    $("#l1").on("mouseover", function() {if (gc("ild") === "3") {$("#l1").css({"webkit-filter": "grayscale(0)"});};});
    $("#l1").on("mouseout", function() {$("#l1").css({"webkit-filter": "grayscale(1)"});});
    $("#l2").on("mouseover", function() {if (gc("ild") === "3") {$("#l2").css({"webkit-filter": "grayscale(0)"});};});
    $("#l2").on("mouseout", function() {$("#l2").css({"webkit-filter": "grayscale(1)"});});
    $("#l3").on("mouseover", function() {if (gc("ild") === "3") {$("#l3").css({"webkit-filter": "grayscale(0)"});};});
    $("#l3").on("mouseout", function() {$("#l3").css({"webkit-filter": "grayscale(1)"});});
    $("#l4").on("mouseover", function() {if (gc("ild") === "3") {$("#l4").css({"webkit-filter": "grayscale(0)"});};});
    $("#l4").on("mouseout", function() {$("#l4").css({"webkit-filter": "grayscale(1)"});});
    $("#l5").on("mouseover", function() {if (gc("ild") === "3") {$("#l5").css({"webkit-filter": "grayscale(0)"});};});
    $("#l5").on("mouseout", function() {$("#l5").css({"webkit-filter": "grayscale(1)"});});
  };
};
    // Keyboard controls
$("#kc").on("click", function() {cn();
  setTimeout(function() {
    $("#kcm").css({"visibility": "visible", "opacity": "1"});
  }, 400);
});
document.addEventListener("keydown", function(e) {
  if (document.activeElement.tagName != "INPUT") {
    e = e || window.event;
    if (e.keyCode === 27) {
      cn();
    } else if (e.keyCode === 71) {
      if (gc("ogs") === "f") {
        sc("ogs", "t", 99*99);
        $("#b").css({"webkit-filter": "grayscale(1)"});
      } else {
        sc("ogs", "f", 99*99);
        $("#b").css({"webkit-filter": "grayscale(0)"});
      };
    } else if (e.keyCode === 79) {
      cn(true);
    } else if (e.keyCode === 73) {
      cn();
      setTimeout(function() {
        $("#am").css({"visibility": "visible", "opacity": "0.9"});
      }, 400);
    };
  };
}, false);

// Clock and date
var nd;
var nm;
var ne;
var st;
var htf;
var td = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var tm = new Array ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
setInterval(c, 100);
function c() {
  var d = new Date();
  nd = d.getDay();
  nm = d.getMonth();
  ne = d.getDate();
  var nh = d.getHours(), nmm = d.getMinutes(), ap;
  var th = d.getHours();
  if (nh === 0) {
    ap = " AM";
    nh = 12;
  } else if (nh < 12) {
    ap = " AM";
  } else if (nh === 12) {
    ap = " PM";
  } else if (nh > 12) {
    ap = " PM";
    nh -= 12;
  };
  if (nmm <= 9) {
    nmm = "0" + nmm;
  };
  if (ne === 1 || ne === 21 || ne === 31) {
    st = "st";
  } else if (ne === 2 || ne === 22) {
    st = "nd";
  } else if (ne === 3 || ne === 23) {
    st = "rd";
  } else {
    st = "th";
  };
  var nnn;
  if (gc("n") != "false") {
    nnn = true;
  };
  if (th < 12) {
    if (nnn) {
      $("#ab").html("Good morning, " + gc("n"));
    } else {
      $("#ab").html("Good morning");
    };
  } else if (th < 18) {
    if (nnn) {
      $("#ab").html("Good afternoon, " + gc("n"));
    } else {
      $("#ab").html("Good afternoon");
    };
  } else {
    if (nnn) {
      $("#ab").html("Good evening, " + gc("n"));
    } else {
      $("#ab").html("Good evening");
    };
  };
  if (gc("otht") === "24") {
    if (nh < 12) {
      $("#cb").html(nh + 12 + ":" + nmm);
    } else {
      $("#cb").html(nh + ":" + nmm);
    };
  } else {
    if (gc("oap") === "v") {
      $("#cb").html(nh + ":" + nmm + ap);
    } else {
      $("#cb").html(nh + ":" + nmm);
    };
  };
  if (gc("dfo") === "0") {
    $("#db").html(td[nd] + ", " + tm[nm] + " " + ne + "<sup>" + st + "</sup>");
  } else if (gc("dfo") === "1") {
    $("#db").html(tm[nm] + " " + ne + "<sup>" + st + "</sup>");
  } else if (gc("dfo") === "2") {
    $("#db").html(td[nd] + ", " + ne + " " + tm[nm]);
  } else if (gc("dfo") === "3") {
    $("#db").html(tm[nm] + " " + ne + "<sup>" + st + "</sup>");
  };
};

// Search box
var hasi = function() {
  var x = Array("0", "1", "2", "3", "4");
  for (i = 0; i < x.length; i++) {
    $("#si" + x[i]).css({"opacity": "0"});
  };
};
var msb = function(x, y) {
  $("#qb").html("<form id='formForm' method='get' action='" + x + "'><input type='text' name='q' size='31' id='si' /></form>");
  hasi();
  setTimeout(function() {
    $("#si" + y).css({"opacity": "1"});
    if (gc("osbvh") === "h") {
      hasi();
      $("#qb").css({"opacity": "0"});
    } else {
      $("#qb").css({"opacity": "1"});
    };
  }, 100);
};
var ttt = function() {
  if (gc("osb") === "g") {
    msb("https://www.google.com/search", 0);
  } else if (gc("osb") === "t") {
    msb("https://www.twitter.com/search", 1);
  } else if (gc("osb") === "f") {
    msb("https://www.facebook.com/search/top", 2);
  } else if (gc("osb") === "y") {
    msb("https://www.youtube.com/reults", 3);
  } else if (gc("osb") === "gi") {
    msb("https://www.github.com/search", 4);
  };
};
ttt();

// Hotlinks click
var rp = function(x) {
  $("#a").css({"background-color": "#00000", "opacity": "0"});
  window.location = x;
};
document.getElementById("l0").addEventListener("click", function() {
  rp("https://www.google.com");
}, false);
document.getElementById("l1").addEventListener("click", function() {
  rp("https://www.facebook.com");
}, false);
document.getElementById("l2").addEventListener("click", function() {
  rp("https://www.instagram.com");
}, false);
document.getElementById("l3").addEventListener("click", function() {
  rp("https://www.pinterest.com");
}, false);
document.getElementById("l4").addEventListener("click", function() {
  rp("https://www.twitter.com");
}, false);
document.getElementById("l5").addEventListener("click", function() {
  rp("https://youtube.com");
}, false);

// Page load complete
window.onload = function() {
  $("#a").css({"opacity": "1"});
  if (gc("ogs") === "f") {
    $("#b").css({"webkit-filter": "grayscale(0)"});
  };
  ild();
  setTimeout(function() {;
    $("#o").css({"opacity": "1"});
    $("#dt").css({"opacity": "1"});
    $("#cb").css({"opacity": "1"});
    $("#db").css({"opacity": "1"});
    $("#ab").css({"opacity": "1"});
  }, 300);
  setTimeout(function() {
    $("#dt").css({"opacity": "0"});
    setTimeout(function() {
      $("#dt").html("Skye New Tab");
      setTimeout(function() {
        $("#dt").css({"opacity": "1"});
      }, 99);
    }, 501);
  }, 2300);
  $.getJSON("../manifest.json", function(amvf) {
    $("#amv").html(amvf.version);
  });
};

// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-89454896-3']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
