// Copyright Benjamin Developments (c) 2016 - All rights reserved

if (main) {
  if (getCookie("opSrchBx") === "") {
    setCookie("opSrchBx", "google", 365);
  };
  var opSrchBx = function() {
    if (main) {
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
        innerHTML("srchBx", "<form id='formForm' method='get' action='https://www.google.com/search'><input type='text' name='q' size='31' id='srchImg' /></form>");
        hideAllSearchImages();
        styleOpacity(5, "searchImage1", 1);
        styleVisibility(5, "searchImage1", "visible");
      } else if (getCookie("opSrchBx") === "twitter") {
        innerHTML("srchBx", "<form id='formForm' method='get' action='https://www.twitter.com/search'><input type='text' name='q' size='31' id='srchImg' /></form>");
        hideAllSearchImages();
        styleOpacity(5, "searchImage2", 1);
        styleVisibility(5, "searchImage2", "visible");
      } else if (getCookie("opSrchBx") === "facebook") {
        innerHTML("srchBx", "<form id='formForm' method='get' action='https://www.facebook.com/search/top'><input type='text' name='q' size='31' id='srchImg' /></form>");
        hideAllSearchImages();
        styleOpacity(5, "searchImage3", 1);
        styleVisibility(5, "searchImage3", "visible");
      } else if (getCookie("opSrchBx") === "youtube") {
        innerHTML("srchBx", "<form id='formForm' method='get' action='https://www.youtube.com/results'><input type='text' name='search_query' size='31' id='srchImg' /></form>");
        hideAllSearchImages();
        styleOpacity(5, "searchImage4", 1);
        styleVisibility(5, "searchImage4", "visible");
      } else if (getCookie("opSrchBx") === "github") {
        innerHTML("srchBx", "<form id='formForm' method='get' action='https://www.github.com/search'><input type='text' name='search' size='31' id='srchImg' /></form>");
        hideAllSearchImages();
        styleOpacity(5, "searchImage5", 1);
        styleVisibility(5, "searchImage5", "visible");
      };
    } else {
      document.getElementById("srchBx").innerHTML = "";
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


    // styleOpacity(0, "searchImage1", 1);
    // styleVisibility(0, "searchImage1", "visible");
  };

  // Search image click
  document.getElementById("searchImageBox").addEventListener("click", function() {
    clearMenu("true");
    styleVisibility(300, "srchBxChcs", "visible");
    styleOpacity(300, "srchBxChcs", 0.9);
  }, false);
};
