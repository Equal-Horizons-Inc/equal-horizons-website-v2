import {
  ArrowLeft,
  ArrowUpRight,
} from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import { getProject, projects } from "../data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  return project
    ? {
        title: `${project.shortTitle} — Equal Horizons`,
        description: project.description,
      }
    : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const ProjectIcon = project.icon;

  return (
    <main>
      <Navbar />
      <section className={`project-hero project-hero--${project.tone}`}>
        <div className="shell">
          <Link className="project-back" href="/#work">
            <ArrowLeft aria-hidden="true" weight="bold" /> Back to our work
          </Link>
          <div className="project-hero__top">
            <span className="project-hero__number">{project.number} / 03</span>
            <ProjectIcon aria-hidden={true} weight="bold" />
          </div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      </section>

      <section className="project-detail section shell">
        <div className="project-detail__intro">
          <span className="section-label">What we are building</span>
          <h2>Leave the trail<br /><em>better than you found it.</em></h2>
        </div>
        <div className="project-detail__body">
          <p className="lead">{project.details}</p>
          <div className="project-focus">
            {project.focus.map((item) => <span key={item}>{item}</span>)}
          </div>
          <a className="button button-dark" href="mailto:equalhorizonsinc@gmail.com">
            Get involved <ArrowUpRight aria-hidden="true" weight="bold" />
          </a>
        </div>
      </section>

      <section className="project-invite">
        <div className="shell project-invite__inner">
          <p>Have an idea that belongs here?</p>
          <Link className="arrow-link" href="/#connect">
            Start a conversation <ArrowUpRight aria-hidden="true" weight="bold" />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
