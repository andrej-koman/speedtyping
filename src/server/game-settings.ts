import { cookies } from "next/headers";

export function getLayoutCookie() {
  const layout = cookies().get("react-resizable-panels:layout")?.value;
  return layout ? (JSON.parse(layout) as number[]) : [960, 960];
}

export function getHas3DCookie() {
  return cookies().get("has3D")?.value === "true";
}

export function getTextSizeCookie() {
  return cookies().get("textSize")?.value;
}
