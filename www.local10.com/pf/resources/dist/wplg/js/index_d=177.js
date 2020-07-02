/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17);
module.exports = __webpack_require__(18);


/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEV_API = "https://yos9zfjevj.execute-api.us-east-1.amazonaws.com/dev/";
var PROD_API = "https://q9hvabkx31.execute-api.us-east-1.amazonaws.com/api/";
var gmgh = {
  user: null,
  isLoggedIn: false,
  isDev: false,
  topicSubcriptions: []
};
var API_URL = PROD_API;
var host = window.location.host;
var sites = {
  "www.click2houston.com": "kprc",
  "www.ksat.com": "ksat",
  "www.clickondetroit.com": "wdiv",
  "www.clickorlando.com": "wkmg",
  "www.news4jax.com": "wjxt",
  "www.local10.com": "wplg",
  "www.wsls.com": "wsls",
  "www.gmg-local.com": "wdiv",
  "gmg-kprc-sandbox.cdn.arcpublishing.com": "kprc",
  "gmg-ksat-sandbox.cdn.arcpublishing.com": "ksat",
  "gmg-wdiv-sandbox.cdn.arcpublishing.com": "wdiv",
  "gmg-wjxt-sandbox.cdn.arcpublishing.com": "wjxt",
  "gmg-wkmg-sandbox.cdn.arcpublishing.com": "wkmg",
  "gmg-wplg-sandbox.cdn.arcpublishing.com": "wplg",
  "gmg-wsls-sandbox.cdn.arcpublishing.com": "wsls",
  "sandbox.gmg.arcpublishing.com": "wdiv"
};

if (window.location.href.indexOf("sandbox") >= 0 || window.location.href.indexOf("gmg-local") >= 0) {
  API_URL = DEV_API;
  gmgh.is_dev = true;
}

var fireEvent = function fireEvent(eventName) {
  var event = new CustomEvent(eventName);

  if (typeof Event === "function") {
    event = new Event(eventName);
  } else {
    event = document.createEvent("Event");
    event.initEvent(eventName, true, true);
  }

  document.dispatchEvent(event);
};

var deleteCookie = function deleteCookie(name) {
  var hostname = window.location.hostname;

  if (hostname in sites) {
    var rootHost = window.location.hostname.match(/\.(.+)\.com/)[0];
    var secure = window.location.protocol === "http:" ? "" : ";secure";
    document.cookie = "".concat(name, "=; path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT};domain=").concat(rootHost).concat(secure);
  }
};
/* Topic Subscriptions */


var topicSubsCheck = function topicSubsCheck() {
  window.vf.$subscribe("topics", "loaded", function (topicsContext) {
    localStorage.setItem("topic_subscriptions", JSON.stringify(topicsContext));
    gmgh.topicSubcriptions = topicsContext.topics;
    var event = new CustomEvent("vf_topics_ready");

    if (typeof Event === "function") {
      event = new Event("vf_topics_ready");
    } else {
      event = document.createEvent("Event");
      event.initEvent("vf_topics_ready", true, true);
    }

    document.dispatchEvent(event);
  });
};
/* Topic Subscriptions */


var logInUI = function logInUI() {
  var event = new CustomEvent("gmg_login_success");

  if (typeof Event === "function") {
    event = new Event("gmg_login_success");
  } else {
    event = document.createEvent("Event");
    event.initEvent("gmg_login_success", true, true);
  }

  if (window.top !== window.self) {
    window.parent.dispatchEvent(event);
  } else {
    document.dispatchEvent(event);
  }
};

var logOutUI = function logOutUI() {
  deleteCookie("loggedinCookie_sid");
  localStorage.removeItem("gmg_uo");
  localStorage.removeItem("gmg_cognito_id");
  gmgh.user = null;
  gmgh.isLoggedIn = false;
  var event = new CustomEvent("gmg_logout_success");

  if (typeof Event === "function") {
    event = new Event("gmg_logout_success");
  } else {
    event = document.createEvent("Event");
    event.initEvent("gmg_logout_success", true, true);
  }

  if (window.top !== window.self) {
    window.parent.dispatchEvent(event);
  } else {
    document.dispatchEvent(event);
  }

  topicSubsCheck();
};

