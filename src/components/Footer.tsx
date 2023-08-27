const Footer = () => {
	return (
		<footer className='h-24 flex flex-wrap justify-between items-center px-40'>
			<span className='font-display font-normal text-sm text-[#898EA2]'>(c) 2023 Heily Bestre</span>
			<nav className='flex flex-wrap items-center gap-3.5'>
				<div className='h-9 w-9 bg-white rounded-full flex justify-center items-center'>L</div>
				<div className='h-9 w-9 bg-white rounded-full flex justify-center items-center'>I</div>
				<div className='h-9 w-9 bg-white rounded-full flex justify-center items-center'>G</div>
			</nav>
		</footer>
	);
};

export default Footer;
