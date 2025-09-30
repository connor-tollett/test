function handleInstagram(url, os) {
  const name = "Instagram";
  try {
    const u = new URL(url);
    const username = u.pathname.split('/').filter(Boolean)[0];
    if (!username) return null;

    if (os === "iOS") {
      return { href: `instagram://user?username=${username}`, name };
    } else if (os === "Android") {
      return { href: `intent://www.instagram.com/${username}#Intent;package=com.instagram.android;scheme=https;end`, name };
    }
    return null;
  } catch {
    return null;
  }
}