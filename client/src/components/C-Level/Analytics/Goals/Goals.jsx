import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
	labels: ['Gonzalo', 'Gustavo', 'Nicolas'],
	datasets: [
		{
			data: [12, 19, 3],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 159, 64, 0.2)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 159, 64, 1)',
			],
			borderWidth: 1,
		},
	],
};

function Goals() {
	return (
		<div className='flex flex-col justify-around items-center rounded-xl h-[40rem] w-[30rem] bg-[#39394b]'>
			<div className='flex w-[25rem] justify-between items-center'>
				<h2>Goals</h2>
				<p>...</p>
			</div>
			<div className='flex justify-center items-center'>
				<Pie data={data} />
			</div>
		</div>
	);
}

export default Goals;
