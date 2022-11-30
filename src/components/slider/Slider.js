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
		const clientHeight = document.querySelector('.mainPage').clientHeight;
		const home = document.querySelector('.home').clientHeight;
		const about = document.querySelector('.about').clientHeight;
		const work = document.querySelector('.work').clientHeight;
		const part = document.querySelector('.partnership').clientHeight;
		const min = about + work / 2;
		const max = clientHeight - home - about - work - part / 2;

		console.log('slider min: ', min);
		console.log('slider max: ', max);

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
	}, [data]);
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
