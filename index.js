import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
(
    async () => {
        try {
            /* const consulta = {
                where: {
                    email: "fabricio@idt.com.py"
                }
            } */

            const consulta2 = {
                where: {
                    nickname: {
                        isSet: false
                    },
                }
            }
            /* Borrar sólo un usuario */
            /* const borrarUser = await prisma.usuario.delete(consulta)
            console.log({
                "mensaje": "Borrando usuarios",
                "borrados" : borrarUser
            }); */

            /* Borrar varios usuarios */
            const borrados = await prisma.usuario.deleteMany(
                consulta2
            )
            console.log({"mensaje": "eliminados", borrados});

        } catch (error) {
            console.error("Hay un error", error);
        } finally {
            await prisma.$disconnect()
        }
    }

)();