import React, { useState, useEffect } from "react";
import defaultImage from "../images/defaultBcg.jpeg";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";

const SingleRoom = () => {
	const { getRoom } = useGlobalContext();
	const { slug } = useParams();

	const [rooms, setRooms] = useState();

	useEffect(() => {
		setRooms(slug);
	}, [slug]);

	const room = getRoom(rooms);
	if (!room) {
		return (
			<div className='error'>
				<h3>No Such Room Can Be Found...</h3>
				<Link to='/rooms' className='btn-primary'>
					{" "}
					Back To Rooms
				</Link>
			</div>
		);
	}
	const {
		images,
		name,
		description,
		capacity,
		size,
		price,
		extras,
		breakfast,
		pets,
	} = room;

	const [mainImg, ...defaults] = images;

	return (
		<div>
			<StyledHero img={mainImg || defaultImage}>
				<Banner title={`${name} room`}>
					<Link to='/rooms' className='btn-primary'>
						back to rooms
					</Link>
				</Banner>
			</StyledHero>
			<section className='single-room'>
				<div className='single-room-images'>
					{defaults.map((image, index) => {
						return <img key={index} src={image} alt={name} />;
					})}
				</div>
				<div className='single-room-info'>
					<article className='desc'>
						<h3>details</h3>
						<p>{description}</p>
					</article>
					<article className='info'>
						<h3>info</h3>
						<h6>price: ${price}</h6>
						<h6>size: ${size} SQFT</h6>
						<h6>
							Max Capacity: $
							{capacity > 1 ? `${capacity} people` : `${capacity} person`}{" "}
						</h6>
						<h6>{pets ? "pets are allowed" : "no pets allowed"}</h6>
						<h6>{breakfast && "free breakfast are included"}</h6>
					</article>
				</div>
			</section>
			<section className='room-extras'>
				<h6>extras</h6>
				<ul className='extras'>
					{extras.map((extra, index) => {
						return <li key={index}> -{extra}</li>;
					})}
				</ul>
			</section>
		</div>
	);
};

export default SingleRoom;
