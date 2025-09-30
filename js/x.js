function handleX(url, os) {
  const name = "X";
  try {
    const u = new URL(url);
    const username = u.pathname.split('/').filter(Boolean)[0];
    if (!username) return null;

    if (os === "iOS") {
      return { href: `twitter://user?screen_name=${username}`, name };
    } else if (os === "Android") {
      return { href: `intent://twitter.com/${username}#Intent;package=com.twitter.android;scheme=https;end`, name };
    }
    return null;
  } catch {
    return null;
  }
}