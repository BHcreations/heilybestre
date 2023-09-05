import { Link } from 'react-router-dom';
import { ReactComponent as PetSavvyMobile1 } from '../../public/images/petsavvy-mobile-1.svg';
import { ReactComponent as PetSavvyMobile2 } from '../../public/images/petsavvy-mobile-2.svg';
import { ReactComponent as MealPlannerMobile1 } from '../../public/images/mealplannr-mobile-1.svg';
import { ReactComponent as MealPlannerMobile2 } from '../../public/images/mealplannr-mobile-2.svg';

const Home = () => {
	return (
		<>
			<section className='h-[560px] snap-start relative'>
				<div className='hero flex-container flex-col text-center z-50 m-auto lg:w-[728px] sm:w-[600px] w-[390px]'>
					<h1 className='mb-6 lg:text-5xl text-4xl'>
						<span className='highlight bold lg:text-5xl text-4xl'>
							Hello! I am Heily, a <span>UI/UX Designer</span> and <span>Former Web Developer</span> based
							in Manila, Philippines.
						</span>
					</h1>
					<span className='tracking-[0.48px] mb-9'>Welcome to my portfolio.</span>
					<button className='btn'>GET IN TOUCH</button>
				</div>
			</section>
			<section className='odd-section w-full snap-start center-all flex-col grow lg:gap-12 gap-8'>
				<div className='center-all flex-wrap flex-col w-min-[468px] px-12 text-center'>
					<h1 className='title lg:mt-20 mt-20 sm:mt-12 lg:mb-6 mb-4'>My Design Process</h1>
					<span className='text-base'>
						A glimpse into what you can expect from my design process when you choose to collaborate with
						me.
					</span>
				</div>
				<div className=' h-full lg:w-[1106px] w-[361px] mx-auto flex flex-col lg:flex-row lg:gap-16 lg:mb-16'>
					<div className='mb-12 lg:mb-0'>
						<img
							src='/images/design-process-1.jpg'
							alt='design process 1'
							className='shadow-[-8px_8px] md:shadow-[-18px_18px] text-[#E0DBD4] mb-[52px]'
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
					<div className='mb-12 lg:mb-0'>
						<img
							src='/images/design-process-2.jpg'
							alt='design process 2'
							className='shadow-[-8px_8px] md:shadow-[-18px_18px] text-[#E0DBD4] mb-[52px]'
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
					<div className='mb-12 lg:mb-0'>
						<img
							src='/images/design-process-3.jpg'
							alt='design process 3'
							className='shadow-[-8px_8px] md:shadow-[-18px_18px] text-[#E0DBD4] mb-[52px]'
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
			<section className='w-full min-h-screen center-all flex-col grow text-center snap-start'>
				<div className='center-all flex-col mx-auto'>
					<h1 className='title my-16'>Featured Work</h1>
					<ul className='flex flex-col lg:gap-0 gap-[100px]'>
						<li className='center-all lg:flex-row flex-col w-full lg:gap-0 gap-6'>
							<div className='pink-container box in-progress order-1 lg:order-2 justify-start gap-10 pt-14 overflow-hidden'>
								<h1 className='text-[#B1806E] text-[64px] leading-[80px] tracking-widest'>petsavvy</h1>
								<div className='flex'>
									<PetSavvyMobile1 className='lg:w-full w-10/12' />
									<PetSavvyMobile2 className='lg:w-full w-10/12' />
								</div>
							</div>
							<div className='odd-section box box-right-text lg:order-2 order-1'>
								<h2 className='title pb-4 w-full text-center'>PetSavvy</h2>
								<p className='w-full mx-auto text-center'>
									In a world where pets are cherished members of the family, the{' '}
									<span className='highlight odd bold'>
										PetSavvy was created to bridge the gap between pet owners and businesses in the
										pet care industry.
									</span>{' '}
									This case study explores how the app addresses pain points for both B2C users and
									B2B service providers, creating a seamless and rewarding experience for all.
								</p>
								<Link to={'/work/petsavvy'}>
									<button className='btn secondary font-semibold mt-6 lg:mt-8'>
										READ CASE STUDY
									</button>
								</Link>
							</div>
						</li>
						<li className='odd-section center-all lg:flex-row flex-col w-full lg:gap-0 gap-6'>
							<div className='box box-left-text order-2 lg:order-1'>
								<h2 className='title pb-4 w-full text-center'>MealPlannr</h2>
								<p className='w-[461px] mx-auto text-center'>
									Introducing a comprehensive{' '}
									<span className='highlight odd bold'>
										grocery list and pantry app that streamlines your culinary journey.{' '}
									</span>
									Seamlessly plan, track, and optimize your meals by effortlessly managing your
									shopping list and pantry inventory, ensuring you're always well-equipped to create
									delicious dishes.
								</p>
								<Link to={'/work/mealplannr'}>
									<button className='btn secondary font-semibold mt-6 lg:mt-8'>
										READ CASE STUDY
									</button>
								</Link>
							</div>
							<div className='purple-container box in-progress order-1 lg:order-2 justify-start gap-10 pt-14 overflow-hidden'>
								<h1 className='text-[##79719B] text-[64px] leading-[80px] tracking-widest'>
									mealplannr
								</h1>
								<div className='flex'>
									<MealPlannerMobile1 className='lg:w-full w-10/12' />
									<MealPlannerMobile2 className='lg:w-full w-10/12' />
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default Home;