var vfPostLogin = function vfPostLogin() {
  window.vf.context.get("user").then(function (user) {
    if (user.id !== 0) {
      localStorage.setItem("vf_uo", JSON.stringify(user));
      gmgh.user = user;
      gmgh.isLoggedIn = true;
      topicSubsCheck();
      logInUI();
    } else {
      localStorage.removeItem("vf_uo");
      localStorage.removeItem("gmg_cognito_id");
      localStorage.removeItem("gmg_uo");
      gmgh.user = null;
      gmgh.isLoggedIn = false;
      topicSubsCheck();
      logOutUI();
    }
  });
};

function checkLogin() {
  if (navigator.cookieEnabled) {
    var user = localStorage.getItem("gmg_uo");
    var topicSubcriptions = localStorage.getItem("topic_subscriptions");

    if (user) {
      gmgh.isLoggedIn = true;
      gmgh.user = JSON.parse(decodeURIComponent(atob(user)));
      gmgh.topicSubcriptions = JSON.parse(topicSubcriptions);
      gmgh.topicSubcriptions = gmgh.topicSubcriptions.topics;
    } else {
      deleteCookie("loggedinCookie_sid");
    }
  }
}

window.vfAsyncInit = function () {
  fireEvent("vf_loaded");
  window.vf.$subscribe("logout", "success", logOutUI);
  window.vf.$subscribe("login", "success", vfPostLogin);
  window.vf.$subscribe("login", "failure", function (errorContext) {
    var emails = {
      kprc: '<a href="https://www.click2houston.com/contact">www.click2houston.com/contact</a>',
      ksat: '<a href="mailto:contactus@ksat.com">contactus@ksat.com</a>',
      wdiv: '<a href="mailto:clickondetroit@wdiv.com">clickondetroit@wdiv.com</a>',
      wjxt: '<a href="mailto:webteam@news4jax.com">webteam@news4jax.com</a>',
      wkmg: '<a href="mailto:webstaff@wkmg.com">webstaff@wkmg.com</a>',
      wplg: '<a href="mailto:wplgwebstaff@wplg.com">wplgwebstaff@wplg.com</a>',
      wsls: '<a href="mailto:news@wsls.com">news@wsls.com</a>'
    };
    var email = "support@grahamdigital.com";

    if (host in sites) {
      email = emails[sites[host]];
    }

    var gmgAlert = document.querySelector(".gmg_alert");

    if (errorContext.error_key === "login_banned" && errorContext.isPermanent === 1) {
      if (gmgAlert) {
        // eslint-disable-next-line max-len
        gmgAlert.innerHTML = "<p>Your account has been suspended for violating our comment guidelines. If you believe this suspension was made in error, please contact us at <a href='mailto:".concat(email, "'>").concat(email, "</a></p>");
        gmgAlert.classList.add("error");
      }
    } else if (errorContext.error_key === "login_banned" && errorContext.isPermanent === 0) {
      var ed = new Date(errorContext.endDate); // const enddate = `${ed.getDate()}/${ed.getDate()}${ed.getFullYear()}`;
      // const endtime = `${ed.getHours()}:${ed.getMinutes} ${ed.get}`;

      if (gmgAlert) {
        // eslint-disable-next-line max-len
        gmgAlert.innerHTML = "<p>Your account has been temporarily suspended for violating our comment guidelines.</p><p>The suspension will end on <i>".concat(ed.toLocaleDateString(), " at ").concat(ed.toLocaleTimeString(), "</i>.</p><p>If you believe this suspension was made in error, please contact us at ").concat(email, "</p>");
        gmgAlert.classList.add("error");
      }
    }

    logOutUI();
  });
  window.vf.$subscribe("authentication", "required", function () {
    fireEvent("gmg_open_login_modal");
    setTimeout(function () {
      window.viafoura.$publish("tray", "close");
    }, 300);
  });
  window.viafoura.$subscribe("comment-thread", "loaded", function () {
    var oldComment = sessionStorage.getItem("gm_".concat(window.location.href, "_comment"));

    if (oldComment) {
      document.querySelector("textarea.vf-content").value = atob(oldComment);
    }
  });
  /* Viafoura Analytics Events */

  window.dataLayer = window.dataLayer || [];
  window.vf.$subscribe("comment", "created", function () {
    var _window = window,
        dataLayer = _window.dataLayer;
    dataLayer.push({
      event: "clickEvent",
      gaCategory: "NTG user",
      gaAction: "comment added",
      gaLabel: document.querySelector("link[rel='canonical']") ? document.querySelector("link[rel='canonical']").getAttribute("href") : window.location.href
    });
    sessionStorage.removeItem("gm_".concat(window.location.href, "_comment"));
  });
  window.vf.$subscribe("comment-reply", "posted", function () {
    var _window2 = window,
        dataLayer = _window2.dataLayer;
    dataLayer.push({
      event: "clickEvent",
      gaCategory: "NTG user",
      gaAction: "comment added",
      gaLabel: document.querySelector("link[rel='canonical']") ? document.querySelector("link[rel='canonical']").getAttribute("href") : window.location.href
    });
  });
  window.vf.$subscribe("share", "clicked", function (network) {
    var _window3 = window,
        dataLayer = _window3.dataLayer;
    dataLayer.push({
      event: "clickEvent",
      gaCategory: "NTG social",
      gaAction: "social share",
      gaLabel: network
    });
  });

  if (!gmgh.isLoggedIn) {
    vfPostLogin();
  }
};

