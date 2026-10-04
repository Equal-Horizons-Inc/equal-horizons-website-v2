import { ArrowUpRight, Code, HeartStraight, Megaphone } from "@phosphor-icons/react/ssr";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ContactBanner from "../ContactBanner";

const waysToHelp = [
  {
    icon: Code,
    title: "Build with us",
    text: "Contribute code, improve documentation, test an idea, or help make an interface more accessible.",
  },
  {
    icon: Megaphone,
    title: "Share the work",
    text: "Tell someone about a project, connect us with a community, or help a useful tool reach the people who need it.",
  },
  {
    icon: HeartStraight,
    title: "Bring a perspective",
    text: "Your lived experience, research, design thinking, and thoughtful feedback can change what we build next.",
  },
];

export const metadata = {
  title: "Get involved — Equal Horizons",
  description:
    "Find ways to contribute to Equal Horizons and help build a more open future.",
};

export default function GetInvolvedPage() {
  return (
    <main className="get-involved-page">
      <Navbar />

      <section className="involved-hero">
        <div className="shell">
          <h1>There is room<br /><em>for your idea.</em></h1>
          <p>
            Equal Horizons is built in the open. Whether you have an hour,
            an idea, or a new way of seeing a problem, there is a place to
            begin.
          </p>
          <a className="button button-light" href="mailto:equalhorizonsinc@gmail.com">
            Start a conversation <ArrowUpRight aria-hidden="true" weight="bold" />
          </a>
        </div>
      </section>

      <section className="involved-ways section shell">
        <div className="involved-ways__heading">
          <h2>Many ways<br /><em>to show up.</em></h2>
          <p>Open source needs more than code. It needs people who care enough to make the next step easier for someone else.</p>
        </div>
        <div className="involved-way-grid">
          {waysToHelp.map((way) => {
            const WayIcon = way.icon;
            return (
              <article className="involved-way" key={way.title}>
                <WayIcon aria-hidden="true" weight="bold" />
                <h3>{way.title}</h3>
                <p>{way.text}</p>
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
