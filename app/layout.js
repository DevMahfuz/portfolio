import "./globals.css";

export const metadata = {
  title: "Mahfuzur Rahman | A Full Stack Web Developer | JavaScript Programmer",
  description:
    "I'm Mahfuzur Rahman, A Full Stack Web Developer from Vhangura, Pabna, Bangladesh. My programming language is JavaScript",
  openGraph: {
    title: "Looking For A Full Stack Web Developer?",
    description: "I'm A JavaScript programer. Ready to code for your vition",
    url: "https://mahfuzur.me",
    siteName: "mahfuzur.me",
    images: [
      {
        url: "https://mahfuzur.me/img/feature.jpg", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "Ca2GwK0LxF6_0yh3jIY38kDjWC6AQDsGWinrF-9Eelw",
  },
  alternates: {
    canonical: "https://mahfuzur.me/", // Add your canonical URL here
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
