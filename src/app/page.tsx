import About from '@/components/About';
import CTA from '@/components/CTA';
import Hero from '@/components/Hero';
import Onboarding from '@/components/OnBoarding';
import Pricing from '@/components/Pricing';
import Process from '@/components/Process';
import SLAS from '@/components/SLAS';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import WhatsAppButton from '@/components/Whatsapp';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CTA />
      <Services />
      <Testimonials />
      <Pricing />
      <SLAS />
      <Process />
      <Onboarding />
      <WhatsAppButton />
    </>
  );
}
