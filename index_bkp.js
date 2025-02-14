import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
const prisma = new PrismaClient();
const aplicacion = express()
aplicacion.use(cors())
aplicacion.use(express.json())

const PUERTO = 3000

aplicacion.get("/", (peticion, respuesta) => {
    respuesta.send("Hola")
})

aplicacion.get("/usuarios", async (peticion, respuesta) => {
    try {
        const usuarioObjeto = {
            data: {
                email: 'prueba1@idt.com.py',
                edad: 47
            },
        }

        

       /*  const actualizarUser2 = await prisma.usuario.update({
            where : { email: "aquino@idt.com.py" },
            data: { full: "completo", edad: 60 }
        })
        console.log("usuario actualizado2", actualizarUser2); */


        const crearUser = await prisma.usuario.create(usuarioObjeto)
        respuesta.send(crearUser)
        console.log("Usuario creado", crearUser);


    } catch (error) {
        console.error("Hay un error", error);
    } finally {
        await prisma.$disconnect()
    }
})


/* (
    async () => {
        try {
            const usuarioObjeto = {
                data: {
                    email: 'prueba@idt.com.py',
                    edad: 47
                },
            }

            

           //  const actualizarUser2 = await prisma.usuario.update({
           //     where : { email: "aquino@idt.com.py" },
           //     data: { full: "completo", edad: 60 }
           // })
           // console.log("usuario actualizado2", actualizarUser2);


            const crearUser = await prisma.usuario.create(usuarioObjeto)
            console.log("Usuario creado", crearUser);


        } catch (error) {
            console.error("Hay un error", error);
        } finally {
            await prisma.$disconnect()
        }
    }

)(); */