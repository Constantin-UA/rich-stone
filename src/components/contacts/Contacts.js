import { Image, Container } from 'react-bootstrap';
import mapImg from '../../assets/contacts/map-img.png';
import adresIcon from '../../assets/contacts/adres.png';
import instaIcon from '../../assets/contacts/instagram.png';
import telegaIcon from '../../assets/contacts/telegram.png';
import viberIcon from '../../assets/contacts/viber.png';
import './contacts.scss';

function Contacts() {
	return (
		<section id="contacts" className="contacts">
			<Container className="contacts-wrapper">
				<div className="contacts-box">
					<div className="contacts-logo">Rich Stone</div>
					<h6 className="contacts-title">Контакти</h6>
					<div className="contacts-phone-box">
						<div className="contacts-phone-element">
							<Image className="contacts-icon" src={telegaIcon} alt="icon" />
							<div className="contacts-phone">+3800000000</div>
						</div>
						<div className="contacts-phone-element">
							<Image className="contacts-icon" src={instaIcon} alt="icon" />
							<div className="contacts-phone">+3800000000</div>
						</div>
						<div className="contacts-phone-element">
							<Image className="contacts-icon" src={viberIcon} alt="icon" />
							<div className="contacts-phone">+3800000000</div>
						</div>
						<div className="contacts-phone-element">
							<Image className="contacts-icon" src={adresIcon} alt="icon" />
							<div className="contacts-phone">Dnipro,49000</div>
						</div>
					</div>
				</div>
				<div className="contacts-map">
					<Image src={mapImg} alt="map" />
				</div>
			</Container>
		</section>
	);
}

export default Contacts;