gmgh.ajax = function (url, callback, data) {
  var xmlhttp;

  var payload = _objectSpread({}, data);

  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    // eslint-disable-next-line no-undef
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      callback(JSON.parse(xmlhttp.responseText));
    }
  };

  payload.site = window.location.host;
  xmlhttp.open("POST", url, true);
  xmlhttp.setRequestHeader("Content-type", "application/json");
  xmlhttp.send(JSON.stringify(payload));
};

gmgh.api_post = function (endpoint, callback, data) {
  gmgh.ajax(API_URL + endpoint, callback, data);
};

gmgh.start_spinner = function () {
  var spinners = document.querySelectorAll(".gmg_spinner");

  for (var s = 0; s < spinners.length; s += 1) {
    var spinner = spinners[s];
    spinner.classList.add("active");
  }
};

gmgh.stop_spinner = function () {
  var spinners = document.querySelectorAll(".gmg_spinner");

  for (var s = 0; s < spinners.length; s += 1) {
    var spinner = spinners[s];
    spinner.classList.remove("active");
  }
};

gmgh.openTray = function () {
  window.vf.$publish("tray", "open");
};

gmgh.close_modal = function () {
  window.vf.session.login.cookie();
  document.getElementById("login_overlay").style.display = "none";
  document.getElementById("login_iframe").innerHTML = "";
};

gmgh.go_login = function (origin) {
  var comment = document.querySelector("textarea.vf-content");

  if (comment && comment.value !== "") {
    sessionStorage.setItem("gm_".concat(window.location.href, "_comment"), btoa(comment.value));
  }

  var regex = /ref=([^&]+)/;
  var ref = regex.exec(window.location.search);
  var forward = ref ? ref[1] : window.location.pathname;
  var destination = "/account/login?nav=off&ref=".concat(forward);

  if (origin) {
    destination += "&org=".concat(origin);
  }

  window.location = destination;
};

gmgh.go_register = function () {
  var navoff = gmgh.noNav ? "&nav=off" : "";
  window.location = "/account/register?ref=".concat(window.location.pathname).concat(navoff);
};

gmgh.go_forgot = function () {
  var navoff = gmgh.noNav ? "?nav=off" : "";
  window.location = "/account/forgot_password".concat(navoff);
};

window.gmgh = gmgh;
fireEvent("gmgh_ready");
checkLogin();

/***/ })

/******/ });