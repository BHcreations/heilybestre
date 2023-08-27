const Home = () => {
	return (
		<>
			<section className='text-center min-h-screen h-[621px] flex flex-col justify-center px-64 snap-start'>
				<h1 className='text-[#262A4F] font-serif text-5xl font-extrabold mb-9'>
					Hello! I am Heily, a <span className='text-[#C26B13]'>UI/UX Designer</span> and Former Web Developer
					based in Manila, Philippines.
				</h1>
				<span className='font-display text-[#898EA2] text-2xl font-extrabold tracking-wide'>
					Welcome to my portfolio.
				</span>
			</section>
			<section className='text-center bg-[#FFFAF6] h-[533px] min-h-screen snap-start'>
				<h3 className='font-display text-2xl font-black py-20'>MY PROCESS</h3>
				<ul className='font-sans flex flex-row justify-center items-center gap-6'>
					<li>
						<div className='w-[272px] h-[203px] bg-[#D9D9D9] rounded-xl'></div>
					</li>
					<li>
						<div className='w-[272px] h-[203px] bg-[#D9D9D9] rounded-xl'></div>
					</li>
					<li>
						<div className='w-[272px] h-[203px] bg-[#D9D9D9] rounded-xl'></div>
					</li>
					<li>
						<div className='w-[272px] h-[203px] bg-[#D9D9D9] rounded-xl'></div>
					</li>
				</ul>
			</section>
			<section className='text-center snap-start min-h-screen'>
				<h3 className='font-display text-2xl font-black py-24'>FEATURED WORK</h3>
				<ul className='font-sans flex flex-col gap-40'>
					<li className='flex flex-row justify-center items-center'>
						<div className='w-[570px] h-[432px] bg-[#C1C1C1] rounded-3xl'></div>
						<div className='w-[570px] px-32'>
							<h4 className='font-serif text-4xl font-extrabold pb-4'>PetSavvy</h4>
							<p className='text-lg font-display'>
								Lorem ipsum dolor sit amet consectetur. Adipiscing fringilla molestie leo nisl.
								Ultricies hendrerit volutpat metus vitae iaculis.{' '}
							</p>
						</div>
					</li>
					<li className='flex flex-row justify-center items-center'>
						<div className='w-[570px] px-32'>
							<h4 className='font-serif text-4xl font-extrabold pb-4'>Title</h4>
							<p className='text-lg font-display'>
								Lorem ipsum dolor sit amet consectetur. Adipiscing fringilla molestie leo nisl.
								Ultricies hendrerit volutpat metus vitae iaculis.{' '}
							</p>
						</div>
						<div className='w-[570px] h-[432px] bg-[#C1C1C1] rounded-3xl'></div>
					</li>
					<li className='flex flex-row justify-center items-center'>
						<div className='w-[570px] h-[432px] bg-[#C1C1C1] rounded-3xl'></div>
						<div className='w-[570px] px-32'>
							<h4 className='font-serif text-4xl font-extrabold pb-4'>Title</h4>
							<p className='text-lg font-display'>
								Lorem ipsum dolor sit amet consectetur. Adipiscing fringilla molestie leo nisl.
								Ultricies hendrerit volutpat metus vitae iaculis.{' '}
							</p>
						</div>
					</li>
				</ul>
			</section>
		</>
	);
};

export default Home;
