import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Destinations from "@/components/home/Destinations";
import ForEveryTraveler from "@/components/home/ForEveryTraveler";
import SpecialServices from "@/components/home/SpecialServices";
import BookingSteps from "@/components/home/BookingSteps";
import WhyDifferent from "@/components/home/WhyDifferent";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Destinations />
      <ForEveryTraveler />
      <SpecialServices />
      <BookingSteps />
      <WhyDifferent />
    </>
  );
}
