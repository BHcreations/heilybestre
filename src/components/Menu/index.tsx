import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<header>
			<div>
				<a>LOGO</a>
				<a>HEILY BESTRE</a>
			</div>
			<nav>
				<Link to='/'>HOME</Link>
				<Link to='/about'>ABOUT</Link>
				<Link to='/'>RESUME</Link>
			</nav>
		</header>
	);
};

export default Menu;
