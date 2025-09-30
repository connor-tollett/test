(function () {
  const os = getOS();
  const btn = document.getElementById("app-btn");
  let href = null;

  if (getQueryParam("instagram")) {
    href = handleInstagram(getQueryParam("instagram"), os);
  } else if (getQueryParam("x")) {
    href = handleX(getQueryParam("x"), os);
  } else if (getQueryParam("doordash")) {
    href = handleDoorDash(getQueryParam("doordash"), os);
  } else if (getQueryParam("tripadvisor")) {
    href = handleTripAdvisor(getQueryParam("tripadvisor"), os);
  }

  if (href) {
    btn.href = href;
  } else {
    btn.style.display = "none"; // hide if nothing matched
  }
})();