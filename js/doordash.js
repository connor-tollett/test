function handleDoorDash(url, os) {
  try {
    const u = new URL(url);
    const storeId = u.pathname.split('/').filter(Boolean).pop();
    if (!storeId) return null;

    if (os === "iOS") {
      return `doordash://store/${storeId}`;
    } else if (os === "Android") {
      return `intent://store/${storeId}#Intent;package=com.dd.doordash;scheme=doordash;end`;
    }
    return null;
  } catch {
    return null;
  }
}