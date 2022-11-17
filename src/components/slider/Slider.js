import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
//img import
import b_1 from '../../assets/work/img-1-1.png';
import b_2 from '../../assets/work/img-1-2.png';
import b_3 from '../../assets/work/img-1-3.png';
//import scss
import './slider.scss';
const data = [b_1, b_2, b_3];
function CarouselFade() {
	const [slides, setSlides] = useState(data);
	return (
		<Carousel controls={false} interval={8000} fade>
			{slides.map((src, idx) => {
				return (
					<Carousel.Item>
						<Image src={src} alt={idx} />
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
}

export default CarouselFade;
