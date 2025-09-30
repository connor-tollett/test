function handleDoorDash(value, os) {
  const name = "DoorDash";
  const iosLink = `doordash://store/${value}`;
  const androidLink = `intent://store/${value}#Intent;package=com.dd.doordash;scheme=doordash;end`;
  const href = selectHref(os, iosLink, androidLink);
  return { href, name };
}
