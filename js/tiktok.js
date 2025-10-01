function handleTikTok(value, os) {
  const name = "TikTok";
  const iosLink = `snssdk1233://user/@${value}`;
  const androidLink = `intent://www.tiktok.com/@${value}/#Intent;package=com.zhiliaoapp.musically;scheme=https;end`;
  const href = selectHref(os, iosLink, androidLink);
  return { href, name };
}