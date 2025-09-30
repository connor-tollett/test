function handleInstagram(value, os) {
  const name = "Instagram";
  const iosLink = `instagram://user?username=${value}`;
  const androidLink = `intent://www.instagram.com/${value}#Intent;package=com.instagram.android;scheme=https;end`;
  let href;
    if (os === "iOS") {
      href = iosLink;
    } else if (os === "Android") {
      href = androidLink;
    }
  return { href, name };
}
