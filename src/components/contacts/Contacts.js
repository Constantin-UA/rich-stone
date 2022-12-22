import { Image, Container } from 'react-bootstrap';
import MapComponent from '../mapComponent/MapComponent';
import adresIcon from '../../assets/contacts/adres.webp';
import instaIcon from '../../assets/contacts/instagram.webp';
import emailIcon from '../../assets/contacts/email.webp';
import telegaIcon from '../../assets/contacts/telegram.webp';
import viberIcon from '../../assets/contacts/viber.webp';
import './contacts.scss';

function Contacts({ scrollY, dataLang }) {
	return (
		<section id="contacts" className="contacts">
			<Container className="contacts-wrapper">
				<div className="contacts-box">
					<h4 className="contacts-title animate__animated">{dataLang.contactsText}</h4>
					<div className="contacts-phone-box">
						<div className="contacts-phone-element animate__animated">
							<Image className="contacts-icon" src={telegaIcon} alt="icon" />
							<div className="contacts-phone">+380508000840</div>
						</div>
						<div className="contacts-phone-element animate__animated">
							<Image className="contacts-icon" src={viberIcon} alt="icon" />
							<div className="contacts-phone">+380508000840</div>
						</div>
						<div className="contacts-phone-element animate__animated">
							<Image className="contacts-icon" src={instaIcon} alt="icon" />
							<a
								href="https://instagram.com/stone__dnepr?igshid=YmMyMTA2M2Y="
								className="contacts-phone"
							>
								@stone_dnepr
							</a>
						</div>
						<div className="contacts-phone-element animate__animated">
							<Image className="contacts-icon" src={emailIcon} alt="icon" />
							<div className="contacts-phone">richstone@i.ua</div>
						</div>
						<div className="contacts-phone-element animate__animated">
							<Image className="contacts-icon" src={adresIcon} alt="icon" />
							<div className="contacts-phone">{dataLang.contactsAdres}</div>
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
