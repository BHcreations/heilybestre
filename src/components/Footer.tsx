const Footer = () => {
	return (
		<footer className='lg:h-24 h-72 center-all lg:px-52 px-9 bg-neutral-100 justify-around lg:flex-row flex-col'>
			<img src='/images/heilyb.svg' alt='heilyb.' className='text-[#6D758F] h-16 order-1' />
			<div className='text-center py-6 order-3 lg:order-2 w-full lg:w-fit lg:border-none border-t border-solid border-neutral-400'>
				<span className='text-neutral-400 text-base'>Copyright © 2023 Heily Bestre | All Rights Reserved</span>
			</div>
			<nav className='flex flex-wrap items-center gap-3.5 lg:order-3 order-2'>
				<img src='/images/social-media-icon-instagram.svg' alt='IG' className='text-neutral-600 w-6 h-6' />
				<img src='/images/social-media-icon-linkedin.svg' alt='L' className='text-neutral-600 w-6 h-6' />
				<img src='/images/social-media-icon-dribble.svg' alt='D' className='text-neutral-600 w-6 h-6' />
			</nav>
		</footer>
	);
};

export default Footer;
