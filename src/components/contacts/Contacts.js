import { Image, Container } from 'react-bootstrap';
import { useEffect } from 'react';
import MapComponent from '../mapComponent/MapComponent';
import adresIcon from '../../assets/contacts/adres.png';
import instaIcon from '../../assets/contacts/instagram.png';
import telegaIcon from '../../assets/contacts/telegram.png';
import viberIcon from '../../assets/contacts/viber.png';
import './contacts.scss';
const toggleOn = (elem, remove, add) => {
	document.querySelector(`${elem}`).classList.remove(`${remove}`);
	document.querySelector(`${elem}`).classList.add(`${add}`);
};
const toggleOff = (elem, remove, add) => {
	document.querySelector(`${elem}`).classList.remove(`${remove}`);
	document.querySelector(`${elem}`).classList.add(`${add}`);
};

function Contacts({ data }) {
	useEffect(() => {
		const clientHeight = document.querySelector('.mainPage').clientHeight,
			home = document.querySelector('.home').clientHeight,
			contacts = document.querySelector('.contacts').clientHeight;
		const min = clientHeight - home - contacts / 2;
		//const max = clientHeight;

		if (data >= min) {
			toggleOn('.contacts-map', 'animate__fadeOutUpBig', 'animate__fadeInUpBig');
			toggleOn('.contacts-title', 'animate__zoomOut', 'animate__zoomIn');
			document.querySelectorAll('.contacts-phone-element').forEach((elem) => {
				elem.classList.remove('animate__zoomOut');
				elem.classList.add('animate__zoomIn');
			});
		} else {
			toggleOff('.contacts-map', 'animate__fadeInUpBig', 'animate__fadeOutUpBig');
			toggleOff('.contacts-title', 'animate__zoomIn', 'animate__zoomOut');
			document.querySelectorAll('.contacts-phone-element').forEach((elem) => {
				elem.classList.remove('animate__zoomIn');
				elem.classList.add('animate__zoomOut');
			});
		}
	}, [data]);
	return (
		<section id="contacts" className="contacts">
			<Container className="contacts-wrapper">
				<div className="contacts-box">
					<h4 className="contacts-title animate__animated">Контакти</h4>
					<div className="contacts-phone-box">
						<div className="contacts-phone-element animate__animated">
							<Image className="contacts-icon" src={telegaIcon} alt="icon" />
							<div className="contacts-phone">+3800000000</div>
						</div>
						<div className="contacts-phone-element animate__animated">
							<Image className="contacts-icon" src={instaIcon} alt="icon" />
							<div className="contacts-phone">+3800000000</div>
						</div>
						<div className="contacts-phone-element animate__animated">
							<Image className="contacts-icon" src={viberIcon} alt="icon" />
							<div className="contacts-phone">+3800000000</div>
						</div>
						<div className="contacts-phone-element animate__animated">
							<Image className="contacts-icon" src={adresIcon} alt="icon" />
							<div className="contacts-phone">Dnipro,49000</div>
						</div>
					</div>
				</div>
				<div className="contacts-map animate__animated">
					<MapComponent />
				</div>
			</Container>
		</section>
	);
}

export default Contacts;
//toggler('.home-text', 'animate__fadeInUpBig', 'animate__fadeOutUpBig');
