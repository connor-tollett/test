function handleInstagram(url, os) {
  try {
    const u = new URL(url);
    const username = u.pathname.split('/').filter(Boolean)[0];
    if (!username) return null;

    if (os === "iOS") {
      return `instagram://user?username=${username}`;
    } else if (os === "Android") {
      return `intent://www.instagram.com/${username}#Intent;package=com.instagram.android;scheme=https;end`;
    }
    return null;
  } catch {
    return null;
  }
}