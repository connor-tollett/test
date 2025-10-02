function handleYouTube(value, os) {
  const name = "YouTube";
  const iosLink = `vnd.youtube://www.youtube.com/@${value}`;
  const androidLink = `intent://www.youtube.com/@${value}#Intent;package=com.google.android.youtube;scheme=https;end`;
  const href = selectHref(os, iosLink, androidLink);
  return { href, name };
}