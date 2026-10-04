import { ArrowRight } from "@phosphor-icons/react/ssr";

export default function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="shell contact-banner__inner">
        <h2>Have a thoughtful idea?</h2>
        <a className="button button-light" href="mailto:equalhorizonsinc@gmail.com">
          Start a conversation <ArrowRight aria-hidden="true" weight="bold" />
        </a>
      </div>
    </section>
  );
}
