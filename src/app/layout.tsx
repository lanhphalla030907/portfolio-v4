import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Lanh Phalla | Full-Stack Deverloper",
  description:
    "Personal portfolio of Lanh Phalla — Full-Stack Deverloper specializing in high-performance distributed systems, modern web architecture, and accessible UI/UX design.",
  keywords: [
    "Full-Stack Deverloper",
    "Systems Architect",
    "Next.js",
    "TypeScript",
    "Three.js",
    "Tailwind CSS",
    "Distributed Systems",
  ],
  authors: [{ name: "Lanh Phalla" }],
  openGraph: {
    title: "Lanh Phalla | Full-Stack Deverloper",
    description:
      "Full-Stack Deverloper specializing in high-performance distributed systems, modern web architecture, and accessible UI/UX design.",
    type: "website",
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
