import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "VIP Assist India — Luxury Airport Concierge & VIP Meet & Greet",
  description:
    "Premium airport meet & greet, fast-track immigration, lounge access, porter and concierge services across India and worldwide.",
  keywords: [
    "VIP Airport Assistance",
    "Meet and Greet India",
    "Airport Concierge",
    "Fast Track Immigration",
    "Luxury Airport Service"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#f7f8fc] text-navy-900 selection:bg-electric-500/20">
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
