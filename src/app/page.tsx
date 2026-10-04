import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import {
  ArrowRight,
} from "@phosphor-icons/react/ssr";

import { projects } from "./projects/data";
import ContactBanner from "./ContactBanner";

export default function Home() {
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
            <Link className="arrow-link" href="/projects">
              See our projects <ArrowRight aria-hidden="true" weight="bold" />
            </Link>
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
                <span className="project-label">Open invitation</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link href={`/projects/${project.slug}`} aria-label={`Learn more about ${project.title}`}>
                  Learn more <ArrowRight aria-hidden="true" weight="bold" />
                </Link>
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

      <ContactBanner />

      <Footer />
    </main>
  );
}
