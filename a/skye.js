// Copyright Benjamin Developments (c) 2018 - All rights reserved
var rl = "https://github.com/BenAndy/SkyeNewTab/tree/master";
var cud = "7";

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
if (gc("alrtmsg") === "") {
  sc("alrtmsg", cud, 9999);
} else if (gc("alrtmsg") != cud) {
  $("#am").css({"visibility": "visible", "opacity": "0.9"});
  sc("alrtmsg", cud, 9999);
};

// Get name
var rum = function() {
  var pn = prompt("What would you like to be called? You can change your name later in the options menu if need be. If you don't wish to have your name displayed, just press [ENTER].", "Your name");
  if (pn === "Your name" || pn === "" || pn === null) {
    sc("n", "false", 9999);
  } else {
    sc("n", pn, 9999);
  };
};
if (gc("n") === "") {
  rum();
};

// Background image & information
var bn = Array(0, 1, 2, 3);
var iud = "Friday 13<sup>th</sup> July, 2018";
var bo = function() {
  return bn[Math.floor(Math.random() * bn.length)];
};
var sbi = bo();
$("#b").css({"background-image": "url('a/i/b/" + sbi + ".jpg')"});
$("#iue").html(iud);
var bii = function(x, y, z) {
  z = "https://unsplash.com/@" + z;
  x = "https://unsplash.com/photos/" + x;
  $("#bii0").html("<a target='_blank' href='" + x + "'>Background image</a> photographed by <a target='_blank' href='" + z + "'>" + y + "</a> on <a target='_blank' href='https://unsplash.com/'>Unsplash.com</a>");
  $("#bii1").html(iud);
};
if (sbi === bn[0]) {
  bii("qe9PWdZYfdI", "Jeremy Galliani", "jeremyforlife");
} else if (sbi === bn[1]) {
  bii("iXrEw3sn87E", "Dmitry Pavlov", "mitr");
} else if (sbi === bn[2]) {
  bii("oY0EDfHGPH4", "Kalen Emsley", "kalenemsley");
} else if (sbi === bn[3]) {
  bii("fkLr2QOQitk", "Wyatt Ryan", "wryan214");
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
var clml = new Array("#cnmom", "#cndfm", "#cnsbr", "#cnbiim", "#cnam", "#cnkcm", "#cnildm");
for (var i = 0; i < clml.length; i++) {
  $(clml[i]).on("click", function(){cn();});
};
    // Open options menu
$("#o").on("click", function() {
  cn(true);
});
    // Toggle background grayscale
if (gc("ogs") === "") {
  sc("ogs", "f", 9999);
};
$("#gs").on("click", function() {
  if (gc("ogs") === "f") {
    sc("ogs", "t", 9999);
    $("#b").css({"webkit-filter": "grayscale(1)"});
  } else {
    sc("ogs", "f", 9999);
    $("#b").css({"webkit-filter": "grayscale(0)"});
  };
});
    // Toggle 24 hour time
if (gc("otht") === "") {
  sc("otht", "12", 9999);
};
$("#tht").on("click", function() {
  if (gc("otht") === "24") {
    sc("otht", "12", 9999);
  } else {
    sc("otht", "24", 9999);
  };
});
    // Toggle AM/PM visibility
if (gc("oap") === "") {
  sc("oap", "v", 9999);
};
$("#ap").on("click", function() {
  if (gc("oap") === "v") {
    sc("oap", "h", 9999);
  } else {
    sc("oap", "v", 9999);
  };
  if (gc("otht") === "24") {
    sc("otht", "12", 9999);
    sc("oap", "v", 9999);
  };
});
    // Change date format
if (gc("dfo") === "") {
  sc("dfo", "0", 9999);
};
$("#df").on("click", function() {
  cn();
  setTimeout(function() {
    $("#dfm").css({"visibility": "visible", "opacity": "0.9"});
  }, 400);
});
$("#dfo0").on("click", function() {
  sc("dfo", "0", 9999);
});
$("#dfo1").on("click", function() {
  sc("dfo", "1", 9999);
});
$("#dfo2").on("click", function() {
  sc("dfo", "2", 9999);
});
$("#dfo3").on("click", function() {
  sc("dfo", "3", 9999);
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
  sc("osb", "g", 9999);
};
if (gc("osbvh") === "") {
  sc("osbvh", "v", 9999);
};
$("#sbrvh").on("click", function() {
  if (gc("osbvh") === "v") {
    sc("osbvh", "h", 9999);
  } else {
    sc("osbvh", "v", 9999);
  };
  ttt();
});
$("#sbr0").on("click", function() {
  sc("osb", "g", 9999);
  sc("osbvh", "v", 9999);
  ttt();
});
$("#sbr1").on("click", function() {
  sc("osb", "t", 9999);
  sc("osbvh", "v", 9999);
  ttt();
});
$("#sbr2").on("click", function() {
  sc("osb", "f", 9999);
  sc("osbvh", "v", 9999);
  ttt();
});
$("#sbr3").on("click", function() {
  sc("osb", "y", 9999);
  sc("osbvh", "v", 9999);
  ttt();
});
$("#sbr4").on("click", function() {
  sc("osb", "gi", 9999);
  sc("osbvh", "v", 9999);
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
  sc("ild", "3", 9999);
  ild();
};
$("#ild").on("click", function() {
  cn();
  setTimeout(function() {
    $("#ildm").css({"visibility": "visible", "opacity": "1"});
  }, 400);
});
$("#ild0").on("click", function() {
  sc("ild", "0", 9999);
  ild();
});
$("#ild1").on("click", function() {
  sc("ild", "1", 9999);
  ild();
});
$("#ild2").on("click", function() {
  sc("ild", "2", 9999);
  ild();
});
$("#ild3").on("click", function() {
  sc("ild", "3", 9999);
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
        sc("ogs", "t", 9999);
        $("#b").css({"webkit-filter": "grayscale(1)"});
      } else {
        sc("ogs", "f", 9999);
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
var nd, nm, ne, st, htf;
var td = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var tm = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var sm = new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC");
setInterval(c, 100);
function c() {
  var d = new Date();
  nd = d.getDay();
  nm = d.getMonth();
  ne = d.getDate();
  yr = d.getYear();
  yr = yr + 1900;
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
    $("#db").html(ne + " " + sm[nm] + " " + yr);
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
  window.location = "https://www." + x;
};
$("#l0").on("click", function() {rp("google.com")});
$("#l1").on("click", function() {rp("facebook.com")});
$("#l2").on("click", function() {rp("instagram.com")});
$("#l3").on("click", function() {rp("pinterest.com")});
$("#l4").on("click", function() {rp("twitter.com")});
$("#l5").on("click", function() {rp("youtube.com")});

// Yearly anniversary
function ya() {
  $.getJSON("../manifest.json", function(json) {
    var d = new Date();
    a = d.getDate();
    b = d.getMonth();
    c = d.getYear() + 1900;
    e = a + " " + b;
    f = true;

    if (gc("yasv") === "") {
      sc("yasv", json.version, 9999);
    };
    if (gc("yan") === "") {
      sc("yan", "0", 9999);
      f = false;
    };
    if (gc("yad") === "") {
      sc("yad", e, 9999);
      sc("yay", c, 9999);
      f = false;
    };

    if (gc("yad") === e && gc("yay") != c && f) {
      // Yearly anniversary
    };
    console.log("current " + json.version + " " + a + " " + b + " " + c + " " + f);
    console.log("set     " + gc("yasv") + " " + gc("yad") + " " + gc("yay") + " " + gc("yan"));
  });
};

// Page load complete
window.onload = function() {
  $("#a").css({"opacity": "1"});
  if (gc("ogs") === "f") {
    $("#b").css({"webkit-filter": "grayscale(0)"});
  };
  ild();
  setTimeout(function() {
    var pla = new Array("#o", "#dt", "#cb", "#db", "#ab");
    for (var i = 0; i < pla.length; i++) {
      $(pla[i]).css({"opacity": "1"});
    };
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
  $.getJSON("../manifest.json", function(json) {
    $("#amv").html(json.version);
    $("#sntv").html("Skye New Tab v" + json.version);
  });
  ya();
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
