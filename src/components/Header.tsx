import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ReactComponent as Logo } from '../../public/images/heilyb.svg';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { classNames } from '../helpers/styles';

const Header = () => {
	return (
		<header>
			<nav className='sm:bg-transparent w-full mx-auto px-6 lg:w-[1106px]'>
				<div className='relative flex flex-wrap justify-between items-center w-full h-20 font-display'>
					<div className='flex items-center'>
						<Link to='/'>
							<Logo className='text-[#6D758F] w-full h-[38px]' />
						</Link>
					</div>
					<div className='sm:flex items-center gap-12 h-12 hidden'>
						<Link to='/' className='font-avenir leading-6 text-base font-medium tracking-[0.4px]'>
							HOME
						</Link>
						<Link to='/about' className='font-avenir leading-6 text-base font-medium tracking-[0.4px]'>
							ABOUT
						</Link>
						<Link to='/' className='font-avenir leading-6 text-base font-medium tracking-[0.4px]'>
							RESUME
						</Link>
						<Link to='/'>
							<button className='btn text-sm font-semibold tracking-[0.8px]'>WORK WITH ME</button>
						</Link>
					</div>
					<Menu as='div' className='sm:hidden relative inline-block text-left'>
						<div>
							<Menu.Button>
								<Bars3Icon className='h-6 w-6 text-[#40434E]' />
							</Menu.Button>
						</div>

						<Transition
							as={Fragment}
							enter='transition ease-out duration-100'
							enterFrom='transform opacity-0 scale-95'
							enterTo='transform opacity-100 scale-100'
							leave='transition ease-in duration-75'
							leaveFrom='transform opacity-100 scale-100'
							leaveTo='transform opacity-0 scale-95'
						>
							<Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
								<div className='py-1'>
									<Menu.Item>
										{({ active }) => (
											<Link
												to='/heilybestre/'
												className={classNames(
													active ? 'bg-gray-100 text-gray-900' : '',
													'block px-4 py-2 text-xl font-medium tracking-[0.4px]'
												)}
											>
												home
											</Link>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Link
												to='/heilybestre/about'
												className={classNames(
													active ? 'bg-gray-100 text-gray-900' : '',
													'block px-4 py-2 text-xl font-medium tracking-[0.4px]'
												)}
											>
												about
											</Link>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</nav>
		</header>
	);
};

export default Header;
