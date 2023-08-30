import { Link, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
	return (
		<>
			<Header />
			<main className='snap-y snap-mandatory bg-white overflow-y-scroll'>
				<Outlet />
			</main>
			<div className='lg:hidden bg-transparent sticky bottom-3 mx-auto left-0 right-0 w-3/4 mb-6'>
				<Link to='/heilybestre/'>
					<button className='bg-[#E38A88] text-[#fff] text-xl font-medium w-full'>WORK WITH ME</button>
				</Link>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
