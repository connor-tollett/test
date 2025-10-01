function handleYelp(value, os) {
  const name = "Yelp";
  const iosLink = `yelp:///biz/${value}`;
  const androidLink = `intent://www.yelp.com/biz/${value}/#Intent;package=com.yelp.android;scheme=https;end`;
  const href = selectHref(os, iosLink, androidLink);
  return { href, name };
}