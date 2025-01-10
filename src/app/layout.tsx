import { css, cx } from "../../styled-system/css";
import { container } from "../../styled-system/patterns";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tracking work hours app",
  description: "My awersome description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={css({bg:'#00BB77'})}>
        <header></header>
        <main className={cx(container({maxWidth: '3xl'}), css({bg:'white', height: 'svh', pt: '4'})) }>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
