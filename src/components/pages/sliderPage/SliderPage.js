import Carousel from 'react-bootstrap/Carousel';
import { Image, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import adresIcon from '../../../assets/contacts/adres.webp';
import instaIcon from '../../../assets/contacts/instagram.webp';
import emailIcon from '../../../assets/contacts/email.webp';
import telegaIcon from '../../../assets/contacts/telegram.webp';
import { dataImg } from '../../../data';
import './sliderPage.scss';

function SliderPage({ indexPage, changePage, dataLang }) {
	const { slides } = dataImg;
	const { sliderBtns } = dataLang;
	useEffect(() => {
		changePage('slider');
	});

	return (
		<>
			<Helmet>
				<title>Rich Stone - {sliderBtns[indexPage].toLowerCase()}</title>
			</Helmet>
			<div className="sliderPage">
				<Container className="sliderPage-wrapper">
					<Carousel
						className="animate__animated animate__zoomIn"
						controls={true}
						indicators={true}
						interval={24000}
						fade
					>
						{slides[indexPage].map((src, idx) => {
							return (
								<Carousel.Item key={idx}>
									<img className="slide-bg" src={src} alt="bg" />
								</Carousel.Item>
							);
						})}
					</Carousel>
					<div className="sliderPage-phone-box">
						<div className="contacts-phone-element">
							<Image className="contacts-icon" src={telegaIcon} alt="icon" />
							<div className="contacts-phone">+380508000840</div>
						</div>
						<div className="contacts-phone-element">
							<Image className="contacts-icon" src={instaIcon} alt="icon" />
							<a
								href="https://instagram.com/stone__dnepr?igshid=YmMyMTA2M2Y="
								className="contacts-phone"
							>
								@stone_dnepr
							</a>
						</div>
						<div className="contacts-phone-element">
							<Image className="contacts-icon" src={emailIcon} alt="icon" />
							<div className="contacts-phone">richstone@i.ua</div>
						</div>
						<div className="contacts-phone-element">
							<Image className="contacts-icon" src={adresIcon} alt="icon" />
							<div className="contacts-phone">{dataLang.contactsAdres}</div>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
}

export default SliderPage;
