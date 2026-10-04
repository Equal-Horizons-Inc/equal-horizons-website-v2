import Hero from "./Hero";
import Navbar from "./Navbar";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  EnvelopeSimple,
  GithubLogo,
  HeartStraight,
  RocketLaunch,
} from "@phosphor-icons/react/ssr";

const projects = [
  {
    number: "01",
    title: "Tools that welcome everyone",
    description:
      "Open source foundations designed with clarity, accessibility, and the next contributor in mind.",
    tone: "violet",
    icon: RocketLaunch,
  },
  {
    number: "02",
    title: "Knowledge in the open",
    description:
      "Practical guides and learning paths that turn curiosity into confidence for developers everywhere.",
    tone: "green",
    icon: BookOpenText,
  },
  {
    number: "03",
    title: "A healthier commons",
    description:
      "Stewardship, maintenance, and support for the projects people rely on every day.",
    tone: "yellow",
    icon: HeartStraight,
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main>
      <Navbar />
      <Hero />

      <section className="intro section shell" id="about">
        <div className="intro-grid">
          <h2>Software is a shared landscape.</h2>
          <div>
            <p className="lead">
              The best ideas travel further when everyone has a path in.
            </p>
            <p>
              We invest in the people, projects, and practices that make open
              source sustainable. That means writing excellent code, sharing
              what we learn, and leaving every place better than we found it.
            </p>
            <Link className="arrow-link" href="/about">
              Meet Equal Horizons <ArrowRight aria-hidden="true" weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="shell">
          <div className="section-heading">
            <div>
              <h2>Build in the open.<br /><span>Leave a trail.</span></h2>
            </div>
            <p>Our work is practical, generous, and made to be picked up by anyone.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => {
              const ProjectIcon = project.icon;
              return (
                <article className={`project-card ${project.tone}`} key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-mark" aria-hidden="true">
                    <ProjectIcon weight="bold" />
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#connect" aria-label={`Learn more about ${project.title}`}>
                  Learn more <ArrowRight aria-hidden="true" weight="bold" />
                </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="impact section shell">
        <div className="impact-copy">
          <h2>Small acts of care<br /><em>compound.</em></h2>
          <p>Open source is built by people. We help more people find their footing, find each other, and keep going.</p>
        </div>
        <div className="stats">
          <div className="stat"><strong>100%</strong><span>open by default</span></div>
          <div className="stat"><strong>∞</strong><span>ways to contribute</span></div>
          <div className="stat"><strong>1</strong><span>shared horizon</span></div>
        </div>
      </section>

      <section className="connect" id="connect">
        <div className="shell connect-inner">
          <h2>There is room<br />for your <em>idea.</em></h2>
          <p>Follow along, contribute to a project, or simply say hello. The door is open.</p>
          <a className="button button-light" href="mailto:equalhorizonsinc@gmail.com">
            Start a conversation <ArrowUpRight aria-hidden="true" weight="bold" />
          </a>
        </div>
      </section>

      <footer className="footer shell" id="journal">
        <div className="footer-brand-group">
          <a className="footer-brand" href="#top">
            <span>Equal<br /><b>Horizons</b></span>
          </a>
          <span className="copyright">© {currentYear} Equal Horizons</span>
        </div>
        <p>A 501(c)(3) nonprofit for a more open future.</p>
        <div className="footer-links">
          <a href="https://github.com/Equal-Horizons-Inc" target="_blank" rel="noreferrer">
            <GithubLogo aria-hidden="true" weight="bold" /> GitHub
          </a>
          <a href="mailto:equalhorizonsinc@gmail.com">
            <EnvelopeSimple aria-hidden="true" weight="bold" /> Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
