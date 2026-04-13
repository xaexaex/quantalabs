import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Quantalabs",
  description: "Get in touch with Quantalabs to discuss enterprise blockchain solutions, custom development, and PQC migrations.",
};

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-24 bg-white min-h-screen">
      <ContactSection />
    </div>
  );
}
