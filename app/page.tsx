// app/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import logoUrl from '@/app/fonts/custom-logo.svg'
import {  } from "@/app/typed"

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <Image
            className="logo"
            src={logoUrl}
            alt="DevConnect Logo"
          />
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1 className="hero__titre font-bold line">
            Bienvenue sur <span className="devconnect">DevConnect</span>
          </h1>
          <h2 className="hero__soustitre font-bold">
            Le portail de portfolios des développeurs
          </h2>
          <p className="hero__description">
            Explorez notre vivier de talents et découvrez des professionnels fiables
            en<br />explorant leur portfolio.
          </p>
          <Link className="hero__button" href="#">
            Explorer
          </Link>
        </section>

        <div className="all__domains">
          <p className="domain">Front-end</p>
          <p className="domain">Back-end</p>
          <p className="domain">Full-stack</p>
        </div>

        <footer className="footer">
          <p className="copyright">© 2026 DevConnect · Tous droits réservés.</p>
        </footer>
      </main>
    </>
  )
}