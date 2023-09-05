const About = () => {
	return (
		<section className='h-full min-h-[800px] flex-container flex-col text-center lg:w-[1000px] sm:w-[600px] w-[390px] m-auto py-24'>
			<div className='flex justify-center items-center gap-28'>
				<img src='/images/about-me.jpg' alt='about-me' className='w-1/3' />
				<div>
					<h1 className='w-full text-center mb-6 lg:text-5xl text-4xl'>About Me</h1>
					<p className='indent-10 py-3'>
						I'm a dedicated UX/UI designer based in Manila, Philippines, with a diverse background firmly
						rooted in web development. Over the years, my professional journey has encompassed roles such as
						web developer, backend, frontend, and team lead, equipping me with a wealth of experience that
						has honed my problem-solving skills and deepened my understanding of various challenges. My
						passion lies in crafting user-centered designs that bridge the gap between aesthetics and
						functionality.
					</p>
					<p className='indent-10 py-3'>
						My extensive years of experience in web development have provided me with a unique perspective,
						enabling me to comprehend the intricacies of user interactions and translate them into intuitive
						and visually appealing designs. I'm committed to focusing on designs that not only captivate
						aesthetically but also seamlessly address user needs and pain points. Transitioning into the
						field of UI/UX design from my previous role as a senior web developer and team lead, I carry
						forward a strong foundation in frontend design and an adeptness at collaborative
						problem-solving.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
