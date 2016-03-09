// Copyright Benjamin (c) All rights reserved - 2016

console.log("background.js loaded.");

var backgroundNumber = Array(61,62,63,64,65,66,67,68,49,50,51,52,53,54,55,56,57,58,59,60);
document.getElementById("ImageUpdateDate").innerHTML = "Sunday, 21<sup>st</sup> February 2016";
// NOTE Maximum of 20 backgrounds NOTE Add number onto end for new images, delete lowest number (This is just a weird developer note)
var randBack = function() {
  return backgroundNumber[Math.floor(Math.random() * backgroundNumber.length)];
};

// backgroundChange() method
var currentBackgroundID;
var backgroundChange = function(id) {
  if (id === "random") {
    currentBackgroundID = randBack();
    document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
  } else {
    switch(id) {
      case backgroundNumber[0]:
        currentBackgroundID = backgroundNumber[0];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[1]:
        currentBackgroundID = backgroundNumber[1];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[2]:
        currentBackgroundID = backgroundNumber[2];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[3]:
        currentBackgroundID = backgroundNumber[3];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[4]:
        currentBackgroundID = backgroundNumber[4];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[5]:
        currentBackgroundID = backgroundNumber[5];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[6]:
        currentBackgroundID = backgroundNumber[6];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[7]:
        currentBackgroundID = backgroundNumber[7];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[8]:
        currentBackgroundID = backgroundNumber[8];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[9]:
        currentBackgroundID = backgroundNumber[9];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[10]:
        currentBackgroundID = backgroundNumber[10];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[11]:
        currentBackgroundID = backgroundNumber[11];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[12]:
        currentBackgroundID = backgroundNumber[12];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[13]:
        currentBackgroundID = backgroundNumber[13];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[14]:
        currentBackgroundID = backgroundNumber[14];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[15]:
        currentBackgroundID = backgroundNumber[15];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[16]:
        currentBackgroundID = backgroundNumber[16];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[17]:
        currentBackgroundID = backgroundNumber[17];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[18]:
        currentBackgroundID = backgroundNumber[18];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      case backgroundNumber[19]:
        currentBackgroundID = backgroundNumber[19];
        document.getElementById("header").style.backgroundImage = "url('content/background/" + currentBackgroundID + ".jpg')";
        break;
      default:
        // work
        break;
    };
  }
};

if (getCookie("setBack") === "") {
  setCookie("setBack", false, 365);
  backgroundChange("random");
} else if (getCookie("setBack") === "false") {
  backgroundChange("random");
} else {
  backgroundChange(getCookie("setBack")); // WORK
};

// Image data
var unsplashImageData = function(imgUrl, imgAuth, imgAuthPro) {
  document.getElementById("imgUrlBOX").innerHTML = "<a href='" + imgUrl + "' target='_blank'>" + imgUrl + "</a>";
  document.getElementById("imgAuthBOX").innerHTML = imgAuth;
  document.getElementById("imgAuthProBOX").innerHTML = "<a href='" + imgAuthPro + "' target='_blank'>" + imgAuthPro + "</a>";
};

if (currentBackgroundID === 61) {
  unsplashImageData("https://unsplash.com/photos/7ALI0RYyq6s", "Мартин Тасев", "https://unsplash.com/pumabg");
} else if (currentBackgroundID === 62) {
  unsplashImageData("https://unsplash.com/photos/bClr95glx6k", "Vashishta Jogi", "https://unsplash.com/jogi");
} else if (currentBackgroundID === 63) {
  unsplashImageData("https://unsplash.com/photos/_h7aBovKia4", "Philippe Wuyts", "https://unsplash.com/photos/_h7aBovKia4");
} else if (currentBackgroundID === 64) {
  unsplashImageData("https://unsplash.com/photos/-oWyJoSqBRM", "Alexey Topolyanskiy", "https://unsplash.com/devilcoders");
} else if (currentBackgroundID === 65) {
  unsplashImageData("https://unsplash.com/photos/93Ep1dhTd2s", "William Hook", "https://unsplash.com/williamtm")
} else if (currentBackgroundID === 66) {
  unsplashImageData("https://unsplash.com/photos/KqVHRmHVwwM", "Erez Attias", "https://unsplash.com/erezattias");
} else if (currentBackgroundID === 67) {
  unsplashImageData("https://unsplash.com/photos/E7q00J_8N7A", "NASA", "https://unsplash.com/nasa");
} else if (currentBackgroundID === 68) {
  unsplashImageData("https://unsplash.com/photos/U5rMrSI7Pn4", "Metthew Wiebe", "https://unsplash.com/matthewwiebe");
} else if (currentBackgroundID === 49) {
  unsplashImageData("https://unsplash.com/photos/Xwk4gkiMNGc", "Oliver & Hen Pritchard-Barrett", "https://unsplash.com/olliepb");
} else if (currentBackgroundID === 50) {
  unsplashImageData("https://unsplash.com/photos/2p1HOcpi14U", "Hide Obara", "https://unsplash.com/hideobara");
} else if (currentBackgroundID === 51) {
  unsplashImageData("https://unsplash.com/photos/sokDJl8L-fs", "Benjamin", "https://unsplash.com/ben_andy");
} else if (currentBackgroundID === 52) {
  unsplashImageData("https://unsplash.com/photos/4jcFu1byopQ", "Davide Ragusa", "https://unsplash.com/davideragusa");
} else if (currentBackgroundID === 53) {
  unsplashImageData("https://unsplash.com/photos/GYumuBnTqKc", "E+N Photographies", "https://unsplash.com/nicomiot");
} else if (currentBackgroundID === 54) {
  unsplashImageData("https://unsplash.com/photos/6-jTZysYY_U", "NASA", "https://unsplash.com/nasa");
} else if (currentBackgroundID === 55) {
  unsplashImageData("https://unsplash.com/photos/R3LcfTvcGWY", "Annie Spratt", "https://unsplash.com/fableandfolk");
} else if (currentBackgroundID === 56) {
  unsplashImageData("https://unsplash.com/photos/GSzD6vGIWKM", "Mickey O'neil", "https://unsplash.com/mickeyoneil");
} else if (currentBackgroundID === 57) {
  unsplashImageData("https://unsplash.com/photos/uAgLGG1WBd4", "Scott Webb", "https://unsplash.com/scottwebb");
} else if (currentBackgroundID === 58) {
  unsplashImageData("https://unsplash.com/photos/JibIPPrvITE", "Micheal Hull", "https://unsplash.com/michaelhull");
} else if (currentBackgroundID === 59) {
  unsplashImageData("https://unsplash.com/photos/-wWRHIUklxM", "Vladimir Kudinov", "https://unsplash.com/madbyte");
} else if (currentBackgroundID === 60) {
  unsplashImageData("https://unsplash.com/photos/tBtuxtLvAZs", "Matthew Wiebe", "https://unsplash.com/matthewwiebe");
};

document.getElementById("optionIMAGEDATA").addEventListener("click", function() {
  document.getElementById("imageInformationMenu").style.visibility = "visible";
  opacity("imageInformationMenu", 0.9, 0);
  document.getElementById("optionsImg").style.visibility = "visible";
  opacity("optionsImg", 1, 0);
  opacity("optionsMenu", 0, 0);
  setTimeout(function() {
    document.getElementById("optionsMenu").style.visibility = "hidden";
  }, 600);
}, false);

document.getElementById("imageInformationX").addEventListener("click", function() {
  opacity("imageInformationMenu", 0, 0);
  setTimeout(function() {
    document.getElementById("imageInformationMenu").style.visibility = "hidden";
  }, 600);
}, false);
