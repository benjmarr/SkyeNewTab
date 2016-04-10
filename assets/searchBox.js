// Copyright Benjamin Developments (c) 2015 - All rights reserved

if (getCookie("opSrchBx") === "") {
  setCookie("opSrchBx", "google", 365);
};
var opSrchBx = function() {
  if (getCookie("opSrchBx") === "hide") {
    innerHTML("srchBxChcsHS", "Show the search box");
    styleOpacity(0, "srchBx", 0);
    styleVisibility(300, "srchBx", "hidden");
  } else if (getCookie("opSrchBx") === "show") {
    setCookie("opSrchBx", "google", 365);
    opSrchBx();
  } else {
    innerHTML("srchBxChcsHS", "Hide the search box");
    styleOpacity(0, "srchBx", 1);
    styleVisibility(0, "srchBx", "visible");
  };
  if (getCookie("opSrchBx") === "google") {
    innerHTML("srchBx", "<form method='get' action='https://www.google.com/search'><img src='assets/images/link/google.png' alt='Google Search' class='srchBxImg' /><input type='text' name='q' size='31' id='srchImg' /></form>");
  } else if (getCookie("opSrchBx") === "twitter") {
    innerHTML("srchBx", "<form method='get' action='https://www.twitter.com/search'><img src='assets/images/link/twtr.png' alt='Twitter Search' class='srchBxImg' /><input type='text' name='q' size='31' id='srchImg' /></form>");
  } else if (getCookie("opSrchBx") === "facebook") {
    innerHTML("srchBx", "<form method='get' action='https://www.facebook.com/search/top'><img src='assets/images/link/fb.png' alt='Facebook Search' class='srchBxImg' /><input type='text' name='q' size='31' id='srchImg' /></form>");
  } else if (getCookie("opSrchBx") === "youtube") {
    innerHTML("srchBx", "<form method='get' action='https://www.youtube.com/results'><img src='assets/images/link/utube.png' alt='YouTube Search' class='srchBxImg' /><input type='text' name='search_query' size='31', id='srchImg' /></form>");
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
innerHTML("srchBxChcs1", "Google Search Engine");
document.getElementById("srchBxChcs1").addEventListener("click", function() {
  setCookie("opSrchBx", "google", 365);
  opSrchBx();
}, false);
innerHTML("srchBxChcs2", "Twitter Search Engine");
document.getElementById("srchBxChcs2").addEventListener("click", function() {
  setCookie("opSrchBx", "twitter", 365);
  opSrchBx();
}, false);
innerHTML("srchBxChcs3", "Facebook Search Engine");
document.getElementById("srchBxChcs3").addEventListener("click", function() {
  setCookie("opSrchBx", "facebook", 365);
  opSrchBx();
}, false);
innerHTML("srchBxChcs4", "YouTube Search Engine");
document.getElementById("srchBxChcs4").addEventListener("click", function() {
  setCookie("opSrchBx", "youtube", 365);
  opSrchBx();
}, false);
