import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

const FeaturedRooms = () => {
	let { featuredRooms: rooms, loading } = useGlobalContext();
	rooms = rooms.map((room) => {
		return <Room key={room.id} room={room}></Room>;
	});

	return (
		<section className='featured-rooms'>
			<Title title='Featured Rooms'></Title>
			<div className='featured-rooms-center'>
				{loading ? <Loading></Loading> : rooms}
			</div>
		</section>
	);
};

export default FeaturedRooms;
