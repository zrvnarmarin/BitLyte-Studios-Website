import HeroSection from './(contact-sections)/HeroSection'
import ContactForm from './(contact-sections)/ContactForm';
import AfterProposalSection from './(contact-sections)/AfterProposalSection';
import QueryCallSection from './(contact-sections)/QueryCallSection';
import CTASection from './../components/CTASection';

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center bg-[#0b0b0b]">
      <HeroSection />
      {/* <ContactForm /> */}
      <AfterProposalSection />
      <CTASection />
    </main>
  );
}
