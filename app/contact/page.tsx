import { HeroBanner } from "@/components/HeroBanner";
import ContactContent from "./ContactContent";

export const metadata = {
  title: "Contact Trail Logic Studio",
};

export default function ContactPage() {
  return (
    <>
      <HeroBanner
        eyebrow="CONTACT"
        title="Get in Touch"
        subtitle="We’d love to hear from you. Whether you have a question about our products, need support, or want to discuss a collaboration, our team is here to help."
        showImage={false}
      />
      <ContactContent />
    </>
  );
}
