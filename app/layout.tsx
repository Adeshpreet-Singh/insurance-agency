import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sterling Insurance Group | Comprehensive Insurance Solutions in Boston",
  description: "Trusted Boston insurance agency providing auto, home, life, and business coverage since 1991. Get a free quote today. 24/7 claims hotline.",
  keywords: ["insurance", "auto insurance", "home insurance", "life insurance", "business insurance", "Boston insurance agency"],
  authors: [{ name: "Sterling Insurance Group" }],
  metadataBase: new URL("https://sterlinginsurance.com"),
  openGraph: {
    title: "Sterling Insurance Group | Comprehensive Insurance Solutions",
    description: "Trusted Boston insurance agency providing auto, home, life, and business coverage since 1991. Get a free quote today.",
    url: "https://sterlinginsurance.com",
    siteName: "Sterling Insurance Group",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sterling Insurance Group - Comprehensive Protection Since 1991",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sterling Insurance Group | Comprehensive Insurance Solutions",
    description: "Trusted Boston insurance agency providing auto, home, life, and business coverage since 1991.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script dangerouslySetInnerHTML={{ __html: `
          if (typeof window !== 'undefined') {
            const obs = new IntersectionObserver((entries) => {
              entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
            }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
            document.addEventListener('DOMContentLoaded', () => {
              document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(el => obs.observe(el));
            });
            const mo = new MutationObserver(() => {
              document.querySelectorAll('.reveal:not(.visible),.reveal-left:not(.visible),.reveal-scale:not(.visible)').forEach(el => obs.observe(el));
            });
            mo.observe(document.body, { childList: true, subtree: true });
          }
        ` }} />
      </body>
    </html>
  );
}