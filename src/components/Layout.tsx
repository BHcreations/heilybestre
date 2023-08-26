import { Outlet } from 'react-router-dom';
import Menu from './Menu';

const Layout = () => {
	return (
		<>
			<Menu />
			<Outlet />
		</>
	);
};

export default Layout;
