import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const developpeurs = await prisma.developpeur.findMany({
    include:  { outils: true },
    orderBy:  { createdAt: "desc" },
  })
  return NextResponse.json(developpeurs)
}

export async function POST(request: Request) {
  const body = await request.json()
  const dev = await prisma.developpeur.create({
    data: {
      nom:           body.nom,
      specialite:    body.specialite,
      image:         body.image ?? null,
      lienPortfolio: body.lienPortfolio ?? null,
      outils: {
        create: body.outils?.map((nom: string) => ({ nom })) ?? [],
      },
    },
    include: { outils: true },
  })
  return NextResponse.json(dev, { status: 201 })
}