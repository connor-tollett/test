function handleUberEats(value, os) {
  const name = "UberEats";
  const iosLink = `ubereats://store/browse?client_id=eats&storeUUID=${value}`;
  const androidLink = `ubereats://store/browse?client_id=eats&storeUUID=${value}`;
  const href = selectHref(os, iosLink, androidLink);
  return { href, name };
}