import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useToggler } from '../hook/useToggler.hook';

import Desktop from '../../assets/about/Desktop-bg-min.png';
import Mobile from '../../assets/about/Mobile-bg-min.png';
import Tablet from '../../assets/about/Tablet-bg-min.png';

import './about.scss';

//fast toggle class

function About({ data }) {
	const { toggler } = useToggler();

	useEffect(() => {
		const about = document.querySelector('.about').clientHeight;
		const min = about / 2;
		const max = about + about / 2;

		if (data >= min && data <= max) {
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
	}, [data]);
	return (
		<section id="about" className="about">
			<picture>
				<source media="(max-width: 430px)" srcSet={Mobile} />
				<source media="(max-width: 800px)" srcSet={Tablet} />
				<img className="about-bg" src={Desktop} alt="background sters work" />
			</picture>

			<Container className="about-wrapper">
				<h2 className="about-title animate__animated">
					Компанія Rich Stone вже понад 10 років надає послуги з виготовлення та монтажу виробів з
					натурального та штучного каменю.
				</h2>
				<h3 className="about-subtitle animate__animated">
					У нас Ви знайдете кращі зразки виробів із каменю для дому, офісу, торгівельного центру чи
					магазину.
				</h3>
				<div className="about-descr animate__animated">
					<h4 className="about-descr-title">Серед спектрів наших послуг:</h4>
					<ul className="about-descr-lists">
						<li className="about-descr-item">
							виготовлення виробів з натурального каменю (травертину, оніксу, мармуру та граніту)
						</li>
						<li className="about-descr-item">
							монтаж готових виробів із природного та штучного каменю
						</li>
						<li className="about-descr-item">створення мозаїк із натурального каменю</li>
						<li className="about-descr-item">фігурне різання мармуру та граніту</li>
					</ul>
				</div>
			</Container>
		</section>
	);
}

export default About;
