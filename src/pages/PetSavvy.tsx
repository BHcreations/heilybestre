import ScrollToTopOnMount from '../components/ScrollToTopOnMount';

const PetSavvy = () => {
	return (
		<>
			<ScrollToTopOnMount />
			<section className='bg-neutral-100 w-full min-h-screen snap-start center-all flex-col grow'>
				<div className='center-all flex-wrap flex-col'>
					<h1 className='text-neutral-600 lg:mt-20 mt-12'>Pet Savvy</h1>
				</div>
				<div className=' h-full w-full flex flex-col grow'>
					<div className='center-all bg-neutral-300 grow lg:mx-52 lg:mb-20 lg:mt-8 my-12 mx-10'>
						<img src='/images/icon-square-icon.svg' alt='image' className='text-neutral-600 h-16 w-16' />
					</div>
				</div>
			</section>
			<section className='bg-neutral-300 w-full min-h-screen snap-start center-all grow'>
				<div className='flex justify-items-start grow lg:flex-row flex-col text-center lg:text-left lg:gap-28 gap-12 lg:my-24 lg:mx-52 my-12 mx-10 h-full'>
					<div className='flex lg:justify-start justify-center flex-col gap-12 lg:w-3/4 w-full'>
						<div>
							<h1 className='title mb-6'>Background</h1>
							<p>
								In a world where pets are cherished members of the family, PetSavvy was created to
								bridge the gap between pet owners and businesses in the pet care industry. This case
								study explores how the app addresses pain points for both B2C users and B2B service
								providers, creating a seamless and rewarding experience for all.
							</p>
						</div>
						<div>
							<h1 className='title mb-6 '>Challenge</h1>
							<p>
								The pet care industry is booming, but pet owners often struggle to find reliable
								services for their furry companions. Simultaneously, businesses face challenges in
								targeting pet owners actively seeking their services. Pet Savvy aims to create a
								platform that simplifies appointment booking for pet owners while enabling businesses to
								effectively reach their target audience.
							</p>
						</div>
					</div>
					<div className='flex lg:justify-start justify-center flex-col lg:gap-8 gap-6 lg:w-1/4 w-full'>
						<div>
							<h4 className='text-2xl leading-10'>Project Scope</h4>
							<ul className='font-poppins font-normal text-sm list-disc list-inside'>
								<li>
									<span>Ideate: sketches, user flows, sitemap</span>
								</li>
								<li>
									<span>Lo-fi wireframes</span>
								</li>
								<li>
									<span>Visual design: mood board, logo, color scheme, typography</span>
								</li>
								<li>
									<span>Visual exploration and design systems Hi-fi wireframes</span>
								</li>
							</ul>
						</div>
						<div>
							<h4 className='text-2xl leading-10'>Tools</h4>
							<p>Figma, Illustrator</p>
						</div>
						<div>
							<h4 className='text-2xl leading-10'>Role</h4>
							<p>UI/UX Designer</p>
						</div>
						<div>
							<h4 className='text-2xl leading-10'>Team</h4>
							<p>Self-directed, with feedback from the stakeholder and developer.</p>
						</div>
						<div>
							<h4 className='text-2xl leading-10'>Duration</h4>
							<p>Work-in-progress</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PetSavvy;
