import type { Metadata } from "next";
import "@/styles/globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { portfolioData } from "@/data/portfolioData";
import {
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
} from "@/lib/siteConfig";

const { personal, contact } = portfolioData;

const socialDescription =
  "Explore the portfolio, projects, and technical work of Lanh Phalla, a Full-Stack Developer from Cambodia.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: personal.name,
      url: siteUrl,
      image: `${siteUrl}/apple-touch-icon.png`,
      jobTitle: "Full-Stack Developer",
      description: siteDescription,
      email: contact.email,
      sameAs: [contact.github, contact.facebook, contact.telegram],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Lanh Phalla",
  },

  description: siteDescription,

  keywords: [
    "Lanh Phalla",
    "Lanh Phalla Developer",
    "Full-Stack Developer Cambodia",
    "Backend Developer Cambodia",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Development",
  ],

  authors: [{ name: personal.name }],

  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: siteTitle,
    description: socialDescription,
    url: siteUrl,
    siteName: siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: socialDescription,
    images: [{ url: "/og-image.png", alt: siteTitle }],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `
(function(){
  try{
    var saved = localStorage.getItem('portfolio-theme');
    // Light mode is the default. Only a previously saved dark preference opts in.
    var dark = saved === 'dark';
    var root = document.documentElement;
    root.classList.toggle('dark', dark);
    root.style.colorScheme = dark ? 'dark' : 'light';
  }catch(e){}
})();
`;

// Set the document language before paint so saved Khmer preferences get the
// correct font and line-height immediately. English remains the default.
const languageScript = `
(function(){
  try{
    var saved = localStorage.getItem('portfolio-language');
    document.documentElement.lang = saved === 'km' ? 'km' : 'en';
  }catch(e){}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-paper text-ink font-body antialiased selection:bg-brand-accent selection:text-night">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: languageScript }} />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
