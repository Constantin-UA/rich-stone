import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useToggler } from '../hook/useToggler.hook';

import Image from 'react-bootstrap/Image';
import BG from '../../assets/about/bg.jpg';
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
			toggler('.about-text-footer', 'animate__zoomOut', 'animate__zoomIn', true);
		} else {
			toggler('.about-title', 'animate__zoomIn', 'animate__zoomOut');
			toggler('.about-subtitle', 'animate__zoomIn', 'animate__zoomOut');
			toggler('.about-text-footer', 'animate__zoomIn', 'animate__zoomOut', true);
		}
	}, [data]);
	return (
		<section id="about" className="about">
			<Image className="about-bg" alt="bg" src={BG} />
			<Container className="about-wrapper">
				<div className="about-title animate__animated">
					Компанія Rich Stone вже понад 10 років надає послуги з виготовлення та монтажу виробів з
					натурального та штучного каменю.
				</div>
				<div className="about-subtitle animate__animated">
					<p>
						У нас Ви знайдете кращі зразки виробів із каменю для дому, офісу, торгівельного центру
						чи магазину.
					</p>
					<p>Серед спектрів наших послуг:</p>
					<p>
						- виготовлення виробів з натурального каменю (травертину, оніксу, мармуру та граніту)
					</p>
					<p>- монтаж готових виробів із природного та штучного каменю </p>
					<p>- створення мозаїк із натурального каменю</p>
					<p>- фігурне різання мармуру та граніту</p>
				</div>
			</Container>
		</section>
	);
}

export default About;
