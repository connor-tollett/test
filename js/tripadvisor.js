function handleTripAdvisor(url, os) {
  try {
    const path = url.replace(/^https?:\/\//, ""); // strip scheme
    if (os === "iOS") {
      return `tripadvisor://${path}`;
    } else if (os === "Android") {
      return `intent://${path}/#Intent;package=com.tripadvisor.tripadvisor;scheme=https;end`;
    }
    return null;
  } catch {
    return null;
  }
}