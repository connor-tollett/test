function handleFaceBook(value, os) {
  const name = "FaceBook";
  const iosLink = `fb://profile/${value}`;
  const androidLink = `intent://profile/${value}#Intent;package=com.facebook.katana;scheme=fb;end`;
  const href = selectHref(os, iosLink, androidLink);
  return { href, name };
}