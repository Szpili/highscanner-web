import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://highscanner.pl"),
  title: {
    default: "HighScanner — najtańsze apteki z medyczną marihuaną w Polsce",
    template: "%s | HighScanner",
  },
  description:
    "Realne ceny medycznej marihuany od pacjentów — paragony rozpoznawane przez OCR i publicznie dostępne źródła. Bot Telegram + Discord. Bez reklam, bez afiliacji — robione przez pacjenta dla pacjentów.",
  keywords: [
    "medyczna marihuana",
    "ceny aptek",
    "skaner cen",
    "Bedrocan",
    "Aurora",
    "Tilray",
    "THC22",
    "apteki Polska",
    "porównywarka cen",
    "marihuana medyczna apteka",
  ],
  openGraph: {
    title: "HighScanner — najtańsze apteki z medyczną marihuaną",
    description:
      "Ceny medycznej marihuany z paragonów wrzucanych przez pacjentów i z publicznych źródeł. Alerty na Telegramie i Discordzie. Bez reklam.",
    url: "https://highscanner.pl",
    siteName: "HighScanner",
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
