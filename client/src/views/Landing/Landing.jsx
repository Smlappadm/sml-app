import React from 'react';
import style from './Landing.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import { setEmployees } from '../../redux/actions';
import {
	useUser,
	useOrganizationList,
} from "@clerk/clerk-react";
import axios from 'axios';

function Landing() {

	const user = useUser().user;
	const userEmail = user.emailAddresses[0].emailAddress;
	const employees = useSelector(state => state.employees);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchEmployees = async () => {
			try {
				const response = await axios.get('http://localhost:3001/employees');
				const employeesData = response.data;
				dispatch(setEmployees(employeesData));
			} catch (error) {
				console.error('Error al obtener los empleados:', error);
			}
		};

		fetchEmployees();
	}, [dispatch]);


	const isEmployee = () => {
		return employees.some(employees => employees.email === userEmail);
	}
	const hasRol = () => {
		const employee = employees.find(employees => employees.email === userEmail);
		if (employee) {
			return employee.rol;
		}
		return null;
	};
	console.log(user);
	return (
		<div className={style.container}>

			<>
				<Nav />

				{isEmployee()
					?
					<div className='flex flex-col gap-5'>
						<h1>Bienvenido {user.fullName} </h1>
						<h3>rol {hasRol()} </h3>
						{hasRol() === "clevel" || hasRol() === "leader"
							?
							<div>
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
							hasRol() === "vendedor"
								?
								<div>
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

					</div>
					: <h1>entrada no autorizada</h1>


				}
			</>

		</div>
	);
}

export default Landing;
/* {isLeader
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
				} */