function handleTripAdvisor(value, os) {
  const name = "TripAdvisor";
  const iosLink = `tripadvisor://www.tripadvisor.ca/Restaurant_Review-${value}`;
  const androidLink = `intent://www.tripadvisor.ca/Restaurant_Review-${value}#Intent;package=com.tripadvisor.tripadvisor;scheme=https;end`;
  const href = selectHref(os, iosLink, androidLink);
  return { href, name };
}
