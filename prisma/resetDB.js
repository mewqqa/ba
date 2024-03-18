const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

async function run() {
    await prisma.$executeRawUnsafe('DROP Database pjwedding')
    await prisma.$executeRawUnsafe('CREATE Database pjwedding')
}
console.log('Reset DB')
run()