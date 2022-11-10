import Carousel from 'react-bootstrap/Carousel';

//img import
import first from '../../assets/9427.jpg';
import second from '../../assets/9438.jpg';
import third from '../../assets/9441.jpg';

//import scss
import './carouselX.scss';
function CarouselFade() {
	return (
		<Carousel className="carouselX" fade>
			<Carousel.Item className="carouselX-item">
				<img className="carouselX-img" src={first} alt="First slide" />
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="carouselX-item">
				<img className="carouselX-img" src={second} alt="Second slide" />
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="carouselX-item">
				<img className="carouselX-img" src={third} alt="Third slide" />
				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselFade;
