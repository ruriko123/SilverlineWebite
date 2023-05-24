
export const metadata = {
  title: 'SilverLine System Integrators Pvt. Ltd.',
  description: 'Site for SilverLine System Integrators Pvt. Ltd.',
}

import { ReCaptchaProvider } from "./ReCaptchaProvider";
import "@styles/App.scss";
import "@picocss/pico";
import "@styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

      <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>{children}</ReCaptchaProvider>

        </body>
    </html>
  )
}
