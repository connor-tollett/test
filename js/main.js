(function () {
  const os = getOS();
  const container = document.body;
  const REDIRECT_THRESHOLD_MINUTES = 5;
  
  // Add theme detection and application
  function applyTheme() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDarkMode) {
      document.body.style.backgroundColor = '#000000'; // Pure black
      document.body.style.color = '#ffffff'; // White text for contrast
    } else {
      document.body.style.backgroundColor = '#ffffff'; // Pure white
      document.body.style.color = '#000000'; // Black text for contrast
    }
  }
  
  // Apply theme on page load
  applyTheme();
  
  // Listen for theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
  
  // Check if this is a return visit with significant gap
  function checkForRedirect() {
    const currentTime = Date.now();
    const lastVisitTime = getLastVisitTime();
    
    if (lastVisitTime) {
      const timeDifference = getTimeDifferenceInMinutes(lastVisitTime, currentTime);
      if (timeDifference >= REDIRECT_THRESHOLD_MINUTES) {
        // Clear the timestamp before redirecting to reset the cycle
        localStorage.removeItem('lastVisitTime');
        window.location.href = 'com.amazon.mobile.shopping.web://amazon.ca/deals';
        return true;
      }
    }
    
    // Only set the timestamp if we're NOT redirecting
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
    opentable: handleOpentable,
    linkedin: handleLinkedin,
    googlemaps: handleGoogleMaps,
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