function handleLinkedin(value, os) {
  const name = "Linkedin";
  const iosLink = `linkedin://company/${value}`
  const androidLink = `intent://www.linkedin.com/company/${value}#Intent;package=com.linkedin.android;scheme=https;end`;
  const href = selectHref(os, iosLink, androidLink);
  return { href, name };
}