//Components
import { Container } from 'react-bootstrap';
import Slider from '../slider/Slider';
//SCSS
import './work.scss';

function Works() {
	return (
		<section id="work" className="work">
			<Container className="work-wrapper">
				<h2 className="work-title">Галерая робiт</h2>
				<Slider />
			</Container>
		</section>
	);
}
export default Works;
