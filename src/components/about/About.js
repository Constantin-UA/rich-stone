import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import BG from '../../assets/about/bg.jpg';
import './about.scss';

function About() {
	return (
		<section id="about" className="about">
			<Image className="about-bg" alt="bg" src={BG} />
			<Container className="about-wrapper">
				<h4 className="about-title">Компанія Rich Stone.</h4>
				<p className="about-subtitle">
					Ми надаємо послуги з виготовлення та монтажу вже більше 10 років.
				</p>

				<p className="about-text-footer">
					Чесні і відкриті умови співпраці. Робота в компанії з 10- річним стажем, яка займає міцні
					позиції на ринку. Підтримка та поради персонального менеджера у виробничих питаннях.
					Відповідальність і виконання взятих на себе зобов’язань. Команда досвідчених фахівців.
				</p>
			</Container>
		</section>
	);
}

export default About;
