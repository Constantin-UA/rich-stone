import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useToggler } from '../hook/useToggler.hook';

import Desktop from '../../assets/about/Desktop-bg1.webp';
import Mobile from '../../assets/about/Mobile-bg1.webp';
import Tablet from '../../assets/about/Tablet-bg1.webp';

import './about.scss';

function About({ scrollY, dataLang }) {
	const { toggler } = useToggler();
	const { aboutData } = dataLang;

	useEffect(() => {
		const about = document.querySelector('.home').clientHeight;
		const min = about / 2;
		const max = about + about / 2;

		if (scrollY >= min && scrollY <= max) {
			toggler('.about-title', 'animate__zoomOut', 'animate__zoomIn');
			toggler('.about-subtitle', 'animate__zoomOut', 'animate__zoomIn');
			toggler('.about-descr', 'animate__fadeOutDown', 'animate__fadeInUp');
			toggler('.about-text-footer', 'animate__zoomOut', 'animate__zoomIn', true);
		} else {
			toggler('.about-title', 'animate__zoomIn', 'animate__zoomOut');
			toggler('.about-subtitle', 'animate__zoomIn', 'animate__zoomOut');
			toggler('.about-descr', 'animate__fadeInUp', 'animate__fadeOutDown');
			toggler('.about-text-footer', 'animate__zoomIn', 'animate__zoomOut', true);
		}
	}, [scrollY, toggler]);

	return (
		<section id="about" className="about">
			<picture>
				<source media="(max-width: 430px)" srcSet={Mobile} />
				<source media="(max-width: 768px)" srcSet={Tablet} />
				<img className="about-bg" src={Desktop} alt="background sters work" />
			</picture>

			<Container className="about-wrapper">
				<h2 className="about-title animate__animated">{aboutData.text.title}</h2>
				<h3 className="about-subtitle animate__animated">{aboutData.text.subtitle}</h3>
				<div className="about-descr animate__animated">
					<h4 className="about-descr-title">{aboutData.text.descrTitle}</h4>
					<ul className="about-descr-lists">
						<li className="about-descr-item">{aboutData.text.descrText[0]}</li>
						<li className="about-descr-item">{aboutData.text.descrText[1]}</li>
						<li className="about-descr-item">{aboutData.text.descrText[2]}</li>
						<li className="about-descr-item">{aboutData.text.descrText[3]}</li>
					</ul>
				</div>
			</Container>
		</section>
	);
}

export default About;
