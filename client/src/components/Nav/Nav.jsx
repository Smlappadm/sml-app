import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

import {
	UserButton,
	useUser
} from "@clerk/clerk-react";
import { IoStatsChart, IoSettingsSharp, IoBagSharp } from 'react-icons/io5';

function Nav() {
	const user = useUser().user;
	const employees = useSelector(state => state.employees);
	if (!user || !user.emailAddresses || user.emailAddresses.length === 0) {
		// Return a loading state or handle the absence of user data
		return <div>Loading...</div>;
	  }
	  const email = user.emailAddresses[0].emailAddress;
	const rol = () => {
		const employee = employees?.find(employees => employees.email === email);
		if (employee) {
			return employee.rol;
		}
		return null;
	};
	
	return (
		<div className='bg-[#39394B] flex flex-col justify-between items-center h-screen min-w-[190px]'>
			<div className='flex flex-col items-center justify-center mt-16'>
				<div className='flex flex-col items-center justify-center m-1'>
					<Link to={'/home'}>
						<img
							className='opacity-80 w-44'
							src='https://cdn.discordapp.com/attachments/1105243107555037294/1106577865698459788/White_Logo_Social_Media_Lab.png'
						/>
					</Link>
				</div>
				<div />
				<div className=' flex  w-fit mt-12 '>
					{rol() === "clevel" || rol() === "leader"
						?
						<ul className='flex flex-col gap-2'>
							<li className='flex gap-2 items-center text-[18px] text-white'>
								<span className=' text-lg'>
									<IoStatsChart className=' text-[#e0dddd]' />
								</span>
								<span>
									<Link
										to='/analytics'
										className='text-[#e0dddd] hover:text-white'>
										Analytics
									</Link>
								</span>
							</li>
							<li className='flex gap-2 items-center text-[18px]'>
								<span className=' text-lg'>
									<IoSettingsSharp className='text-[#e0dddd]' />
								</span>
								<span>
									<Link
										to='/settings'
										className=' text-[#e0dddd] hover:text-white'>
										Settings
									</Link>
								</span>
							</li>
							<li className='flex gap-2 items-center text-[18px] text-white'>
								<span className='text-[1.5rem]'>
									<IoBagSharp className='w-4 text-[#e0dddd]' />
								</span>
								<span>
									<Link
										to='/clevel'
										className='text-[#e0dddd] hover:text-white'>
										Employees
									</Link>
								</span>
							</li>
							<li className='flex gap-2 items-center text-[18px] text-white'>
								<span className='text-[1.5rem]'>
									<IoBagSharp className='w-4 text-[#e0dddd]' />
								</span>
								<span>
									<Link
										to='/protected'
										className='text-[#e0dddd] hover:text-white'>
										Home
									</Link>
								</span>
							</li>
						</ul>
						:
						<ul className='flex flex-col gap-2'>
							<li className='flex gap-2 items-center text-[18px]'>
								<span className=' text-lg'>
									<IoSettingsSharp className='text-[#e0dddd]' />
								</span>
								<span>
									<Link
										to='/settings'
										className=' text-[#e0dddd] hover:text-white'>
										Settings
									</Link>
								</span>
							</li>
							<li className='flex gap-2 items-center text-[18px] text-white'>
								<span className='text-[1.5rem]'>
									<IoBagSharp className='w-4 text-[#e0dddd]' />
								</span>
								<span>
									<Link
										to='/protected'
										className='text-[#e0dddd] hover:text-white'>
										Home
									</Link>
								</span>
							</li>
						</ul>
					}

				</div>
			</div>

			<div className='flex flex-col justify-center w-full items-center mb-5'>
				{/* <Profile /> */}
				<UserButton />
			</div>
		</div>
	);
}

export default Nav;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { IoLogOut, IoStatsChart, IoSettingsSharp, IoGrid } from 'react-icons/io5';

// function Nav() {
// 	return (
// 		<div className="bg-gray-800 flex min-w-15rem h-screen">
// 			<div className="flex flex-col justify-between items-center mt-0.5rem w-full">
// 				<div className="flex flex-col items-center justify-center gap-1rem mt-1rem w-full">
// 					<div className="flex flex-col items-center justify-center">
// 						<Link to="/">
// 							<span className="text-gray-200">ICONO</span>
// 						</Link>
// 						<h1 className="text-white">SML</h1>
// 					</div>
// 					<div />
// 					<div className="flex w-full ml-3rem md:ml-0.5rem">
// 						<ul className="flex flex-col gap-1rem">
// 							<li className="flex items-center gap-1rem">
// 								<span className="text-gray-300">
// 									<IoGrid />
// 								</span>
// 								<Link to="/dashboard" className="text-white">
// 									Dashboard
// 								</Link>
// 							</li>
// 							<li className="flex items-center gap-1rem">
// 								<span className="text-gray-300">
// 									<IoStatsChart />
// 								</span>
// 								<Link to="/analytics" className="text-white">
// 									Analytics
// 								</Link>
// 							</li>
// 							<li className="flex items-center gap-1rem">
// 								<span className="text-gray-300">
// 									<IoSettingsSharp />
// 								</span>
// 								<Link to="/settings" className="text-white">
// 									Settings
// 								</Link>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>

// 				<div className="flex justify-center items-center gap-0.5rem ml-1rem mb-3rem md:flex-col">
// 					<img
// 						className="w-3rem h-3rem rounded-full"
// 						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFADjIwjVTPKIf_2YkWdv2-N5TPzIItNC0TQ&usqp=CAU"
// 						alt="avatar"
// 					/>
// 					<div className="text-white text-sm">
// 						<p>Easin Arafat</p>
// 						<p>Free Account</p>
// 					</div>
// 					<div className="text-white text-xl ml-0.5rem">
// 						<IoLogOut />
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Nav;
