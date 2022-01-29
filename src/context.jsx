import React, { useState, useEffect, useContext } from "react";
import { items } from "./data";
const RoomContext = React.createContext();

const initialValues = {
	pets: false,
	capacity: 1,
	price: 0,
	minPrice: 0,
	minSize: 0,
	type: "all",
	breakfast: false,
	maxSize: 0,
	maxPrice: 0,
};

const RoomProvider = ({ children }) => {
	const [rooms, setRooms] = useState([]);
	const [sortedRooms, setSortedRooms] = useState([]);
	const [featuredRooms, setFeaturedRooms] = useState([]);
	const [loading, setLoading] = useState(true);
	const [values, setValues] = useState(initialValues);

	const formatData = (items) => {
		let tempItems = items.map((item) => {
			let id = item.sys.id;
			let images = item.fields.images.map((image) => image.fields.file.url);
			let room = { ...item.fields, images, id };
			return room;
		});
		return tempItems;
	};

	const getRoom = (slug) => {
		let tempRooms = [...rooms];
		const room = tempRooms.find((room) => room.slug === slug);
		return room;
	};

	const filterRooms = () => {
		const { type, breakfast, price, capacity, pets, maxSize, minSize } = values;
		let capacities = parseInt(capacity);
		let tempRooms = [...rooms];
		//filter by type
		if (type !== "all") {
			tempRooms = tempRooms.filter((room) => room.type === type);
		}

		//filter by capacity
		if (capacities !== 1) {
			tempRooms = tempRooms.filter((room) => room.capacity >= capacities);
		}

		//filter by price

		let prices = parseInt(price);

		//filter by size

		tempRooms = tempRooms.filter(
			(room) => room.size >= minSize && room.size <= maxSize
		);

		//filter by breakfast
		if (breakfast) {
			tempRooms = tempRooms.filter((room) => room.breakfast === true);
		}
		//filter by pets
		if (pets) {
			tempRooms = tempRooms.filter((room) => room.pets === true);
		}

		//change starte
		tempRooms = tempRooms.filter((room) => room.price <= prices);
		setSortedRooms(tempRooms);
	};

	const handleChange = (event) => {
		event.preventDefault();
		const target = event.target;
		const name = event.target.name;
		const value = target.type === "checkbox" ? target.checked : target.value;
		setValues(
			{
				...values,
				[name]: value,
			},
			filterRooms()
		);
	};

	useEffect(() => {
		let rooms = formatData(items);
		let featuredRooms = rooms.filter((room) => room.featured === true);
		let maxPrice = Math.max(...rooms.map((room) => room.price));
		let maxSize = Math.max(...rooms.map((room) => room.size));
		setValues({ price: maxPrice, maxSize, maxPrice });
		setRooms(rooms);
		setSortedRooms(rooms);
		setFeaturedRooms(featuredRooms);
		setLoading(false);
	}, []);

	return (
		<RoomContext.Provider
			value={{
				rooms,
				sortedRooms,
				featuredRooms,
				loading,
				getRoom,
				handleChange,
				values,
			}}
		>
			{children}
		</RoomContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(RoomContext);
};

export { RoomContext, RoomProvider };
