import { CTAProps } from "@/app/lib/definition";
import Link from "next/link";

export function CTASection({ mainSection, ctaText, ctaLink }: CTAProps) {
  return (
    <section className="bg-primary text-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold">
          {mainSection.heading}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">{mainSection.body}</p>
        <Link
          href={ctaLink}
          className="inline-block border border-white text-white px-8 py-3 rounded hover:bg-white hover:text-primary transition-colors duration-300 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
