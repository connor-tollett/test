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