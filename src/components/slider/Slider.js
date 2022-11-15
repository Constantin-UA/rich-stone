import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

//img import
import b_1 from '../../assets/work/img-1-1.png';
import b_2 from '../../assets/work/img-1-2.png';
import b_3 from '../../assets/work/img-1-3.png';

//import scss
import './slider.scss';
function CarouselFade() {
	return (
		<Carousel fade>
			<Carousel.Item>
				<Image src={b_1} alt="First slide" />
			</Carousel.Item>
			<Carousel.Item>
				<Image src={b_2} alt="Second slide" />
			</Carousel.Item>
			<Carousel.Item>
				<Image src={b_3} alt="Third slide" />
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselFade;
