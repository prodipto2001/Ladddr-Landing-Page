import { Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import type { Metadata } from "next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ladddr",
  description: "Based design for a tokenized world",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={spaceGrotesk.className}
    >
      <body>{children}</body>
    </html>
  );
}
