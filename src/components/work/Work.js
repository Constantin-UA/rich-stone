//Components
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

//SCSS
import './work.scss';
const linksNames = [
	'/countertops',
	'/facing',
	'/fireplaces',
	'/pavement',
	'/facades',
	'/interior',
	'/floors',
];
function Works({ scrollY, dataLang, images, changePage }) {
	return (
		<section id="work" className="work">
			<Container className="work-wrapper">
				<ul className="work-btn-list">
					{dataLang.sliderBtns.map((item, idx) => {
						return (
							<li key={idx} className="work-btn-item" onClick={() => changePage('slide')}>
								<NavLink end="true" to={linksNames[idx]}>
									<img className="work-btn-img" src={images[idx]} alt={idx} />
									<span className="work-btn-name">{item}</span>
								</NavLink>
							</li>
						);
					})}
				</ul>
			</Container>
		</section>
	);
}
export default Works;
