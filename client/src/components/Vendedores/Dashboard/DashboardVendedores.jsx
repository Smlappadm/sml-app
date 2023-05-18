import { useState, useEffect } from 'react';
import style from './DashboardVendedores.module.css';

import {
	Card,
	Table,
	TableHead,
	TableRow,
	TableHeaderCell,
	TableBody,
	TableCell,
	Text,
	Title,
	Badge,
} from '@tremor/react';

import { CiGlobe, CiWarning, CiInstagram } from 'react-icons/ci';
import Nav from '../../Nav/Nav';

const DashboardVendedores = () => {
	const [client, setClient] = useState([
		{
			InvoiceId: 2222222,
			Name: 'Juan Carlos Gomez',
			Profesion: 'www.google.com',
			Nivel: 1,
			Telephone: '+22131234',
			Email: 'Hola@gmail.com',
			Status: 'Contratado',
		},
		{
			InvoiceId: 2222222,
			Name: 'Juan Carlos Gomez',
			Profesion: 'www.google.com',
			Nivel: 1,
			Telephone: '+22131234',
			Email: 'Hola@gmail.com',
			Status: 'Contratado',
		},
		{
			InvoiceId: 2222222,
			Name: 'Juan Carlos Gomez',
			Profesion: 'www.google.com',
			Nivel: 1,
			Telephone: '+22131234',
			Email: 'Hola@gmail.com',
			Status: 'Contratado',
		},
		{
			InvoiceId: 2222222,
			Name: 'Juan Carlos Gomez',
			Profesion: 'www.google.com',
			Nivel: 1,
			Telephone: '+22131234',
			Email: 'Hola@gmail.com',
			Status: 'Contratado',
		},
		{
			InvoiceId: 2222222,
			Name: 'Juan Carlos Gomez',
			Profesion: 'www.google.com',
			Nivel: 1,
			Telephone: '+22131234',
			Email: 'Hola@gmail.com',
			Status: 'Contratado',
		},
		{
			InvoiceId: 2222222,
			Name: 'Juan Carlos Gomez',
			Profesion: 'www.google.com',
			Nivel: 1,
			Telephone: '+22131234',
			Email: 'Hola@gmail.com',
			Status: 'Contratado',
		},
		{
			InvoiceId: 2222222,
			Name: 'Juan Carlos Gomez',
			Profesion: 'www.google.com',
			Nivel: 1,
			Telephone: '+22131234',
			Email: 'Hola@gmail.com',
			Status: 'Contratado',
		},
		{
			InvoiceId: 2222222,
			Name: 'Juan Carlos Gomez',
			Profesion: 'www.google.com',
			Nivel: 1,
			Telephone: '+22131234',
			Email: 'Hola@gmail.com',
			Status: 'Contratado',
		},
		{
			InvoiceId: 2222222,
			Name: 'Juan Carlos Gomez',
			Profesion: 'www.google.com',
			Nivel: 1,
			Telephone: '+22131234',
			Email: 'Hola@gmail.com',
			Status: 'Contratado',
		},
		{
			InvoiceId: 2222222,
			Name: 'Juan Carlos Gomez',
			Profesion: 'www.google.com',
			Nivel: 1,
			Telephone: '+22131234',
			Email: 'Hola@gmail.com',
			Status: 'Contratado',
		},
	]);
	const [nivel, setNivel] = useState({
		1: '',
		2: '',
		3: '',
		4: '',
		5: '',
		6: '',
		7: '',
		8: '',
		9: '',
		10: '',
	});
	const data = [
		{
			InvoiceId: 2222222,
			Name: 'Juan Carlos Gomez',
			Profesion: 'www.google.com',
			Nivel: 1,
			Telephone: '+22131234',
			Email: 'Hola@gmail.com',
			Status: 'Contratado',
		},
		{
			InvoiceId: 2222222,
			Name: 'Juan Carlos Gomez',
			Profesion: 'www.google.com',
			Nivel: 1,
			Telephone: '+22131234',
			Email: 'Hola@gmail.com',
			Status: 'Contratado',
		},
		{
			InvoiceId: 2222222,
			Name: 'Juan Carlos Gomez',
			Profesion: 'www.google.com',
			Nivel: 1,
			Telephone: '+22131234',
			Email: 'Hola@gmail.com',
			Status: 'Contratado',
		},
		{
			InvoiceId: 2222222,
			Name: 'Juan Carlos Gomez',
			Profesion: 'www.google.com',
			Nivel: 1,
			Telephone: '+22131234',
			Email: 'Hola@gmail.com',
			Status: 'Contratado',
		},
		{
			InvoiceId: 2222222,
			Name: 'Juan Carlos Gomez',
			Profesion: 'www.google.com',
			Nivel: 1,
			Telephone: '+22131234',
			Email: 'Hola@gmail.com',
			Status: 'Contratado',
		},
		{
			InvoiceId: 2222222,
			Name: 'Juan Carlos Gomez',
			Profesion: 'www.google.com',
			Nivel: 1,
			Telephone: '+22131234',
			Email: 'Hola@gmail.com',
			Status: 'Contratado',
		},
	];
	const handleNivelClick = (event) => {
		setNivel({ ...nivel, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<div className='flex flex-row w-screen'>
			<Nav />
			<Card className='w-full m-5 h-screen '>
				<div className='flex justify-between items-center m-5'>
					<Title className={style.title}>Dashboard</Title>
					<button className={style.buttonAdd}>Send </button>
				</div>

				<Table className={style.table}>
					<TableHead className={style.tableHead}>
						<TableRow className={style.tableRow}>
							<TableHeaderCell className='text-start'>
								Invoice Id
							</TableHeaderCell>
							<TableHeaderCell className='text-start'>Name</TableHeaderCell>
							<TableHeaderCell className='text-start'>
								Profesion
							</TableHeaderCell>
							<TableHeaderCell className='text-start'>Nivel</TableHeaderCell>
							<TableHeaderCell className='text-start'>
								Telephone
							</TableHeaderCell>
							<TableHeaderCell className='text-start'>Email</TableHeaderCell>
							<TableHeaderCell className='text-start'>Status</TableHeaderCell>
						</TableRow>
					</TableHead>

					<TableBody className={style.tableBody}>
						{client.map((item, index) => (
							<TableRow
								key={item.InvoiceId}
								className={style.tableCards}>
								<TableCell className='flex justify-start items-center p-0'>
									<div className='w-8 ml-2 mr-4 rounded-full'>
										{item.InvoiceId}
									</div>
								</TableCell>
								<TableCell className='flex justify-start items-center p-0'>
									<Text className='text-start'>{item.Name}</Text>
								</TableCell>
								<TableCell className='flex justify-start items-center p-0'>
									<Text className='text-start'>{item.Profesion}</Text>
								</TableCell>
								<TableCell className='flex justify-start items-center p-0 mx-3'>
									<Text className='text-start bg-[#6254ff] py-2 px-3 text-xl rounded-md'>
										{item.Nivel}
									</Text>
								</TableCell>
								<TableCell className='flex justify-start items-center p-0'>
									<Text className='text-start'>{item.Telephone}</Text>
								</TableCell>
								<TableCell className='flex justify-start items-center p-0'>
									<Text className='text-start'>{item.Email}</Text>
								</TableCell>
								<TableCell className='flex justify-start items-start p-0'>
									<button className='bg-[#ff69b4] rounded-3xl px-6 py-1'>
										Contratado
									</button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Card>
		</div>
	);
};

export default DashboardVendedores;
