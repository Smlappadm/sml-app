import React from 'react';

function BestSellers() {
	return (
		<div className='flex justify-center items-center gap-0.5rem ml-1rem mb-3rem'>
			<img
				className='w-12 h-12 rounded-full'
				src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFADjIwjVTPKIf_2YkWdv2-N5TPzIItNC0TQ&usqp=CAU'
				alt='profile avatar'
			/>
			<div className='text-white text-sm'>
				<p>Easin Arafat</p>
				<p>Free Account</p>
			</div>
		</div>
	);
}

export default BestSellers;
