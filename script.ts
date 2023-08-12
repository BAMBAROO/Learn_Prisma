import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main () {
    const user = await prisma.user.create({
        data: {
            name: "bruce",
            age: 22,
            email: "bruce@gmail.com"
        }
    });
    console.log(user);
}

main()
    .catch(async (e: Error) => {
        console.error(e)
        await prisma.$disconnect();
    })
    .finally(async () => {
        await prisma.$disconnect();
    })