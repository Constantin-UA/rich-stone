//Components
import { Container } from 'react-bootstrap';
import Slider from '../slider/Slider';
//SCSS
import './work.scss';

function Works({ scrollY, dataLang, slides }) {
	return (
		<section id="work" className="work">
			<Container className="work-wrapper">
				<Slider scrollY={scrollY} dataLang={dataLang} slides={slides} />
			</Container>
		</section>
	);
}
export default Works;
