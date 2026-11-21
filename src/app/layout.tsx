import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lanhphalla.dev"),

  title: {
    default: "Lanh Phalla | Full-Stack Developer",
    template: "%s | Lanh Phalla",
  },

  description:
    "Lanh Phalla is a Computer Science student and Full-Stack Developer from Cambodia, building modern web applications with Next.js, TypeScript, Node.js, and backend technologies.",

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

  authors: [{ name: "Lanh Phalla" }],

  openGraph: {
    title: "Lanh Phalla | Full-Stack Developer",
    description:
      "Explore the portfolio, projects, and technical work of Lanh Phalla, a Full-Stack Developer from Cambodia.",
    url: "https://lanhphalla.dev",
    siteName: "Lanh Phalla Portfolio",
    type: "website",
    locale: "en_US",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-paper text-ink font-body antialiased selection:bg-brand-accent selection:text-night">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
