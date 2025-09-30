(function () {
  const os = getOS();
  const container = document.body;

  const apps = {
    instagram: handleInstagram,
    x: handleX,
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