import Carousel from 'react-bootstrap/Carousel';
import { slides } from '../../../data';
function CarouselSimple({ indexPage }) {
	return (
		<Carousel
			className="animate__animated animate__zoomIn"
			controls={true}
			indicators={true}
			interval={24000}
			fade
		>
			{slides[indexPage].map((src, idx) => {
				return (
					<Carousel.Item key={idx}>
						<img className="slide-bg" src={src} alt="bg" />
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
}
export default CarouselSimple;
