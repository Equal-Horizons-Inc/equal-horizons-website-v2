import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-nav">
      <div className="shell site-nav__inner">
        <Link className="site-nav__brand" href="/" aria-label="Equal Horizons home">
          <Image
            src="/Media/Banner.png"
            alt="Equal Horizons"
            width={600}
            height={200}
            priority
          />
        </Link>
        <nav className="site-nav__links" aria-label="Main navigation">
          <Link href="/about">About us</Link>
          <Link href="/#work">Our work</Link>
          <Link href="/#work">Projects</Link>
          <Link href="/#journal">Journal</Link>
        </nav>
        <a className="btn" href="#connect">
          Get involved
        </a>
      </div>
    </header>
  );
}
