import React from "react";
import styles from "../DashboardContract/contract.module.css"
import { MailIcon } from "@heroicons/react/solid";
import { Card, Icon, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from "@tremor/react"

const data = [
    {
        invoiseId: 1,
        name:' social media lab',
       profesion: 'ábogado',
        nivel: '1',
        telefono: '1234',
        email: 'prueba@gmail.com',
        status: 'sin contactar'
    },
    {
       invoiseId: 2,
        name:'social media lab',
       profesion: 'profesor',
        nivel: '2',
        telefono: '12345',
        email: 'henry@gmail.com',
        status: 'sin contactar'
    },
    {
        invoiseId: 3,
        name:' social media lab',
       profesion: 'programador',
        nivel: '6',
        telefono: '321',
        email: 'programador@gmail.com',
        status: 'sin contactar'

    },
    {
        invoiseId: 2,
         name:'social media lab',
        profesion: 'profesor',
         nivel: '2',
         telefono: '12345',
         email: 'henry@gmail.com',
         status: 'sin contactar'
    },
    {
        invoiseId: 2,
         name:'social media lab',
        profesion: 'profesor',
         nivel: '2',
         telefono: '12345',
         email: 'henry@gmail.com',
         status: 'sin contactar'
    },
    {
        invoiseId: 2,
         name:'social media lab',
        profesion: 'profesor',
         nivel: '2',
         telefono: '12345',
         email: 'henry@gmail.com',
         status: 'sin contactar'
    },
        {
       invoiseId: 2,
        name:'social media lab',
       profesion: 'profesor',
        nivel: '2',
        telefono: '12345',
        email: 'henry@gmail.com',
        status: 'sin contactar'
    },
]

const DashboardContract = () => {
    return(
        <>
        <Card className="w-4/5 h-screen ">
            <div className="flex justify-between items-center m-5">
            <Title className={styles.title}>Dashboard</Title>
            </div>

            <Table className={styles.table}>
            <TableHead  className={styles.tableHead}>
                <TableRow className={styles.tableRow}>
                    <TableHeaderCell className="text-start">Invoice Id</TableHeaderCell>
                    <TableHeaderCell className="text-start">Name</TableHeaderCell>
                    <TableHeaderCell className="text-start">Profesion</TableHeaderCell>
                    <TableHeaderCell className="text-start">Nivel</TableHeaderCell>
                    <TableHeaderCell className="text-start">Telefono</TableHeaderCell>
                    <TableHeaderCell className="text-start">Email</TableHeaderCell>
                    <TableHeaderCell className="text-start">Status</TableHeaderCell>
                </TableRow>
            </TableHead>

            <TableBody className={styles.tableBody}>
                {data.map((item) => (
                    <TableRow className={styles.tableCards}>
                        <TableCell className="flex justify-start items-center p-0">{item.invoiseId}</TableCell>
                        <TableCell className="flex justify-start items-center p-1">{item.name}</TableCell>
                        <TableCell className="flex justify-start items-center p-2">{item.profesion}</TableCell>
                        <TableCell className={styles.nivel}>{item.nivel}</TableCell>
                        <TableCell className="flex justify-start items-center p-4">{item.telefono}</TableCell>
                        <Icon size="xs" variant="solid" icon={MailIcon}/>
                        <TableCell className="flex justify-start items-center p-5">{item.email}</TableCell>
                        <TableCell className={styles.status}>{item.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </Card>
        </>
    )
}

export default DashboardContract;