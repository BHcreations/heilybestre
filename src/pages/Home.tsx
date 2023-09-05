import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<section className='min-h-screen h-[621px] snap-start relative'>
				<div className='hero flex-container flex-col text-center z-50 m-auto lg:w-[728px] w-[390px]'>
					<h1 className='mb-6 lg:text-5xl text-4xl'>
						<span className='highlight bold lg:text-5xl text-4xl'>
							Hello! I am Heily, a <span>UI/UX Designer</span> and <span>Former Web Developer</span> based
							in Manila, Philippines.
						</span>
					</h1>
					<span className='text-base font-normal tracking-[0.48px] mb-9'>Welcome to my portfolio.</span>
					<button className='btn lg:w-52 w-full'>GET IN TOUCH</button>
				</div>
			</section>
			<section className='odd-section w-full min-h-screen snap-start center-all flex-col grow gap-12'>
				<div className='center-all flex-wrap flex-col w-[468px] text-center'>
					<h1 className='title lg:mt-20 mt-12'>My Design Process</h1>
					<span className='text-base '>
						A glimpse into what you can expect from my design process when you choose to collaborate with
						me.
					</span>
				</div>
				<div className=' h-full lg:w-[1106px] md:w-[680px] w-[361px] mx-auto flex flex-row lg:gap-16 lg:mb-16'>
					<div>
						<img
							src='/images/design-process-1.jpg'
							alt='design process 1'
							className='shadow-[-18px_18px] text-[#E0DBD4] mb-[52px]'
						/>
						<div className='text-center'>
							<h6 className='font-avenir text-[#575B63] text-base font-extrabold'>Emphatize & Design</h6>
							<ul className='font-avenir font-normal text-sm list-disc list-inside'>
								<li>
									<span>Company state and goals</span>
								</li>
								<li>
									<span>Problem statement</span>
								</li>
								<li>
									<span>Contract & deliverables</span>
								</li>
							</ul>
						</div>
					</div>
					<div>
						<img
							src='/images/design-process-2.jpg'
							alt='design process 2'
							className='shadow-[-18px_18px] text-[#E0DBD4] mb-[52px]'
						/>
						<div className='text-center'>
							<h6 className='font-avenir text-[#575B63] text-base font-extrabold'>Ideate</h6>
							<ul className='font-avenir font-normal text-sm list-disc list-inside'>
								<li>
									<span>User flows</span>
								</li>
								<li>
									<span>Sitemap</span>
								</li>
								<li>
									<span>Initial sketches</span>
								</li>
							</ul>
						</div>
					</div>
					<div>
						<img
							src='/images/design-process-3.jpg'
							alt='design process 3'
							className='shadow-[-18px_18px] text-[#E0DBD4] mb-[52px]'
						/>
						<div className='text-center'>
							<h6 className='font-avenir text-[#575B63] text-base font-extrabold'>Prototype & Test</h6>
							<ul className='font-avenir font-normal text-sm list-disc list-inside'>
								<li>
									<span>Lo-fi & hi-fi wireframes</span>
								</li>
								<li>
									<span>Visual design</span>
								</li>
								<li>
									<span>Stakeholder feedback</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className='text-center snap-start min-h-screen mb-7'>
				<div className='center-all flex-col mx-auto'>
					<h1 className='title pt-16'>Featured Work</h1>
					<ul className='flex flex-col sm:mb-6'>
						<li className='center-all lg:flex-row flex-col gap-20 sm:gap-6 m-auto lg:py-20 py-12'>
							<div className='w-[542px] h-[452px] rounded-3xl center-all bg-neutral-300 grow'>
								<img
									src='/images/icon-square-icon.svg'
									alt='image'
									className='text-neutral-600 h-16 w-16'
								/>
							</div>
							<div className='center-all flex-col w-[542px] m-auto'>
								<h2 className='pb-4'>PetSavvy</h2>
								<p className='w-[461px] mx-auto'>
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
						<li className='center-all lg:flex-row flex-col gap-20 sm:gap-6'>
							<div className='center-all flex-col w-[542px] m-auto order-2 lg:order-1'>
								<h2 className='pb-4'>PetSavvy Business Dashboard</h2>
								<p className='w-[461px] mx-auto'>
									Elevating the Pet Care Industry: Unveiling the business dashboard of PetSavvy—an app
									that unites pet owners and industry businesses, alleviating pain points for B2C
									users and B2B service providers through a seamless, rewarding experience
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
						<li className='center-all lg:flex-row flex-col gap-20 sm:gap-6'>
							<div className='w-[542px] h-[452px] rounded-3xl center-all bg-neutral-300 grow'>
								<img
									src='/images/icon-square-icon.svg'
									alt='image'
									className='text-neutral-600 h-16 w-16'
								/>
							</div>
							<div className='center-all flex-col w-[542px] m-auto'>
								<h2 className='pb-4'>Meal Planner App*</h2>
								<p className='text-base w-[461px] mx-auto'>
									Introducing a comprehensive grocery list and pantry app that streamlines your
									culinary journey. Seamlessly plan, track, and optimize your meals by effortlessly
									managing your shopping list and pantry inventory, ensuring you're always
									well-equipped to create delicious dishes.
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
