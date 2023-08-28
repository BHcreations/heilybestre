import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<nav className='bg-transparent px-40 w-full'>
				<div className='relative flex flex-wrap justify-between items-center mx-auto max-w-screen-xl h-20 font-display'>
					<div className='flex items-center gap-10'>
						{/* <a className='text-[#898EA2] text-xl font-black'>LOGO</a> */}
						<a className='text-[#41434D] text-xl font-medium tracking-[0.8px]'>HEILY BESTRE</a>
					</div>
					<div className='flex items-center gap-16'>
						<Link to='/heilybestre/' className='text-[#A6A9B5] text-xl font-medium tracking-[0.4px]'>
							home
						</Link>
						<Link to='/heilybestre/about' className='text-[#A6A9B5] text-xl font-medium tracking-[0.4px]'>
							about
						</Link>
						<Link to='/heilybestre/'>
							<button className='bg-[#E38A88] text-[#fff] text-xl font-medium w-64 tracking-[0.8px]'>
								WORK WITH ME
							</button>
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
