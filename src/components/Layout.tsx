import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
	return (
		<>
			<Header />
			<main className='snap-y snap-mandatory overflow-y-scroll'>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
