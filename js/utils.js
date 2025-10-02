function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  const val = params.get(name);
  return val ? decodeURIComponent(val) : null;
}

function getOS() {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(ua)) return "Android";
  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return "iOS";
  return "Other";
}

function selectHref(os, iosLink, androidLink) {
  if (os === "iOS") {
    return iosLink;
  } else if (os === "Android") {
    return androidLink;
  }
}

// Add these new functions to utils.js
function getLastVisitTime() {
  const lastVisit = localStorage.getItem('lastVisitTime');
  return lastVisit ? parseInt(lastVisit) : null;
}

function setLastVisitTime(timestamp) {
  localStorage.setItem('lastVisitTime', timestamp.toString());
}

function getTimeDifferenceInMinutes(timestamp1, timestamp2) {
  return Math.abs(timestamp2 - timestamp1) / (1000 * 60);
}