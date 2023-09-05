const About = () => {
	return (
		<section className='h-full min-h-[800px] lg:min-h-screen flex-container flex-col text-center lg:w-[1000px] sm:w-[600px] m-auto py-8 sm:py-12 lg:py-24'>
			<div className='flex lg:flex-row flex-col justify-center items-center gap-6 lg:gap-28'>
				<img src='/images/about-me.jpg' alt='about-me' className='lg:w-1/3 w-3/4 lg:order-1 order-2' />
				<div className='lg:order-2 order-1 px-6'>
					<h1 className='w-full text-center mb-6 lg:text-5xl text-4xl'>About Me</h1>
					<p className='indent-10 py-6'>
						I'm a dedicated <span className="highlight bold">UX/UI designer</span> based in Manila, Philippines, with a diverse background firmly
						rooted in <span className="highlight bold">web development</span>. Over the years, my professional journey has encompassed roles such as
						<span className="highlight bold">web developer, backend, frontend, and team lead,</span> equipping me with a wealth of experience that
						has honed my problem-solving skills and deepened my understanding of various challenges. My
						passion lies in crafting user-centered designs that <span className="highlight bold">bridge the gap between aesthetics and
						functionality.</span>
					</p>
					<p className='indent-10 py-3'>
						My extensive years of experience in web development have provided me with a unique perspective,
						enabling me to comprehend the intricacies of user interactions and translate them into intuitive
						and visually appealing designs. I'm committed to focusing on designs that not only captivate
						aesthetically but also seamlessly address user needs and pain points. Transitioning into the
						field of UI/UX design from my previous role as a senior web developer and team lead, I carry
						forward <span className="highlight bold">a strong foundation in frontend design and an adeptness at collaborative
						problem-solving.</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
