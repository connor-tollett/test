function handleX(value, os) {
  const name = "X";
  const iosLink = `twitter://user?screen_name=${value}`;
  const androidLink = `intent://twitter.com/${value}#Intent;package=com.twitter.android;scheme=https;end`;
  const href = selectHref(os, iosLink, androidLink);
  return { href, name };
}