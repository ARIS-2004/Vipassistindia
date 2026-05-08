import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact VIP Assist India — 24/7 Concierge Support",
  description:
    "Get in touch with VIP Assist India for premium airport meet & greet bookings, fast-track immigration, lounge access, and concierge support."
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
