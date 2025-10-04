function handleOpentable(value, os) {
  const name = "Opentable";
  const iosLink = `opentable://https://www.opentable.com/${value}/`
  const androidLink = `intent://www.opentable.com/${value}/#Intent;package=com.opentable;scheme=http;end`;
  const href = selectHref(os, iosLink, androidLink);
  return { href, name };
}