import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { useState, useEffect } from 'react';
//img import
import b_1 from '../../assets/work/img-1-1.png';
import b_2 from '../../assets/work/img-1-2.png';
import b_3 from '../../assets/work/img-1-3.png';
//import scss
import './slider.scss';
const imageArr = [b_1, b_2, b_3];

const toggleOn = (elem) => {
	document.querySelector(`${elem}`).classList.remove('animate__animated', 'animate__zoomOut');
	document.querySelector(`${elem}`).classList.add('animate__animated', 'animate__zoomIn');
};

const toggleOff = (elem) => {
	document.querySelector(`${elem}`).classList.remove('animate__animated', 'animate__zoomIn');
	document.querySelector(`${elem}`).classList.add('animate__animated', 'animate__zoomOut');
};

function CarouselFade({ data }) {
	const [slides, setSlides] = useState(imageArr);

	useEffect(() => {
		if (data === 'work') {
			toggleOn('.work-title');
			toggleOn('.carousel');
		} else {
			toggleOff('.work-title');
			toggleOff('.carousel');
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
