function handleTripAdvisor(value, os) {
  const name = "TripAdvisor";
  const iosLink = `tripadvisor://${value}`;
  const androidLink = `intent://${value}/#Intent;package=com.tripadvisor.tripadvisor;scheme=https;end`;
  const href = selectHref(os, iosLink, androidLink);
  return { href, name };
}
