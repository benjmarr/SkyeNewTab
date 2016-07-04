// Copyright Benjamin Developments (c) 2016 - All rights reserved

var createFooter = function(links, copyright, footerID) {
  if (links) {
    innerHTML("footerTop" + footerID, "<a href='https://benandy.github.io/cookie' target='_blank'>Cookie Policy</a> - <a href='https://benandy.github.io/privacy' target='_blank'>Privacy Policy</a> - <a href='mailto:benjaminandyy@gmail.com'>Contact</a> - <a href='https://unsplash.com/license' target='_blank'>Background Image License</a> - <a href='https://github.com/BenAndy/SkyeNewTab/blob/master/assets/change.log' target='_blank'>Change Log</a> - <a href='https://benandy.github.io/terms' target='_blank'>Terms and Conditions</a>");
  };

  if (copyright) {
    innerHTML("footerBottom" + footerID, "<br />Skye New Tab copyright <a href='https://benandy.github.io'>Benjamin Developments</a> &copy; 2015 - All rights reserved");
  };
};
