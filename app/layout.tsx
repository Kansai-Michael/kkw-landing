import type { Metadata } from "next";
import { Montserrat, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import StickyHeader from "@/components/StickyHeader";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

// Barlow Condensed is the closest modern match to the original Open Sans Condensed
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-open-sans-condensed",
  weight: ["700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kansai Karate Willawong | 2 Weeks Training + Free Uniform — Only $39",
  description:
    "Introductory special: 2 weeks training + free uniform for only $39. Traditional Shitoryu Shukokai karate in Willawong. Led by Sensei Allan Reyes (Sandan). Cubs, Little Lions, Juniors, Adults & Teens.",
  keywords:
    "karate willawong, kids karate brisbane south, martial arts willawong, karate classes willawong, free karate trial, karate acacia ridge, karate calamvale, karate inala, karate forest lake",
  openGraph: {
    title: "Kansai Karate Willawong | 2 Weeks Training + Free Uniform — Only $39",
    description:
      "Introductory special: 2 weeks training + free uniform for only $39. Traditional Shitoryu Shukokai karate in Willawong.",
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
    "Traditional Shitoryu Shukokai karate for families in Willawong QLD. Programs for all ages from 3 years.",
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
  image: "https://www.kansaikaratewillawong.com.au/images/kkw-logo.webp",
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
    <html
      lang="en"
      className={`${montserrat.variable} ${barlowCondensed.variable}`}
    >
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
