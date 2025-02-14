import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
(
    async () => {
        try {
            const usuarioObjeto = {
                data: {
                    email: 'prueba@idt.com.py',
                    edad: 47
                },
            }

            

           /*  const actualizarUser2 = await prisma.usuario.update({
                where : { email: "aquino@idt.com.py" },
                data: { full: "completo", edad: 60 }
            })
            console.log("usuario actualizado2", actualizarUser2); */


            const crearUser = await prisma.usuario.create(usuarioObjeto)
            console.log("Usuario creado", crearUser);


        } catch (error) {
            console.error("Hay un error", error);
        } finally {
            await prisma.$disconnect()
        }
    }

)();