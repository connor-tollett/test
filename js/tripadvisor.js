function handleTripAdvisor(value, os) {
  const name = "TripAdvisor";
  const iosLink = `tripadvisor://${value}`;
  const androidLink = `intent://${value}/#Intent;package=com.tripadvisor.tripadvisor;scheme=https;end`;
  let href;
    if (os === "iOS") {
      href = iosLink;
    } else if (os === "Android") {
      href = androidLink;
    }
  return { href, name };
}
