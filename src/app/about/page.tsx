import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactBanner from "../ContactBanner";

const founders = [
  {
    initials: "MB",
    name: "Mithilessh Saai Bhasker",
    role: "Co-Founder",
    focus: "Research and product thinking",
    github: "https://github.com/Mithilessh2010",
  },
  {
    initials: "SS",
    name: "Sahil Singla",
    role: "Co-Founder",
    focus: "Partnerships and responsible growth",
    github: "https://github.com/li231sd",
  },
];

export const metadata = {
  title: "About — Equal Horizons",
  description:
    "Learn about Equal Horizons and meet its co-founders, Mithilessh Saai Bhasker and Sahil Singla.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="about-hero section shell">
        <div className="about-hero__content">
          <h1>Open source with <em>room to grow.</em></h1>
          <p>
            Equal Horizons is a California 501(c)(3) nonprofit building and
            supporting open-source software that widens access to knowledge,
            learning, and accessibility.
          </p>
        </div>
      </section>

      <section className="about-founders section shell">
        <div className="about-section-heading">
          <p className="about-kicker">The people behind the work</p>
          <h2>Meet Equal Horizons.</h2>
        </div>
        <div className="founder-grid">
          {founders.map((founder) => (
            <article className="founder-card" key={founder.initials}>
              <div className="founder-card__top">
                <span className="founder-initials">{founder.initials}</span>
                <a
                  className="founder-link"
                  href={founder.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${founder.name} on GitHub`}
                >
                  <ArrowUpRight aria-hidden="true" weight="bold" />
                </a>
              </div>
              <h3>{founder.name}</h3>
              <p>
                {founder.role} <span aria-hidden="true">·</span>{" "}
                {founder.focus}
              </p>
            </article>
          ))}
        </div>
      </section>

      <ContactBanner />

      <Footer />
    </main>
  );
}
