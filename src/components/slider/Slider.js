import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { useState, useEffect } from 'react';
import { useToggler } from '../hook/useToggler.hook';
//img import
import b_1 from '../../assets/work/img-1-1.png';
import b_2 from '../../assets/work/img-1-2.png';
import b_3 from '../../assets/work/img-1-3.png';
//import scss
import './slider.scss';
const imageArr = [b_1, b_2, b_3];

function CarouselFade({ data }) {
	const [slides, setSlides] = useState(imageArr);
	const { togglerToSlider } = useToggler();

	useEffect(() => {
		if (data >= 1200 && data <= 2000) {
			/* 			togglerToSlider(
				'.work-title',
				['animate__animated', 'animate__zoomOut'],
				['animate__animated', 'animate__zoomIn']
			); */
			togglerToSlider(
				'.carousel',
				['animate__animated', 'animate__zoomOut'],
				['animate__animated', 'animate__zoomIn']
			);
		} else {
			/* togglerToSlider(
				'.work-title',
				['animate__animated', 'animate__zoomIn'],
				['animate__animated', 'animate__zoomOut']
			); */
			togglerToSlider(
				'.carousel',
				['animate__animated', 'animate__zoomIn'],
				['animate__animated', 'animate__zoomOut']
			);
		}
	}, [data]);
	return (
		<Carousel controls={false} interval={8000} fade>
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
