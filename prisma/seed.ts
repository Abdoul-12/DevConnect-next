import "dotenv/config"
import { PrismaClient } from "../app/generated/prisma/index.js"
import { PrismaPg } from "@prisma/adapter-pg"

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
  ssl: { rejectUnauthorized: false },
})
const prisma = new PrismaClient({ adapter })

async function main() {
  const developpeurs = [
    {
      nom:           "Sterge Dorsel MBADINGA MBADINGA",
      specialite:    "Developpeur Front-end",
      image:         "sterge.png",
      lienPortfolio: "https://tonton-dxy.github.io/TontonDXY.github.io/",
      outils:        ["HTML", "CSS", "Figma", "Github", "JavaScript", "React", "VueJS", "NodeJS"],
    },
    {
      nom:           "BAKARY Abdoul WADOUD",
      specialite:    "Developpeur Fullstack",
      image:         "abdoul.png",
      lienPortfolio: "https://abdoul-12.github.io/My-portfolio/",
      outils:        ["HTML", "CSS", "TypeScript", "Next.Js", "Node.js", "ExpressJS", "Figma", "Github", "MySQL"],
    },
    {
      nom:           "Dodge Elfry NGUIA",
      specialite:    "Developpeur Fullstack",
      image:         "dodge.png",
      lienPortfolio: "https://dodgeelfry.github.io/portfolio-updated/",
      outils:        ["HTML", "CSS", "TypeScript", "Next.Js", "React", "Node.js", "ExpressJS", "Figma", "Github", "MySQL"],
    },
    {
      nom:           "Marva Lorene NSA",
      specialite:    "Developpeur Fullstack",
      image:         "marva.png",
      lienPortfolio: "https://github.com/marvansa428-dev/portfolio-marva.git",
      outils:        ["HTML5", "CSS3", "JavaScript", "Figma", "TypeScript", "Vite", "GitHub", "Git", "Next.js", "Node.js", "React"],
    },
    {
      nom:           "Christ Jordan OBIANG",
      specialite:    "Developpeur Front-end",
      image:         "Jordan.png",
      lienPortfolio: "https://jordancode28.github.io/mon_portfolio/",
      outils:        ["HTML5", "CSS3", "JavaScript", "Figma", "TypeScript", "Vite", "GitHub", "Git"],
    },
    {
      nom:           "Fatoumata NSANGOU",
      specialite:    "Developpeur Front-end",
      image:         "Fatou.png",
      lienPortfolio: "https://fatim007.github.io/Portfolio/",
      outils:        ["HTML5", "CSS3", "JavaScript", "Figma", "TypeScript", "Vite", "GitHub", "Git"],
    },
    {
      nom:           "Jeannisca NGUINA",
      specialite:    "Developpeur Front-end",
      image:         "jeannisca.png",
      lienPortfolio: "https://jeannisca.github.io/Portfolio_Jeanni/",
      outils:        ["HTML5", "CSS3", "JavaScript", "Figma", "TypeScript", "Vite", "GitHub", "Git"],
    },
    {
      nom:           "Dorcas ANOUBALAMAH",
      specialite:    "Developpeur Front-end",
      image:         null,
      lienPortfolio: null,
      outils:        [],
    },
    {
      nom:           "Nancy MALAMENOU",
      specialite:    "Developpeur Front-end",
      image:         null,
      lienPortfolio: null,
      outils:        [],
    },
    {
      nom:           "Daliah OBAME",
      specialite:    "Developpeur Front-end",
      image:         null,
      lienPortfolio: null,
      outils:        [],
    },
  ]

  for (const dev of developpeurs) {
    await prisma.developpeur.create({
      data: {
        nom:           dev.nom,
        specialite:    dev.specialite,
        image:         dev.image,
        lienPortfolio: dev.lienPortfolio,
        outils: {
          create: dev.outils.map((nom) => ({ nom })),
        },
      },
    })
  }

  console.log("10 développeurs importés depuis db.ts")
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())