import Image from "next/image";
import Link from "next/link";
import TypedDomains from "@/app/typed";
import "./page.css";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <Image
            className="logo"
            src="/custom-logo.svg"
            alt="DevConnect Logo"
            width={200}
            height={60}
            priority
          />
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1 className="hero__titre">
            Bienvenue sur <span className="devconnect">DevConnect</span>
          </h1>
          <h2 className="hero__soustitre">
            Le portail de portfolios des développeurs
          </h2>
          <p className="hero__description">
            Explorez notre vivier de talents et découvrez des professionnels fiables
            en<br />explorant leur portfolio.
          </p>
          <Link className="hero__button" href="/developpeurs">
            Explorer
          </Link>
        </section>

        <TypedDomains />

        <footer className="footer">
          <p className="copyright">© 2026 DevConnect · Tous droits réservés.</p>
        </footer>
      </main>
    </>
  );
}
