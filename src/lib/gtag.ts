import { PUBLIC_GA_ID, PUBLIC_UA_ID } from "../utils/constants";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (!PUBLIC_GA_ID) return;
  window.gtag("config", PUBLIC_GA_ID, {
    page_path: url,
  });
  if (!PUBLIC_UA_ID) return;
  window.gtag("config", PUBLIC_UA_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: number;
}) => {
  if (!PUBLIC_GA_ID || !PUBLIC_UA_ID) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
