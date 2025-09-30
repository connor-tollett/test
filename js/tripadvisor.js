function handleTripAdvisor(url, os) {
  const name = "TripAdvisor";
  try {
    const path = url.replace(/^https?:\/\//, ""); // strip scheme
    if (os === "iOS") {
      return { href: `tripadvisor://${path}`, name };
    } else if (os === "Android") {
      return { href: `intent://${path}/#Intent;package=com.tripadvisor.tripadvisor;scheme=https;end`, name };
    }
    return null;
  } catch {
    return null;
  }
}