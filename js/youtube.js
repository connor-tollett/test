function handleYouTube(value, os) {
  const name = "YouTube";
  const iosLink = `vnd.youtube://www.youtube.com/@${value}`;
  const androidLink = `youtube://www.youtube.com/@${value}`;
  const href = selectHref(os, iosLink, androidLink);
  return { href, name };
}