function handleOpentable(value, os) {
  const name = "Opentable";
  const iosLink = `opentable://restref?rid=${value}`
  const androidLink = `intent://www.opentable.com/${value}/#Intent;package=com.opentable;scheme=http;end`;
  const href = selectHref(os, iosLink, androidLink);
  return { href, name };
}