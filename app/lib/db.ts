

//introducing the sigelton prisma client in devmode is necesssary
import { PrismaClient } from "@prisma/client"
export const prismaClient = new PrismaClient()

