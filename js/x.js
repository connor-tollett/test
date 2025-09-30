function handleX(url, os) {
  try {
    const u = new URL(url);
    const username = u.pathname.split('/').filter(Boolean)[0];
    if (!username) return null;

    if (os === "iOS") {
      return `twitter://user?screen_name=${username}`;
    } else if (os === "Android") {
      return `intent://twitter.com/${username}#Intent;package=com.twitter.android;scheme=https;end`;
    }
    return null;
  } catch {
    return null;
  }
}