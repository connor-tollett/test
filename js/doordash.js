function handleDoorDash(url, os) {
  const name = "DoorDash";
  try {
    const u = new URL(url);
    const storeId = u.pathname.split('/').filter(Boolean).pop();
    if (!storeId) return null;

    if (os === "iOS") {
      return { href: `doordash://store/${storeId}`, name };
    } else if (os === "Android") {
      return { href: `intent://store/${storeId}#Intent;package=com.dd.doordash;scheme=doordash;end`, name };
    }
    return null;
  } catch {
    return null;
  }
}