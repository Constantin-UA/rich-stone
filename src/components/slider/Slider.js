import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { useState, useEffect } from 'react';
import { useToggler } from '../hook/useToggler.hook';
//img import
import f_1 from '../../assets/work/flor-1.jpg';
import f_2 from '../../assets/work/flor-2.jpg';
import f_3 from '../../assets/work/flor-3.jpg';
import b_1 from '../../assets/work/badroom-1.jpg';
import b_2 from '../../assets/work/badroom-2.jpg';
import b_3 from '../../assets/work/badroom-3.jpg';
//import scss
import './slider.scss';
const imageArr = [b_1, b_2, b_3, f_1, f_2, f_3];

function CarouselFade({ data }) {
	const [slides, setSlides] = useState(imageArr);
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
						<Image src={src} alt={idx} />
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
}

export default CarouselFade;
