import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
(
    async () => {
        try {
            
            const listarUsers = await prisma.usuario.findMany({
                where: {
                    edad: {
                        isSet : false
                    }
                }
            })
            console.log({
                "mensaje": "Mostrando usuarios",
                "listado" : listarUsers
            });

        } catch (error) {
            console.error("Hay un error", error);
        } finally {
            await prisma.$disconnect()
        }
    }

)();