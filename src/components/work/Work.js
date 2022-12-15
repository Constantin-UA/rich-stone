//Components
import { Container } from 'react-bootstrap';
import Slider from '../slider/Slider';
//SCSS
import './work.scss';

function Works({ scrollY, data }) {
	return (
		<section id="work" className="work">
			<Container className="work-wrapper">
				<Slider scrollY={scrollY} data={data} />
			</Container>
		</section>
	);
}
export default Works;
