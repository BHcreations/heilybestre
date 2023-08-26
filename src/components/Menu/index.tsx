import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<header>
			<div>
				<a>LOGO</a>
				<a>HEILY BESTRE</a>
			</div>
			<nav>
				<Link to='/heilybestre/'>HOME</Link>
				<Link to='/heilybestre/about'>ABOUT</Link>
				<Link to='/heilybestre/'>RESUME</Link>
			</nav>
		</header>
	);
};

export default Menu;
