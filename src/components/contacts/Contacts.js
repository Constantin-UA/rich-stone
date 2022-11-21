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
		if (data === 'contacts') {
			toggleOn('.contacts-map', 'animate__fadeOutRightBig', 'animate__fadeInRightBig');
			toggleOn('.contacts-logo', 'animate__fadeOutLeftBig', 'animate__fadeInLeftBig');
			toggleOn('.contacts-title', 'animate__fadeOutLeftBig', 'animate__fadeInLeftBig');
			toggleOn('.contacts-phone-element', 'animate__fadeOutLeftBig', 'animate__fadeInLeftBig');
			document.querySelectorAll('.contacts-phone-element').forEach((elem) => {
				elem.classList.remove('animate__fadeOutLeftBig');
				elem.classList.add('animate__fadeInLeftBig');
			});
		} else {
			toggleOn('.contacts-map', 'animate__fadeInRightBig', 'animate__fadeOutRightBig');
			toggleOff('.contacts-logo', 'animate__fadeInLeftBig', 'animate__fadeOutLeftBig');
			toggleOff('.contacts-title', 'animate__fadeInLeftBig', 'animate__fadeOutLeftBig');
			document.querySelectorAll('.contacts-phone-element').forEach((elem) => {
				elem.classList.remove('animate__fadeInLeftBig');
				elem.classList.add('animate__fadeOutLeftBig');
			});
		}
	}, [data]);
	return (
		<section id="contacts" className="contacts">
			<Container className="contacts-wrapper">
				<div className="contacts-box">
					<div className="contacts-logo animate__animated">Rich Stone</div>
					<h6 className="contacts-title animate__animated">Контакти</h6>
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
