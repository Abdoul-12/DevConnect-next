import Image from "next/image";
import Link from "next/link";
import TypedDomains from "@/components/typedDomains";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-primary">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(rgba(24,18,44,0.65), rgba(24,18,44,0.65)),
            url('/portailDevv2.jpg')
          `,
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="relative px-5 pt-25">
          <Link href="/">
            <Image
              src="/custom-logo.svg"
              alt="DevConnect Logo"
              className="logo h-[clamp(1.5em,2.5vw,3.5em)] w-auto absolute top-5 left-5 "
              width={160}
              height={48}
              priority
            />
          </Link>
        </header>

        <main className="flex flex-col items-center content-center justify-center px-5 text-center leading-tight absolute min-h-screen self-center">
          <section className="flex flex-col items-center gap-6 md:gap-8">
            <h1 className="font-bold text-text text-[clamp(2.1em,5vw,6em)] leading-tight">
              Bienvenue sur <span className=" text-gras">DevConnect</span>
            </h1>
            <h2 className="font-bold text-text text-[clamp(1.8em,4vw,5em)]">
              Le portail de portfolios des développeurs
            </h2>
            <p className="text-text text-[clamp(1.5em,2.5vw,3.5em)] max-w-6xl leading-tight">
              Explorez notre vivier de talents et découvrez des professionnels fiables en explorant leur portfolio.
            </p>
            <Link
              href="/developpeurs"
              className=" text-text text-[clamp(1.5em,2.5vw,3.5em)] bg-bg-logo hover:bg-bg-logo-hover rounded-[15px] px-8 py-3 transition-colors duration-300"
            >
              Explorer
            </Link>
          </section>

        </main>
          <div className="absolute bottom-11 flex justify-end right-5 text-gras font-kode-mono">
            <TypedDomains />
          </div>
        <footer className="absolute w-full text-center bottom-3">
          <p className="text-text/60 text-sm">
            © 2026 DevConnect · Tous droits réservés.
          </p>
        </footer>

      </div>
    </div>
  );
}
