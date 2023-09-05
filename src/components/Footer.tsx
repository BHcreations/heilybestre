import { ReactComponent as Logo } from '../../public/images/heilyb.svg';
import { ReactComponent as InstagramLogo } from '../../public/images/social-media-icon-instagram.svg';
import { ReactComponent as LinkedinLogo } from '../../public/images/social-media-icon-linkedin.svg';
import { ReactComponent as DribbleLogo } from '../../public/images/social-media-icon-dribble.svg';

const Footer = () => {
	return (
		<footer className='lg:h-32 h-72 sm:pt-12 py-6'>
			<div className='flex items-center lg:flex-row flex-col justify-between mx-auto lg:w-[1108px] sm:h-full py-6'>
				<Logo className='logo h-[38px] order-1' />
				<div className='flex text-center order-3 lg:order-2 w-96 lg:w-fit lg:border-none border-t border-solid border-neutral-400'>
					<span className='text-base sm:text-sm'>Copyright © 2023 Heily Bestre | All Rights Reserved</span>
				</div>
				<nav className='flex flex-wrap items-center gap-4 lg:order-3 order-2'>
					<InstagramLogo className='w-6 h-6' />
					<LinkedinLogo className='w-6 h-6' />
					<DribbleLogo className='w-6 h-6' />
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
