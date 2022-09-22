import { useRouter } from "next/router";
import { ReactNode } from "react";
import { IntlProvider } from "react-intl";

import messagesInEnUS from "../i18n/en-US.json";
import messagesInZhCN from "../i18n/zh-CN.json";

const IntlWrapper = ({ children }: { children: ReactNode }) => {
  const { locale } = useRouter();
  let messages = messagesInEnUS;
  switch (locale) {
    case "en-US": {
      messages = messagesInEnUS;
      break;
    }
    case "zh-CN": {
      messages = messagesInZhCN;
      break;
    }
  }
  return (
    <IntlProvider messages={messages} locale={locale!} defaultLocale="en">
      {children}
    </IntlProvider>
  );
};

export default IntlWrapper;
