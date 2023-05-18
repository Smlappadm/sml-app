import React from 'react';
import style from './Landing.module.css';
import { Link, useLocation } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import {
	useUser,
	useOrganizationList,
} from "@clerk/clerk-react";

function Landing() {
	const user = useUser().user
	const orgList = useOrganizationList().organizationList
	const isLeader = orgList.length !== 0

	console.log(isLeader && true)

	return (
		<div className={style.container}>
			
			<>
				<Nav />
				{isLeader
					?
					<div className='flex flex-col gap-5'>
						<h1>Bienvenido name </h1>
						<Link
							to='/employees'
							className={style.linksRoutes}>
							Lider-Dashboard
						</Link>
						<Link
							to='/employees/analytics'
							className={style.linksRoutes}>
							Lider-Analytics
						</Link>
						<Link
							to='/corredores'
							className={style.linksRoutes}>
							Corredores-Dashbord
						</Link>
						<Link
							to='/corredores/analytics'
							className={style.linksRoutes}>
							Corredores-Analytics
						</Link>
						<Link
							to='/analytics'
							className={style.linksRoutes}>
							Analytics
						</Link>
						<Link
							to='/vendedores'
							className={style.linksRoutes}>
							VendedoresDashboard
						</Link>
						<Link
							to='/vendedores/analytics'
							className={style.linksRoutes}>
							VendedoresAnalytics
						</Link>
					</div>
					:
					<div>
						<h1>Bienvenido {user.fullName} </h1>
						<Link
							to='/corredores'
							className={style.linksRoutes}>
							Corredores-Dashbord
						</Link>
						<Link
							to='/corredores/analytics'
							className={style.linksRoutes}>
							Corredores-Analytics
						</Link>
						<Link
							to='/corredores'
							className={style.linksRoutes}>
							Corredores-Dashbord
						</Link>
						<Link
							to='/corredores/analytics'
							className={style.linksRoutes}>
							Corredores-Analytics
						</Link>
					</div>
				}
			</>

		</div>
	);
}

export default Landing;
