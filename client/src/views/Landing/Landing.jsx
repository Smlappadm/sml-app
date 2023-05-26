import React from 'react';
import style from './Landing.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import { getEmployees, setRol, setAccess } from '../../redux/actions'
import {
	useUser,
} from "@clerk/clerk-react";
import axios from 'axios';

function Landing() {

	const user = useUser().user;
	const userEmail = user.emailAddresses[0].emailAddress;
	const employees = useSelector(state => state.employees);
	const dispatch = useDispatch();
	const role = useSelector(state => state.rol);
	const access = useSelector(state => state.isEmployee)

	const isEmployee = () => {
		return employees.some(employees => employees.email === userEmail);
	}

	useEffect(() => {
		const fetchEmployees = async () => {
			try {
				const response = await axios.get('/employees');
				const employeesData = response.data;

				dispatch(getEmployees(employeesData));
				const employee = employeesData.find(employees => employees.email === userEmail);
				if (employee) {
					dispatch(setRol(employee.rol));
					dispatch(setAccess(isEmployee()))
					console.log(employee)
				}
			} catch (error) {
				console.error('Error al obtener los empleados:', error);
			}
		};

		fetchEmployees();
	}, [dispatch, isEmployee()]);
	
	console.log(employees);
	return (
		<div className={style.container}>

			<>
				<Nav />

				{access
					?
					<div className='flex flex-col gap-5'>
						<h1>Bienvenido {user.fullName} </h1>
						<h3>rol {role} </h3>
						{role === "clevel" || role === "leader"
							?
							<div className={style.rolMenu}>
								
							</div>
							:
							role === "vendedor"
								?
								<div>
									
								</div>
								:
								<div>
									
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