import Image from "next/image";

const layers = [
  { src: "/background/Plan 1.png", className: "" },
  { src: "/background/Plan 2.png", className: "" },
  { src: "/background/Plan 3.png", className: "horizon-layer--clouds" },
  { src: "/background/Plan 4.png", className: "" },
];

export default function Hero() {
  return (
    <section className="horizon-hero" id="top">
      <div className="horizon-scene" aria-hidden="true">
        {layers.map((layer) => (
          <Image
            key={layer.src}
            className={`horizon-layer ${layer.className}`}
            src={layer.src}
            alt=""
            fill
            priority
            unoptimized
            sizes="100vw"
          />
        ))}
      </div>

      <div className="shell">
        <div className="horizon-copy">
          <p className="horizon-eyebrow"><span>✳</span> An open source nonprofit</p>
          <h1>
            Better code.
            <br />
            <span>Broader horizons.</span>
          </h1>
          <p>
            Equal Horizons is a California 501(c)(3) building open-source
            software that widens public access to knowledge, learning, and
            accessibility.
          </p>
          <div className="horizon-actions">
            <a className="btn" href="#work">
              Explore our work
            </a>
            <a className="horizon-link" href="#about">
              Why open source?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
