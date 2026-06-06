import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import StickyHeader from "@/components/StickyHeader";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kansai Karate Willawong | Book a Free Trial Class",
  description:
    "Traditional Shitoryu Shukokai karate for families in Willawong. Led by Sensei Allan Reyes (Sandan). Cubs, Little Lions, Juniors and Adults & Teens. Book your free trial today.",
  keywords:
    "karate willawong, kids karate brisbane south, martial arts willawong, karate classes willawong, free trial karate",
  openGraph: {
    title: "Kansai Karate Willawong | Book a Free Trial Class",
    description:
      "Traditional Shitoryu Shukokai karate for families in Willawong. Led by Sensei Allan Reyes (Sandan). Book your free trial today.",
    url: "https://kansaikaratewillawong.com.au",
    siteName: "Kansai Karate Willawong",
    locale: "en_AU",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Kansai Karate Willawong",
  description:
    "Traditional Japanese karate for kids, teens and adults in Willawong QLD.",
  url: "https://kansaikaratewillawong.com.au",
  telephone: "+61421366355",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 3, 14 Buttonwood Place",
    addressLocality: "Willawong",
    addressRegion: "QLD",
    postalCode: "4110",
    addressCountry: "AU",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday"],
      opens: "16:30",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  image: "https://www.kansaikaratewillawong.com.au/images/logo.png",
  sameAs: [
    "https://www.facebook.com/kansaikaratewillawong",
    "https://www.instagram.com/kansaikaratewillawong",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <StickyHeader />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
