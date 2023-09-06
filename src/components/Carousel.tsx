import { useState } from 'react';

const Carousel = ({ items, name = 'carousel__slide' }: { items: string[]; name?: string }) => {
	const [current, setCurrent] = useState(0);
	const getNextIndex = (index: number) => {
		return index === items.length - 1 ? 0 : index + 1;
	};
	const getPrevIndex = (index: number) => {
		return index === 0 ? items.length - 1 : index - 1;
	};
	return (
		<div className='carousel'>
			<ol className='carousel__viewport'>
				{items.map((item, index) => (
					<li
						id={`${name}${index + 1}`}
						tabIndex={index}
						className={`carousel__slide ${index === current ? 'active' : ''}`}
					>
						<div className='carousel__snapper'>
							<a
								href={`${process.env.VITE_APP_PUBLIC_URL}#${name}${getPrevIndex(index) + 1}`}
								className='carousel__prev'
								onClick={() => setCurrent(getPrevIndex(index))}
							>
								Go to {index === 0 ? 'last' : 'previous'} slide
							</a>
							<a
								href={`${process.env.VITE_APP_PUBLIC_URL}#${name}${getNextIndex(index) + 1}`}
								className='carousel__next'
								onClick={() => setCurrent(getNextIndex(index))}
							>
								Go to {index + 1 === items.length ? 'first' : 'next'} slide
							</a>
							<img src={item} alt={`Groundwork ${index + 1}`} className='object-contain' />
						</div>
					</li>
				))}
			</ol>
			<aside className='carousel__navigation'>
				<ol className='carousel__navigation-list'>
					{items.map((_item, index) => (
						<li key={index} className={`carousel__navigation-item ${index === current ? 'active' : ''}`}>
							<a
								href={`${process.env.VITE_APP_PUBLIC_URL}#${name}${index + 1}`}
								className='carousel__navigation-button'
								onClick={() => setCurrent(index)}
							>
								Go to slide {index + 1}
							</a>
						</li>
					))}
				</ol>
			</aside>
		</div>
	);
};

export default Carousel;
