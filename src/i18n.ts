import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  // Get the cookie object and extract the value as a string
  const localeCookie = cookies().get("NEXT_LOCALE");
  const locale = localeCookie ? localeCookie.value : "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
