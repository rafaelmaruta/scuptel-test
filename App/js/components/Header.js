import React from 'react';

const defaultProps = {
	title: 'Scup Fale+',
};

function Header(props) {
	return (
		<header className="header">
			<div className="header__center center">
				<a href="#" className="header__logo">{props.title}</a>
			</div>
		</header>
	);
}

Header.defaultProps = defaultProps;

export default Header;