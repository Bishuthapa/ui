import Image from "next/image";
import Link from "next/link";

const services = [
  "UI & UX",
  "Development",
  "Blockchain",
];

export default function ServiceSection() {
  return (
    <section className="service-wrapper">
      <div className="service-inner">
        <div className="service-top">
          <div className="service-copy">
            <p className="service-description">
              Experience our expert solutions tailored to enhance your business
              with top-tier design, development, and animation.
            </p>
            <Link href="#" className="service-cta">
              <span>Services</span>
            </Link>
          </div>

          <div className="service-animated">
            <div className="service-animated-column">
              <Image
                src="/service-animate-1.svg"
                alt="Services slider column 1"
                width={337}
                height={53}
                priority
              />
            </div>
            <div className="service-animated-column">
              <Image
                src="/service-animate-2.svg"
                alt="Services slider column 2"
                width={337}
                height={53}
              />
            </div>
            <div className="service-animated-column">
              <Image
                src="/service-animate-3.svg"
                alt="Services slider column 3"
                width={337}
                height={66}
              />
            </div>
          </div>
        </div>

        <div className="service-carousel">
          <div className="service-carousel-track">
            <Image
              src="/service-rect-1.png"
              alt="Service showcase 1"
              width={1012}
              height={569}
              className="service-carousel-image"
              priority
            />
            <Image
              src="/service-rect-2.png"
              alt="Service showcase 2"
              width={1012}
              height={569}
              className="service-carousel-image"
            />
            <Image
              src="/service-rect-3.png"
              alt="Service showcase 3"
              width={1012}
              height={569}
              className="service-carousel-image"
            />
            <Image
              src="/service-rect-4.png"
              alt="Service showcase 4"
              width={1012}
              height={569}
              className="service-carousel-image"
            />

            <div className="service-drag-pill">
              <div className="service-drag-circle" />
              <span className="service-drag-text">Drag</span>
            </div>
          </div>
        </div>

        <div className="service-divider">
          <Image
            src="/service-hero-side.svg"
            alt="Divider"
            width={1218}
            height={7}
          />
        </div>

        <div className="service-partners">
          <h2 className="service-partners-title">Our Partners</h2>
          <div className="service-partners-logos">
            <Image
              src="/service-partners-row.svg"
              alt="Partner logos"
              width={1058}
              height={75}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

