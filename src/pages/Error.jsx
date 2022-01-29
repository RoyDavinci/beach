import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div>
			<Hero>
				<Banner title='404' subtitle='page Not Found'>
					<Link to='/' className='btn-primary'>
						return home
					</Link>
				</Banner>
			</Hero>
		</div>
	);
};

export default Error;
