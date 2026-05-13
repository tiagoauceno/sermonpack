export function buildUtmLink(baseUrl: string): string {
  const utmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  const current = new URLSearchParams(window.location.search);
  const dest = new URL(baseUrl);

  utmParams.forEach((key) => {
    const value = current.get(key);
    if (value) dest.searchParams.set(key, value);
  });

  return dest.toString();
}

import { useState, useEffect } from "react";

export function useUtmLink(baseUrl: string): string {
  const [link, setLink] = useState(baseUrl);

  useEffect(() => {
    setLink(buildUtmLink(baseUrl));
  }, [baseUrl]);

  return link;
}
