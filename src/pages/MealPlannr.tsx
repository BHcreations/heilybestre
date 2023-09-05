import ScrollToTopOnMount from '../components/ScrollToTopOnMount';

const MealPlannr = () => {
	return (
		<>
			<ScrollToTopOnMount />
			<section className='w-full min-h-screen snap-start center-all flex-col grow'>
				<img
					src='/images/mealplannr-cover-1.png'
					className='object-cover flex justify-center grow w-full h-full'
				/>
				<div className='center-all text-center my-16 flex flex-col gap-3'>
					<h1 className='lg:text-5xl text-4xl'>MealPlannr</h1>
					<p>A personal project with my husband to solve our meal planning challenges.</p>
				</div>
			</section>
			<section className='odd-section w-full snap-start center-all grow'>
				<div className='flex justify-center grow lg:flex-row flex-col text-center lg:text-left lg:gap-[22px] gap-12 xl:my-32 lg:my-24 lg:mx-52 my-12 mx-10 h-full'>
					<div className='flex lg:justify-start justify-center flex-col gap-12 lg:w-[636px] w-full'>
						<div>
							<h1 className='title mb-6'>Background</h1>
							<p>
								In the midst of today's hectic routines that call for effective meal planning, the
								inception of MealPlannr occurred as a holistic solution – an all-encompassing app for
								grocery lists and pantry organization. This case study takes a deep dive into how
								PantryPal tackles user challenges and elevates the culinary journey.
							</p>
						</div>
						<div>
							<h1 className='title mb-6 '>Challenge</h1>
							<p>
								With the rise of time constraints and the need for organized grocery shopping, users
								(including my husband and I) often struggle to plan meals, keep track of pantry items,
								and minimize food waste.With the rise of time constraints and the need for organized
								grocery shopping, users (including my husband and I) often struggle to plan meals, keep
								track of pantry items, and minimize food waste.
							</p>
						</div>
					</div>
					<div className='flex lg:justify-start justify-center flex-col lg:gap-8 gap-6 lg:w-[448px] w-full'>
						<div>
							<h4 className='text-2xl leading-10'>Project Scope</h4>
							<ul className='font-avenir font-normal text-sm list-disc list-inside'>
								<li>
									<span>Ideate: sketches</span>
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
							<p>Brian Bestre, Software Engineer</p>
						</div>
						<div>
							<h4 className='text-2xl leading-10'>Duration</h4>
							<p>Work-in-progress</p>
						</div>
					</div>
				</div>
			</section>
			<section className='w-full snap-start center-all flex-col grow text-center'>
				<div className='center-all flex-wrap flex-col lg:mt-20 mt-12 lg:mb-12 mb-5 lg:w-[1106px] w-[320px] gap-7'>
					<h1 className='lg:title text-[32px]'>Laying the groundwork</h1>
					<p>
						This personal project is in its initial stages, with my partner developer, Brian. We kicked off
						by generating preliminary sketches and low-fidelity wireframes to initiate project planning and
						outline its features.
					</p>
				</div>
			</section>

			<section className='bg-meal-plannr-lofi bg-cover h-[700px] w-full'></section>

			<section className='bg-meal-plannr-cover2 bg-cover h-[700px] w-full'></section>
		</>
	);
};

export default MealPlannr;
