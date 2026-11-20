import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Alexander Chen | Full-Stack Engineer & Systems Architect",
  description:
    "Personal portfolio of Alexander Chen — Full-Stack Engineer specializing in high-performance distributed systems, modern web architecture, and accessible UI/UX design.",
  keywords: [
    "Full-Stack Engineer",
    "Systems Architect",
    "Next.js",
    "TypeScript",
    "Three.js",
    "Tailwind CSS",
    "Distributed Systems",
  ],
  authors: [{ name: "Alexander Chen" }],
  openGraph: {
    title: "Alexander Chen | Full-Stack Engineer & Systems Architect",
    description:
      "Full-Stack Engineer specializing in high-performance distributed systems, modern web architecture, and accessible UI/UX design.",
    type: "website",
  },
};

const themeScript = `
(function(){
  try{
    var saved = localStorage.getItem('portfolio-theme');
    var dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
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
