function handleX(value, os) {
  const name = "X";
  const iosLink = `twitter://user?screen_name=${value}`;
  const androidLink = `intent://twitter.com/${value}#Intent;package=com.twitter.android;scheme=https;end`;
  let href;
    if (os === "iOS") {
      href = iosLink;
    } else if (os === "Android") {
      href = androidLink;
    }
  return { href, name };
}
