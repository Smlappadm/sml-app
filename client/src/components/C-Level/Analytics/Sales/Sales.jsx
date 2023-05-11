import style from './Sales.module.css';
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
} from '@tremor/react';
import { CiCalendarDate } from 'react-icons/ci';

export const Sales = () => {
	const data = [
		{
			id: '876364',
			client: 'Camera Lens',
			date: '12/05/2020',
			name: 'Anne Jacob',
			image: 'https://i.pravatar.cc/150',
			amount: '146680',
		},
		{
			id: '876368',
			client: 'Black Sleep Dress',
			date: '12/05/2020',
			name: 'Anne Jacob',
			image: 'https://i.pravatar.cc/150',
			amount: '46550',
		},
		{
			id: '876412',
			client: 'Camera Lens',
			date: '12/05/2020',
			name: 'Anne Jacob',
			image: 'https://i.pravatar.cc/150',
			amount: '346676',
		},
		{
			id: '8766621',
			client: 'Camera Lens',
			date: '12/05/2020',
			name: 'Anne Jacob',
			image: 'https://i.pravatar.cc/150',
			amount: '346981',
		},
	];

	return (
		<Card className='h-screen bg-[39394b] w-[40rem]'>
			<div className='flex justify-between items-center m-5'>
				<Title className={style.title}>Sales</Title>
				<button>...</button>
			</div>
			<Table className={style.table}>
				<TableHead className={style.tableHead}>
					<TableRow className={style.tableRow}>
						<TableHeaderCell className='text-start'>Invoice Id</TableHeaderCell>
						<TableHeaderCell className='text-start'>
							Client Name
						</TableHeaderCell>
						<TableHeaderCell className='text-start ml-5'>Date</TableHeaderCell>
						<TableHeaderCell className='text-start ml-5'>Seller</TableHeaderCell>
						<TableHeaderCell className='text-start'>
							Total Amount
						</TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody className={style.tableBody}>
					{data.map((item) => (
						<TableRow
							key={item.id}
							className={style.tableCards}>
							<TableCell className='flex justify-start items-center p-0'>
								<p>#{item.id}</p>
							</TableCell>
							<TableCell className='flex justify-start items-center p-0'>
								<Text className='text-start'>{item.client}</Text>
							</TableCell>
							<TableCell className='flex justify-start items-center p-0'>
								<CiCalendarDate className={style.icon} />
								<Text className='text-start'>{item.date}</Text>
							</TableCell>
							<TableCell className='p-0 mx-3'>
								<div className='flex gap-1'>
									<img
										className='w-8 ml-2 mr-4 rounded-full'
										src={item.image}
										alt='avatar image'
									/>
									<Text className='text-start'>{item.name}</Text>
								</div>
							</TableCell>
							<TableCell className='p-0'>
								<Text className='text-center'>{item.amount}</Text>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
};
