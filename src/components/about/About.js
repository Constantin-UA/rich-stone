import { useEffect } from 'react';
import { Container } from 'react-bootstrap';

import Image from 'react-bootstrap/Image';
import BG from '../../assets/about/bg.jpg';
import './about.scss';

//fast toggle class
const toggleOn = (elem, remove, add) => {
	document.querySelector(`${elem}`).classList.remove(`${remove}`);
	document.querySelector(`${elem}`).classList.add(`${add}`);
};
const toggleOff = (elem, remove, add) => {
	document.querySelector(`${elem}`).classList.remove(`${remove}`);
	document.querySelector(`${elem}`).classList.add(`${add}`);
};

function About({ data }) {
	useEffect(() => {
		if (data === 'about') {
			toggleOn('.about-title', 'animate__zoomOut', 'animate__zoomIn');
			toggleOn('.about-subtitle', 'animate__zoomOut', 'animate__zoomIn');
			toggleOn('.about-text-footer', 'animate__zoomOut', 'animate__zoomIn');
		} else {
			toggleOff('.about-title', 'animate__zoomIn', 'animate__zoomOut');
			toggleOff('.about-subtitle', 'animate__zoomIn', 'animate__zoomOut');
			toggleOff('.about-text-footer', 'animate__zoomIn', 'animate__zoomOut');
		}
	}, [data]);
	return (
		<section id="about" className="about">
			<Image className="about-bg" alt="bg" src={BG} />
			<Container className="about-wrapper">
				<h4 className="about-title animate__animated">Компанія Rich Stone.</h4>
				<p className="about-subtitle animate__animated">
					Ми надаємо послуги з виготовлення та монтажу вже більше 10 років.
				</p>
				<p className="about-text-footer animate__animated animate__zoomIn">
					Чесні і відкриті умови співпраці. Робота в компанії з 10- річним стажем, яка займає міцні
					позиції на ринку. Підтримка та поради персонального менеджера у виробничих питаннях.
					Відповідальність і виконання взятих на себе зобов’язань. Команда досвідчених фахівців.
				</p>
			</Container>
		</section>
	);
}

export default About;
