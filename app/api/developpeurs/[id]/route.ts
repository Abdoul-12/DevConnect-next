import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const dev = await prisma.developpeur.findUnique({
    where: { id },
    include: { outils: true },
  })
  if (!dev) return NextResponse.json({ error: "Introuvable" }, { status: 404 })
  return NextResponse.json(dev)
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const body = await request.json()
  const dev = await prisma.developpeur.update({
    where: { id },
    data: {
      nom:           body.nom,
      specialite:    body.specialite,
      image:         body.image ?? null,
      lienPortfolio: body.lienPortfolio ?? null,
    },
  })
  return NextResponse.json(dev)
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  await prisma.developpeur.delete({ where: { id } })
  return NextResponse.json({ message: "Supprimé" })
}