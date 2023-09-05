import Carousel from '../components/Carousel';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';

const PetSavvy = () => {
	return (
		<>
			<ScrollToTopOnMount />
			<section className='w-full min-h-screen snap-start center-all flex-col grow'>
				<img src='/images/petsavvy-cover.png' className='object-cover flex justify-center grow w-full h-full' />
				<div className='center-all text-center my-16  flex flex-col gap-3'>
					<h1 className='lg:text-5xl text-4xl'>Pet Savvy</h1>
					<p>Your One-Stop Solution for All Things Pet Care</p>
				</div>
			</section>
			<section className='odd-section w-full snap-start center-all grow'>
				<div className='flex justify-center grow lg:flex-row flex-col text-center lg:text-left lg:gap-[22px] gap-12 xl:my-32 lg:my-24 lg:mx-52 my-12 mx-10 h-full'>
					<div className='flex lg:justify-start justify-center flex-col gap-12 lg:w-[636px] w-full'>
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
					<div className='flex lg:justify-start justify-center flex-col lg:gap-8 gap-6 lg:w-[448px] w-full'>
						<div>
							<h4 className='text-2xl leading-10'>Project Scope</h4>
							<ul className='font-avenir font-normal text-sm list-disc list-inside'>
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
			<section className='w-full snap-start center-all flex-col grow text-center'>
				<div className='center-all flex-wrap flex-col lg:mt-20 mt-12 lg:mb-12 mb-5 lg:w-[1106px] w-[320px] gap-7'>
					<h1 className='lg:title text-[32px]'>Laying the groundwork</h1>
					<p>
						By <span className='highlight bold'>ideating rough sketches, userflows, and sitemap,</span> I
						carefully crafted the blueprint for seamless user experiences, ensuring clear navigation. This{' '}
						<span className='highlight bold'>process also helps me define product features</span> and their
						development priorities.
					</p>
				</div>
				<div className=' flex flex-col grow mx-auto w-full'>
					<div className='h-[1000px] relative w-full bg-neutral-100'>
						<Carousel
							name='groundwork'
							items={[
								'/images/pet-savvy-groundwork-1.png',
								'/images/pet-savvy-groundwork-2.png',
								'/images/pet-savvy-groundwork-3.png',
							]}
						/>
					</div>
				</div>
			</section>
			<section className='odd-section w-full h-auto snap-start center-all flex-col grow text-center'>
				<div className='center-all flex-wrap flex-col lg:my-[100px] my-16 lg:w-[1106px] w-[320px] gap-6'>
					<h1 className='g:title text-[32px]'>UI requirement document</h1>
					<p>
						After identifying the key screens and user flows, I created a{' '}
						<span className='highlight odd bold'>
							UI Requirements document to amplify the accumulated insights.
						</span>{' '}
						This document acts as a guide for the upcoming wireframing phase, especially useful if the
						design process starts to feel intricate.
					</p>
				</div>
			</section>
			<section className='w-full min-h-screen center-all flex-col grow text-center snap-start'>
				<div className='center-all flex-col mx-auto'>
					<ul className='flex flex-col lg:gap-0 gap-[100px]'>
						<li className='center-all lg:flex-row flex-col w-full lg:gap-0 gap-6'>
							<div className='box box-left-text text-left lg:order-1 order-2'>
								<h2 className='title pb-4 w-full'>Lo-fi wireframes</h2>
								<p className='w-full mx-auto'>
									Using the preliminary sketches and UI Requirements as a foundation, I began crafting
									digitized, low-fidelity wireframes that adhere to the sketch concepts. This approach
									enables me{' '}
									<span className='highlight'>
										to implement UI requirements, establish proper element hierarchy, and prevent
										excessive focus on intricate design aspects.
									</span>
								</p>
							</div>
							<div className='purple-container box order-1 lg:order-2'>
								<img
									src='/images/petsavvy-lofi-wireframes.png'
									alt='Lofi Wireframes'
									className='h-full w-full object-cover'
								/>
							</div>
						</li>
						<li className='center-all lg:flex-row flex-col w-full lg:gap-0 gap-6'>
							<div className='bg-[#F5E6C5] box order-1 lg:order-2'>
								<img
									src='/images/petsavvy-branding.png'
									alt='Branding'
									className='object-contain h-full w-full'
								/>
							</div>
							<div className='box box-right-text text-left lg:order-2 order-1'>
								<h2 className='title pb-4 w-full'>Branding</h2>
								<p className='w-full mx-auto mb-3'>
									Before diving into logo and style design, I curated different mood board directions
									from the diverse array of inspirations I gathered from Pinterest,
									<span className='highlight'>
										all aligned with the distinctive attributes drawn from the project brief:
										Friendly, Playful, Informative.
									</span>
								</p>
								<p className='w-full mx-auto'>This is the direction chosen by the client.</p>
							</div>
						</li>
					</ul>
				</div>
			</section>
			<section className='odd-section w-full h-auto snap-start center-all lg:flex-row flex-col grow text-center py-24'>
				<div className='center-all flex-col m-auto lg:w-[472px] text-left '>
					<h3 className='pb-4 w-full'>Visual exploration and logo drafts</h3>
					<p className='w-full mx-auto'>
						Following the moodboard phase, I initiated an exploration of diverse visual styles and logo
						ideas to kickstart the design journey.
					</p>
				</div>
				<div className='center-all flex-col m-auto lg:w-[472px] text-left'>
					<h3 className='pb-4 w-full'>
						Logo, color scheme, typography, and design systems (work-in-progress)
					</h3>
					<p className='w-full mx-auto'>
						After the client selects the preferred visual style and logo concept, I will proceed to refine
						the logo, establish the color palette, typography, and design systems.
					</p>
				</div>
			</section>
			<section className='bg-pet-savvy-cover2 bg-cover h-[741px] w-full'></section>
			<section className='odd-section w-full h-auto snap-start center-all flex-col grow text-center lg:py-32'>
				<div className='center-all flex-col m-auto w-full p-0 lg:w-[1105px] text-center'>
					<h2 className='title pb-4 w-full'>Hi-fi wireframes and iterations</h2>
					<p className='text-base w-full mx-auto'>
						After laying the groundwork with the first few versions above and finalizing the branding & UI
						kit, I will start doing the high fidelity wireframes. Anticipating multiple iterations with the
						client, this phase will lead us to the final stages of the project.
					</p>
				</div>
			</section>
			<section className='bg-pet-savvy-cover bg-cover h-[741px] w-full'></section>
		</>
	);
};

export default PetSavvy;
