import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import { useToggler } from '../hook/useToggler.hook';
//img import

import B_D_1 from '../../assets/work/desktop/bathroom/Desktop-1.png';
import B_D_2 from '../../assets/work/desktop/bathroom/Desktop-2.png';
import B_D_3 from '../../assets/work/desktop/bathroom/Desktop-3.png';
import B_M_1 from '../../assets/work/mobile/bathroom/Mobile-1.png';
import B_M_2 from '../../assets/work/mobile/bathroom/Mobile-2.png';
import B_M_3 from '../../assets/work/mobile/bathroom/Mobile-3.png';
//import scss
import './slider.scss';

function CarouselFade({ data }) {
	const [slides, setSlides] = useState([B_D_1, B_D_2, B_D_3]);
	const [slidesM, setSlidesM] = useState([B_M_1, B_M_2, B_M_3]);
	const { togglerToSlider } = useToggler();

	useEffect(() => {
		const about = document.querySelector('.about').clientHeight;
		const work = document.querySelector('.work').clientHeight;
		const min = about + work / 2;
		const max = about + work + work / 2;

		if (data >= min && data <= max) {
			togglerToSlider(
				'.carousel',
				['animate__animated', 'animate__zoomOut'],
				['animate__animated', 'animate__zoomIn']
			);
		} else {
			togglerToSlider(
				'.carousel',
				['animate__animated', 'animate__zoomIn'],
				['animate__animated', 'animate__zoomOut']
			);
		}
	}, [data, togglerToSlider]);
	return (
		<Carousel controls={true} indicators={false} interval={8000} fade>
			{slides.map((src, idx) => {
				return (
					<Carousel.Item key={idx}>
						<picture>
							<source media="(max-width: 535px)" srcSet={slidesM[idx]} />
							<img className="home-bg" src={src} alt="bg" />
						</picture>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
}

export default CarouselFade;
