import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useToggler } from '../hook/useToggler.hook';

import Desktop from '../../assets/about/Desktop-bg1.png';
import Mobile from '../../assets/about/Mobile-bg1.png';
import Tablet from '../../assets/about/Tablet-bg1.png';
import './about.scss';

function About({ scrollY, dataLang }) {
	const { toggler } = useToggler();
	const { aboutData } = dataLang;

	useEffect(() => {
		const about = document.querySelector('.home').clientHeight;
		const min = about / 2;
		const max = about + about / 2;

		if (scrollY >= min && scrollY <= max) {
			toggler('.about-title-box', 'animate__fadeOutLeft', 'animate__fadeInLeft');
			toggler('.about-subtitle-box', 'animate__fadeOutRight', 'animate__fadeInRight');
			toggler('.about-descr-box', 'animate__fadeOutDown', 'animate__fadeInUp');
			toggler('.about-text-footer', 'animate__zoomOut', 'animate__zoomIn', true);
		} else {
			toggler('.about-title-box', 'animate__fadeInLeft', 'animate__fadeOutLeft');
			toggler('.about-subtitle-box', 'animate__fadeInRight', 'animate__fadeOutRight');
			toggler('.about-descr-box', 'animate__fadeInUp', 'animate__fadeOutDown');
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
				<div className="about-title-box animate__animated">
					<div className="about-title-wrapper">
						<h2 className="about-title-title">{aboutData.text.title}</h2>
					</div>
				</div>
				<div className="about-subtitle-box animate__animated">
					<div className="about-subtitle-wrapper">
						<h3 className="about-subtitle-subtitle">{aboutData.text.subtitle}</h3>
					</div>
				</div>
				<div className="about-descr-box animate__animated">
					<div className="about-descr-wrapper">
						<h4 className="about-descr-title">{aboutData.text.descrTitle}</h4>
						<ul className="about-descr-lists">
							<li className="about-descr-item">{aboutData.text.descrText[0]}</li>
							<li className="about-descr-item">{aboutData.text.descrText[1]}</li>
							<li className="about-descr-item">{aboutData.text.descrText[2]}</li>
							<li className="about-descr-item">{aboutData.text.descrText[3]}</li>
						</ul>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default About;
