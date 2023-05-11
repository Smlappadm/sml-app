import React from 'react';
import style from './AnalyticsNumerics.module.css';
import { BsFillHeartFill } from 'react-icons/bs';
import {
	RiGamepadFill,
	RiShoppingBag2Fill,
	RiBriefcase4Fill,
} from 'react-icons/ri';

function AnalyticsNumerics() {
	return (
		<div className={style.container}>
			<div className={style.card}>
				<div className={style.icon1}>
					<BsFillHeartFill />
				</div>
				<div>
					<h2>178+</h2>
					<p>Filtered</p>
				</div>
			</div>
			<div className={style.card}>
				<div className={style.icon2}>
					<RiGamepadFill />
				</div>
				<div>
					<h2>20k+</h2>
					<p>New Leads</p>
				</div>
			</div>
			<div className={style.card}>
				<div className={style.icon3}>
					<RiShoppingBag2Fill />
				</div>
				<div>
					<h2>190+</h2>
					<p>sales</p>
				</div>
			</div>
			<div className={style.card}>
				<div className={style.icon4}>
					<RiBriefcase4Fill />
				</div>
				<div>
					<h2>12+</h2>
					<p>Employees</p>
				</div>
			</div>
		</div>
	);
}

export default AnalyticsNumerics;
