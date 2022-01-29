import React from "react";
import { useGlobalContext } from "../context";
import Title from "./Title";

const getUnique = (items, value) => {
	return [...new Set(items.map((item) => item[value]))];
};

const RoomFilter = ({ rooms }) => {
	const { handleChange, values } = useGlobalContext();

	let types = getUnique(rooms, "type");
	types = ["all", ...types];

	types = types.map((type, index) => {
		return (
			<option key={index} value={type}>
				{type}
			</option>
		);
	});

	let people = getUnique(rooms, "capacity");
	people = people.map((type, index) => {
		return (
			<option key={index} value={type}>
				{type}
			</option>
		);
	});
	return (
		<section className='filter-container'>
			<Title title='search rooms'></Title>
			<form action='' className='filter-form'>
				{/* {select type */}
				<div className='form-group'>
					<label htmlFor='type'>room type</label>
					<select
						className='form-control'
						name='type'
						id='type'
						value={values.type}
						onChange={handleChange}
					>
						{types}
					</select>
				</div>
				{/* end of select type */}
				{/* {guests */}
				<div className='form-group'>
					<label htmlFor='capacity'>guests</label>
					<select
						className='form-control'
						name='capacity'
						id='capacity'
						value={values.capacity}
						onChange={handleChange}
					>
						{people}
					</select>
				</div>
				{/* end of guests */}
				{/* room price */}
				<div className='form-group'>
					<label htmlFor='price'>room price ${values.price}</label>
					<input
						type='range'
						name='price'
						id='price'
						min={values.minPrice}
						max={values.maxPrice}
						value={values.price}
						onChange={handleChange}
						className='form-control'
					/>
				</div>
				{/* end of room price */}
				{/* size */}
				<div className='form-group'>
					<label htmlFor='size'>room size</label>
					<div className='size-inputs'>
						<input
							type='number'
							name='minSize'
							id='size'
							value={values.minSize}
							onChange={handleChange}
							className='size-input'
						/>
						<input
							type='number'
							name='maxSize'
							id='size'
							value={values.maxSize}
							onChange={handleChange}
							className='size-input'
						/>
					</div>
				</div>
				{/* end of size */}
				{/* extras */}
				<div className='form-group'>
					<div className='single-extra'>
						<input
							type='checkbox'
							name='breakfast'
							id='breakfast'
							checked={values.breakfast}
							onChange={handleChange}
						/>
						<label htmlFor='breakfast'>breakfast</label>
					</div>
					<div className='single-extra'>
						<input
							type='checkbox'
							name='pets'
							id='pets'
							checked={values.pets}
							onChange={handleChange}
						/>
						<label htmlFor='pets'>pets</label>
					</div>
				</div>
				{/* end of extras */}
			</form>
		</section>
	);
};

export default RoomFilter;
