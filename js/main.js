(function () {
  const os = getOS();
  const container = document.body;
  const REDIRECT_THRESHOLD_MINUTES = 5;
  
  // Check if this is a return visit with significant gap
  function checkForRedirect() {
    const currentTime = Date.now();
    const lastVisitTime = getLastVisitTime();
    
    if (lastVisitTime) {
      const timeDifference = getTimeDifferenceInMinutes(lastVisitTime, currentTime);
      if (timeDifference >= REDIRECT_THRESHOLD_MINUTES) {
        window.location.href = 'https://amazon.com';
        return true;
      }
    }
    
    setLastVisitTime(currentTime);
    return false;
  }

  // Track page visibility changes
  function handleVisibilityChange() {
    if (document.visibilityState === 'visible') {
      // Page became visible - check for redirect
      if (checkForRedirect()) {
        return; // Don't continue if redirecting
      }
    } else {
      // Page became hidden - update last visit time
      setLastVisitTime(Date.now());
    }
  }

  // Initial check on page load
  if (checkForRedirect()) {
    return; // Don't continue if redirecting
  }

  // Listen for visibility changes
  document.addEventListener('visibilitychange', handleVisibilityChange);

  // Also listen for focus/blur events as fallback for older browsers
  window.addEventListener('focus', () => {
    if (checkForRedirect()) {
      return;
    }
  });

  window.addEventListener('blur', () => {
    setLastVisitTime(Date.now());
  });

  const apps = {
    instagram: handleInstaGram,
    youtube: handleYouTube,
    x: handleX,
    tiktok: handleTikTok,
    facebook: handleFaceBook,
    ubereats: handleUberEats,
    yelp: handleYelp,
    doordash: handleDoorDash,
    tripadvisor: handleTripAdvisor
  };

  let buttonsCreated = false;

  for (const [param, handler] of Object.entries(apps)) {
    const paramVal = getQueryParam(param);
    if (paramVal) {
      const result = handler(paramVal, os);
      if (result) {
        const btn = document.createElement("a");
        btn.href = result.href;
        btn.textContent = `Open in ${result.name}`;
        btn.className = "app-btn";
        container.appendChild(btn);
        buttonsCreated = true;
      }
    }
  }

  const placeholder = document.getElementById("app-btn");
  if (buttonsCreated) {
    placeholder.remove();
  } else {
    placeholder.style.display = "none";
  }
})();