import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import style from './CorredoresDashboard.module.css';
import Nav from '../../Nav/Nav';

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

import { CiGlobe } from 'react-icons/ci';
import { GrInstagram } from 'react-icons/gr';
import { IoGrid, IoStatsChart } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { getLeadUnchecked10 } from '../../../redux/actions';
import IconLabelButtons from '../../MaterialUi/IconLabelButtons';

const CorredoresDashboard = () => {
	const [instaComplete, setInstaComplete] = useState([]);
	const [client, setClient] = useState([]);
	const handleClientClick = (event, index) => {
		const { name, value } = event.target;

		setClient((prevState) => {
			const updatedClient = [...prevState];
			updatedClient[index] = {
				...updatedClient[index],
				[name]: value,
				level: value,
			};
			if (name === 'instagram') {
				setInstaComplete((prevInstaComplete) => {
					const updatedInstaComplete = [...prevInstaComplete];
					updatedInstaComplete[index] = value.trim() !== '';
					return updatedInstaComplete;
				});
			}
			return updatedClient;
		});
	};

	const { leadUnchecked10 } = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLeadUnchecked10());
		handleView()
	}, [dispatch]);

	useEffect(() => {
		let clientes = [];
		let i = 0;
		if (leadUnchecked10.length > 0) {
			for (i = 0; i < 10; i++) {
				clientes.push({
					_id: leadUnchecked10[i]._id,
					name: leadUnchecked10[i].name,
					url: leadUnchecked10[i].url,
					instagram: '',
					level: '0',
					checked: true,
					view: true,
				});
			}
		}
		setClient(clientes);
	}, [leadUnchecked10]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log('Enviado');
		alert('Enviando Informacion');
		try {
			for (let i = 0; i < leadUnchecked10.length; i++) {
				if (!client[i].level || !client[i].instagram) {
					// Verificar si los campos están vacíos
					alert(
						`campos incompletos en name: ${client[i].name} id: ${client[i]._id}`
					);
					continue; // Saltar a la siguiente iteración del bucle
				}
				const response = await axios.put(
					`http://localhost:3001/lead/${client[i]._id}`,
					{
						_id: client[i]._id,
						name: client[i].name,
						url: client[i].url,
						instagram: client[i].instagram,
						level: client[i].level,
						checked: client[i].checked,
					}
				);
				console.log(response.data);
			}
			alert('Solicitud enviada correctamente');
			dispatch(getLeadUnchecked10());
		} catch (error) {
			console.log('No se envio el put');
		}
	};
	const handleView = async (event) => {
		event.preventDefault();
		console.log('Enviado el view');
		try {
			for (let i = 0; i < leadUnchecked10.length; i++) {
				
				const response = await axios.put(
					`http://localhost:3001/lead/${client[i]._id}`,
					{
						view: client[i].view,
					}
				);
				console.log(response.data);
			}
			console.log('view seteados');
		} catch (error) {
			console.log('No se envio el put de view');
		}
	};

	return (
		<>
			<Nav />
			<Card className='w-full h-screen m-5'>
				<form onSubmit={handleSubmit}>
					<div className='flex justify-between items-center'>
						<div className='flex gap-10  mt-2 mx-5 '>
							<Title className='font-bold text-[#e2e2e2] text-lg'>
								Dashboard
							</Title>
							<div className='flex gap-5'>
								<Link to={'/corredores'}>
									<IoGrid className='text-[2rem] text-[#418df0] hover:text-[#3570bd]' />
								</Link>
								<Link
									className='text-5xl'
									to={'/corredores/analytics'}>
									<IoStatsChart className='text-[2rem] text-[#418df0] hover:text-[#3570bd]' />
								</Link>
							</div>
						</div>
						<div className='flex gap-12'>
							<button
								type='submit'
								onClick={handleSubmit}>
								<IconLabelButtons />
							</button>
						</div>
					</div>
					<Table className={style.table}>
						<TableHead className={style.tableHead}>
							<TableRow className={style.tableRow}>
								<TableHeaderCell className='text-start'>
									Invoice Id
								</TableHeaderCell>
								<TableHeaderCell className='text-start'>Name</TableHeaderCell>
								<TableHeaderCell className='text-start'>Web</TableHeaderCell>
								<TableHeaderCell className='text-start'>
									Instagram
								</TableHeaderCell>
								<TableHeaderCell className='text-start'>Nivel</TableHeaderCell>
							</TableRow>
						</TableHead>

						<TableBody className='h-3/4'>
							{client.map((item, index) => (
								<TableRow
									key={item._id}
									className={style.tableCards}>
									<TableCell className='flex justify-start items-center p-0'>
										<div className='w-24 p-1 px-3 rounded-full text-ellipsis opacity-1 overflow-hidden hover:overflow-visible hover:bg-[#ffffff] hover:w-fit hover:text-black z-111 hover:absolute'>
											<div
												type='text'
												id='id'
												value={client[index]._id}>
												<p>{client[index]._id}</p>
											</div>
										</div>
									</TableCell>
									<TableCell className='flex justify-start items-center p-0'>
										<div
											type='text'
											id='name'
											value={client[index].name}>
											<p className='w-96 p-1 px-3 rounded-full text-ellipsis opacity-1 whitespace-nowrap overflow-hidden hover:overflow-visible hover:bg-[#e3e1e1] hover:w-fit hover:text-black z-111 hover:absolute'>
												{client[index].name}
											</p>
										</div>
									</TableCell>

									<TableCell className='flex justify-start items-center p-0'>
										{/* Botón de web */}
										<Link
											to={client[index].url}
											target='_blank'>
											<p value={client[index].url}>
												<CiGlobe className='text-[2rem] text-[#418df0]' />
											</p>
										</Link>
									</TableCell>

									<TableCell className='flex justify-start items-center gap-3 p-0 mx-3'>
										<div>
											<GrInstagram className='text-[2rem] text-[#418df0]' />
										</div>
										<input
											className={`bg-transparent rounded-full border-2 border-gray-300 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder-white focus:placeholder-black ${
												client[index].instagram ? 'border-green-500' : ''
											}`}
											type='text'
											name='instagram'
											value={client[index].Instagram}
											onChange={(event) => handleClientClick(event, index)}
											placeholder='Ingrese un instagram'
										/>
									</TableCell>

									<TableCell className='flex justify-start items-center p-0'>
										<button
											className={
												item.level === '0'
													? style.buttonNivelActive
													: style.buttonNivel
											}
											type='button'
											name={item._id}
											value='0'
											onClick={(event) => handleClientClick(event, index)}>
											0
										</button>
										<button
											className={
												item.level === '1'
													? style.buttonNivelActive
													: style.buttonNivel
											}
											type='button'
											name={item._id}
											value='1'
											onClick={(event) => handleClientClick(event, index)}>
											1
										</button>
										<button
											className={
												item.level === '2'
													? style.buttonNivelActive
													: style.buttonNivel
											}
											type='button'
											name={item._id}
											value='2'
											onClick={(event) => handleClientClick(event, index)}>
											2
										</button>
										<button
											className={
												item.level === 'incidencia'
													? style.buttonNivelActive
													: style.buttonNivel
											}
											type='button'
											name={item._id}
											value='incidencia'
											onClick={(event) => handleClientClick(event, index)}>
											⚠
										</button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</form>
			</Card>
		</>
	);
};

export default CorredoresDashboard;
