import { Menu, Transition } from '@headlessui/react';
import { Bars2Icon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../helpers/styles';

const Header = () => {
	return (
		<header>
			<nav className='bg-transparent lg:px-40 w-full px-6'>
				<div className='relative flex flex-wrap justify-between items-center mx-auto max-w-screen-xl h-20 font-display'>
					<div className='flex items-center gap-10'>
						{/* <a className='text-[#898EA2] text-xl font-black'>LOGO</a> */}
						<a className='text-[#41434D] text-xl font-medium tracking-[0.8px]'>HEILY BESTRE</a>
					</div>
					<div className='lg:flex items-center gap-16 hidden'>
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
					<Menu as='div' className='lg:hidden relative inline-block text-left'>
						<div>
							<Menu.Button>
								<Bars2Icon className='h-6 w-6 text-[#40434E]' />
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
													active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
													'block px-4 py-2 text-[#A6A9B5] text-xl font-medium tracking-[0.4px]'
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
													active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
													'block px-4 py-2 text-[#A6A9B5] text-xl font-medium tracking-[0.4px]'
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
