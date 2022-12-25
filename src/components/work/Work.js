//Components
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useToggler } from '../hook/useToggler.hook';
import { useEffect } from 'react';
import { dataLinks } from '../../data';
//SCSS
import './work.scss';

function Works({ scrollY, dataLang, images }) {
	const { toggler } = useToggler();

	useEffect(() => {
		const about = document.querySelector('.about').clientHeight;
		const work = document.querySelector('.work').clientHeight;
		const min = about;
		const max = about + work + work / 2;
		if (scrollY >= min && scrollY <= max) {
			toggler('.work-btn-item', 'animate__zoomOut', 'animate__zoomIn', true);
		} else {
			toggler('.work-btn-item', 'animate__zoomIn', 'animate__zoomOut', true);
		}
	}, [scrollY, toggler]);
	return (
		<section id="work" className="work">
			<Container className="work-wrapper">
				<ul className="work-btn-list">
					{dataLang.sliderBtns.map((item, idx) => {
						return (
							<li key={idx} className="work-btn-item animate__animated">
								<NavLink end="true" to={dataLinks.linksNames[idx]}>
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
