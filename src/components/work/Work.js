//Components
import { Container } from 'react-bootstrap';
import Slider from '../slider/Slider';
//SCSS
import './work.scss';

function Works({ data }) {
	return (
		<section id="work" className="work">
			<Container className="work-wrapper">
				<Slider data={data} />
			</Container>
		</section>
	);
}
export default Works;

//<h2 className="work-title">Галерая робiт</h2>
