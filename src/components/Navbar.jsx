import React, { useState } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
	const [open, setOpen] = useState(false);

	// const handleToggle = () => {
	// 	setOpen(!open);
	// };

	return (
		<nav className='navbar'>
			<div className='nav-center'>
				<div className='nav-header'>
					<Link to='/'>
						<img src={logo} alt='beach-resort' />{" "}
						<button
							type='button'
							onClick={() => setOpen(!open)}
							className='nav-btn '
						>
							<FaAlignRight className='nav-icon'></FaAlignRight>
						</button>
					</Link>
				</div>
				<ul className={open ? "nav-links show-nav" : "nav-links"}>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/rooms'>Rooms</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
