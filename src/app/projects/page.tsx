import { ArrowUpRight, BookOpenText, GithubLogo, Newspaper } from "@phosphor-icons/react/ssr";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ContactBanner from "../ContactBanner";

const featuredProjects = [
  {
    number: "01",
    name: "Daily Thesis",
    icon: BookOpenText,
    tone: "violet",
    summary:
      "An app for receiving and reading daily research papers, designed to help you build a lasting habit of learning.",
    details:
      "Daily Thesis turns research into a steady, approachable ritual. Each day brings a paper to your reading queue, giving you a simple way to keep showing up for ideas that deserve more time.",
    github: "https://github.com/Equal-Horizons-Inc/Daily-Thesis",
    tags: ["Research", "Learning habits", "Open knowledge"],
  },
  {
    number: "02",
    name: "Newzy",
    icon: Newspaper,
    tone: "green",
    summary:
      "An AI-powered news reporter that generates articles for board meetings and events in towns without a central news station.",
    details:
      "Newzy helps local communities document what is happening around them. It turns event information and meeting records into useful, readable reporting so residents can stay informed when local news coverage is limited.",
    tags: ["Local news", "AI-assisted reporting", "Community information"],
  },
];

export const metadata = {
  title: "Projects — Equal Horizons",
  description:
    "Explore Daily Thesis and Newzy, two open projects from Equal Horizons.",
};

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />

      <section className="projects-hero">
        <div className="shell">
          <h1>Projects <span className="heading-nowrap">with a</span><br /><em>public purpose.</em></h1>
          <p>
            We build open tools that help people learn more, participate more,
            and find the information they need to shape their communities.
          </p>
        </div>
      </section>

      <section className="featured-projects section shell">
        <div className="featured-projects__heading">
          <p className="section-label">Two projects in motion</p>
          <p>Small, practical ideas can make a meaningful difference when they are built in the open.</p>
        </div>
        <div className="featured-project-grid">
          {featuredProjects.map((project) => {
            const ProjectIcon = project.icon;
            return (
              <article className={`featured-project featured-project--${project.tone}`} key={project.name}>
                <div className="featured-project__top">
                  <span>{project.number} / 02</span>
                  <ProjectIcon aria-hidden="true" weight="bold" />
                </div>
                <h2>{project.name}</h2>
                <p className="featured-project__summary">{project.summary}</p>
                <div className="featured-project__tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a className="button button-dark" href="mailto:equalhorizonsinc@gmail.com">
                  Talk with us <ArrowUpRight aria-hidden="true" weight="bold" />
                </a>
                {project.github && (
                  <a
                    className="project-github-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubLogo aria-hidden="true" weight="bold" /> View on GitHub
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <ContactBanner />

      <Footer />
    </main>
  );
}
