import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";

export const metadata = {
  title: "Services — VIP Assist India | Airport Meet & Greet, Fast Track, Porter & More",
  description:
    "Explore VIP Assist India's premium airport services: Meet & Greet, Fast Track Immigration, Airport Concierge, Porter Service, Transfers, and Hotel Bookings."
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
    </>
  );
}
