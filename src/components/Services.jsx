import React, { useState } from "react";
import Title from "./Title";
import { FaBeer, FaShuttleVan, FaHiking, FaCocktail } from "react-icons/fa";

const Services = () => {
	const [items, setITems] = useState({
		services: [
			{
				icon: <FaCocktail></FaCocktail>,
				title: "Free Cocktails",
				info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, a!",
			},
			{
				icon: <FaShuttleVan></FaShuttleVan>,
				title: "Free Shuttle",
				info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, a!",
			},
			{
				icon: <FaHiking></FaHiking>,
				title: "Endless Hiking",
				info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, a!",
			},
			{
				icon: <FaBeer></FaBeer>,
				title: "Strongest Beer",
				info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, a!",
			},
		],
	});

	return (
		<section className='services'>
			<Title title='services'></Title>
			<div className='services-center'>
				{items.services.map((item, index) => {
					const { icon, title, info } = item;
					return (
						<article key={index} className='service'>
							<span>{icon}</span>
							<h6>{title}</h6>
							<p>{info}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
