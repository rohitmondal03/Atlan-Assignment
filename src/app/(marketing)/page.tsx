import { IntroSection } from "./_components/intro-heading-section";
import { TypingSection } from "./_components/typing-section";
import { FeaturesSection } from "./_components/features-section";
import { AboutSection } from "./_components/about-section";
import { JoinWaitlistSection } from "./_components/join-waitlist-section";


export default function HomePage() {
  return (
    <section className="text-center">
      <IntroSection />
      <TypingSection />
      <AboutSection />
      <FeaturesSection />
      <JoinWaitlistSection />
    </section>
  );
}
