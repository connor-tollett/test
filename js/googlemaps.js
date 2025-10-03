function handleGoogleMaps(value, os) {
  const name = "GoogleMaps";
  const iosLink = `comgooglemapsurl://www.google.com/maps/place/data=!4m6!3m5!${value}!16s`
  const androidLink = `intent://www.google.com/maps/place/data=!4m6!3m5!${value}!16s#Intent;package=com.google.android.apps.maps;scheme=https;end`;
  const href = selectHref(os, iosLink, androidLink);
  return { href, name };
}