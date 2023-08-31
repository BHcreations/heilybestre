import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<section className='hero min-h-screen h-[621px] snap-start relative'>
				<div className='center-all flex-col text-center lg:pt-40 lg:px-52 pt-28  px-5 h-full z-50 gap-8'>
					<h1 className='text-neutral-600 mb-9 lg:px-52 px-5'>
						Hello! I am Heily, a UI/UX Designer and Former Web Developer based in Manila, Philippines.
					</h1>
					<span className='font-display text-neutral-600 text-2xl font-semibold tracking-[1.2px]'>
						Welcome to my portfolio.
					</span>
					<button className='btn text-neutral-100 bg-[#6D758F] lg:w-52 text-sm font-semibold '>
						GET IN TOUCH
					</button>
				</div>
			</section>
			<section className='bg-[#F8F8F9] w-full min-h-screen snap-start center-all flex-col grow'>
				<div className='center-all flex-wrap flex-col'>
					<h1 className='title text-neutral-600 lg:mt-20 mt-12'>My Design Process</h1>
					<span className='text-neutral-600 text-xs '>
						What my design process looks like when you work with me.
					</span>
				</div>
				<div className=' h-full w-full flex flex-col grow'>
					<div className='center-all bg-neutral-300 grow lg:mx-52 lg:mb-20 lg:mt-8 my-12 mx-10'>
						<img src='/images/icon-square-icon.svg' alt='image' className='text-neutral-600 h-16 w-16' />
					</div>
				</div>
			</section>
			<section className='text-center snap-start min-h-screen mb-7'>
				<div className='center-all flex-col lg:px-52'>
					<h1 className='titletext-neutral-600 py-24'>Featured Work</h1>
					<ul className='font-sans flex flex-col gap-40'>
						<li className='center-all lg:flex-row flex-col gap-6'>
							<div className='w-[542px] h-[452px] rounded-3xl center-all bg-neutral-300 grow'>
								<img
									src='/images/icon-square-icon.svg'
									alt='image'
									className='text-neutral-600 h-16 w-16'
								/>
							</div>
							<div className='center-all flex-col w-[570px] px-32'>
								<h2 className='pb-4'>PetSavvy</h2>
								<p className='text-lg font-display'>
									In a world where pets are cherished members of the family, the PetSavvy was created
									to bridge the gap between pet owners and businesses in the pet care industry. This
									case study explores how the app addresses pain points for both B2C users and B2B
									service providers, creating a seamless and rewarding experience for all.
								</p>
								<Link to={'/work/petsavvy'}>
									<button className='btn secondary font-semibold mt-6 lg:mt-8'>
										READ CASE STUDY
									</button>
								</Link>
							</div>
						</li>
						<li className='center-all lg:flex-row flex-col gap-6'>
							<div className='center-all flex-col  w-[570px] px-32 order-2 lg:order-1'>
								<h2 className='pb-4'>Title</h2>
								<p className='text-lg font-display'>
									An app that bridges gap between pet owners and businesses in the pet care industry.
								</p>
								<button className='btn secondary font-semibold mt-6 lg:mt-8'>READ CASE STUDY</button>
							</div>
							<div className='w-[542px] h-[452px] rounded-3xl center-all bg-neutral-300 grow  order-1 lg:order-2'>
								<img
									src='/images/icon-square-icon.svg'
									alt='image'
									className='text-neutral-600 h-16 w-16'
								/>
							</div>
						</li>
						<li className='center-all lg:flex-row flex-col gap-6'>
							<div className='w-[542px] h-[452px] rounded-3xl center-all bg-neutral-300 grow'>
								<img
									src='/images/icon-square-icon.svg'
									alt='image'
									className='text-neutral-600 h-16 w-16'
								/>
							</div>
							<div className='center-all flex-col w-[570px] px-32'>
								<h2 className='pb-4'>Title</h2>
								<p className='text-lg font-display'>
									An app that bridges gap between pet owners and businesses in the pet care industry.
								</p>
								<button className='btn secondary font-semibold mt-6 lg:mt-8'>READ CASE STUDY</button>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default Home;
