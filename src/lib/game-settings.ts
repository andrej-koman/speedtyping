export function setToLocalStorage(key: string, value: string) {
  if (typeof window === "undefined") return;

  if (typeof value === "object") {
    value = JSON.stringify(value);
  }

  localStorage.setItem(key, value);
}

export function getSettingsFromLocalStorage() {
  const has3D = window.localStorage.getItem("has3D");
  const textSize = window.localStorage.getItem("textSize");

  const settings = new Map<string, string>();
  settings.set("has3D", has3D ?? "false");
  settings.set("textSize", textSize ?? "2xl");
  return settings;
}
