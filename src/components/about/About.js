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
		if (data >= 400 && data <= 1200) {
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
				<h4 className="about-title animate__animated">Компанія Rich Stone.</h4>
				<p className="about-subtitle animate__animated">
					Ми надаємо послуги з виготовлення та монтажу вже більше 10 років.
				</p>
				<p className="about-text-footer animate__animated">
					Чесні і відкриті умови співпраці. Робота в компанії з 10- річним стажем, яка займає міцні
					позиції на ринку. Підтримка та поради персонального менеджера у виробничих питаннях.
					Відповідальність і виконання взятих на себе зобов’язань. Команда досвідчених фахівців.
				</p>
				<p className="about-text-footer animate__animated">
					Мы развиваем наш сервис, формируем рынок камня Украины и нацелены на долгосрочное и
					взаимовыгодное сотрудничество. Для нас важно понимать, какие потребности у наших клиентов,
					и использовать возможности лучших мировых производителей для удовлетворения этих запросов.
				</p>
			</Container>
		</section>
	);
}

export default About;
