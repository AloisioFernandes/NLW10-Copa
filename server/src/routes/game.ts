import { FastifyInstance } from "fastify"
import { z } from 'zod'
import { prisma } from "../lib/prisma"
import { authenticate } from '../plugins/authenticate'

export async function gameRoutes(fastify: FastifyInstance) {
  fastify.get('/pools/:id/games', {
    onRequest: [authenticate]
  }, async (request) => {
    const getGameParams = z.object({
      id: z.string()
    })

    const { id } = getGameParams.parse(request.params)

    const games = await prisma.game.findMany({})
  })
  
}
