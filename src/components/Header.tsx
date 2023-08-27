import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<nav className='bg-transparent px-4 lg:px-20 py-2.5 w-full'>
				<div className='relative flex flex-wrap justify-between items-center mx-auto max-w-screen-xl h-20 font-display'>
					<div className='flex items-center gap-10'>
						<a className='text-[#898EA2] text-xl font-black'>LOGO</a>
						<a className='text-[#898EA2] text-xl font-black'>HEILY BESTRE</a>
					</div>
					<div className='flex items-center gap-16'>
						<Link to='/heilybestre/' className='text-[#898EA2] text-xl font-black'>
							home
						</Link>
						<Link to='/heilybestre/about' className='text-[#898EA2] text-xl font-black'>
							about
						</Link>
						<Link to='/heilybestre/'>
							<button className='bg-[#69A1AC] text-[#fff] text-xl font-black w-64'>WORK WITH ME</button>
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
