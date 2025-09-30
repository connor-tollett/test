function handleDoorDash(value, os) {
  const name = "DoorDash";
  const iosLink = `doordash://store/${value}`;
  const androidLink = `intent://store/${value}#Intent;package=com.dd.doordash;scheme=doordash;end`;
  let href;
    if (os === "iOS") {
      href = iosLink;
    } else if (os === "Android") {
      href = androidLink;
    }
  return { href, name };
}
