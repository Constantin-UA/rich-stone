//Components
import { Container } from 'react-bootstrap';
import Slider from '../slider/Slider';
//SCSS
import './work.scss';

function Works() {
	return (
		<section className="work">
			<Container className="work-wrapper">
				<Slider />
			</Container>
		</section>
	);
}
export default Works;
