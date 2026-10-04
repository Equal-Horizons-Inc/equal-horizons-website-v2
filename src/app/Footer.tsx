import { EnvelopeSimple, GithubLogo } from "@phosphor-icons/react/ssr";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner shell">
        <div className="footer-brand-group">
          <Link className="footer-brand" href="/">
            <span>Equal<br /><b>Horizons</b></span>
          </Link>
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
      </div>
    </footer>
  );
}
