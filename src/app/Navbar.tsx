"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
        <nav
          id="mobile-navigation"
          className={`site-nav__links${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          <Link href="/about" onClick={closeMenu}>About us</Link>
          <Link href="/projects" onClick={closeMenu}>Our work</Link>
          <Link className="site-nav__mobile-cta" href="/get-involved" onClick={closeMenu}>
            Get involved
          </Link>
        </nav>
        <Link className="btn site-nav__cta" href="/get-involved">
          Get involved
        </Link>
        <button
          className="site-nav__menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
