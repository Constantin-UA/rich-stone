//Components
import { Container } from 'react-bootstrap';
import CarouselFade from '../carousel/CarouselFade';
//SCSS
import './work.scss';

function Works() {
	return (
		<section className="work">
			<Container className="work-wrapper">
				<CarouselFade />
			</Container>
		</section>
	);
}
export default Works;
