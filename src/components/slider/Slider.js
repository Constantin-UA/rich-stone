import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

import './slider.scss';

function CarouselFade({ scrollY, dataLang, slides }) {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectIndex, e) => {
		setIndex(selectIndex);
	};
	return (
		<Carousel
			className="animate__animated"
			activeIndex={index}
			onSelect={handleSelect}
			controls={true}
			indicators={false}
			interval={4000}
			fade
		>
			{slides.Desktop.map((src, idx) => {
				return (
					<Carousel.Item key={idx}>
						<img className="slide-bg" src={src} alt="bg" />
					</Carousel.Item>
				);
			})}
			<ul className="slide-btn-box">
				{dataLang.sliderBtns.map((item, idx) => {
					return (
						<li key={idx} className="slide-btn" onClick={() => setIndex(idx * 10)}>
							<span className="slide-btn-text">{item}</span>
						</li>
					);
				})}
			</ul>
		</Carousel>
	);
}

export default CarouselFade;

/* <picture>
<source media="(max-width: 536px)" srcSet={data.slides.Mobile[idx]} />
<source media="(max-width: 769px)" srcSet={data.slides.Tablet[idx]} />
<img className="slide-bg" src={src} alt="bg" />
</picture> */
