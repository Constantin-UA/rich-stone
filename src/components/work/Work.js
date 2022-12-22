//Components
import { Container } from 'react-bootstrap';
//SCSS
import './work.scss';

function Works({ scrollY, dataLang, images }) {
	return (
		<section id="work" className="work">
			<Container className="work-wrapper">
				<ul className="work-btn-list">
					{dataLang.sliderBtns.map((item, idx) => {
						return (
							<li key={idx} className="work-btn-item" onClick={() => console.log(item, idx)}>
								<img className="work-btn-img" src={images[idx]} alt={idx} />
								<span className="work-btn-name">{item}</span>
							</li>
						);
					})}
				</ul>
			</Container>
		</section>
	);
}
export default Works;
