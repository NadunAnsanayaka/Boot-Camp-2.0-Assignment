import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Img/logo.png';

function Title() {
	return (
		<header>
			<div className="header-container">
				<div className="right-menu">

					<div className="logo">
						<img src={Logo} alt="Logo" />
					</div>

					<Link to="/"> CSUP BLOG </Link>

				</div>
				<div className="left-menu">

					<Link to="/"> Home </Link>
					<Link to="/create" className="button-container"> Add Post </Link>

				</div>
			</div>
		</header>
	);
}

export default Title;
