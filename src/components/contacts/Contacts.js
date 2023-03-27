import { Image, Container } from 'react-bootstrap';
import MapComponent from '../mapComponent/MapComponent';
import adresIcon from '../../assets/contacts/adres.webp';
import instaIcon from '../../assets/contacts/instagram.webp';
import emailIcon from '../../assets/contacts/email.webp';
import viberIcon from '../../assets/contacts/viber.webp';
import telegramIcon from '../../assets/contacts/telegram.webp';
import prom from '../../assets/contacts/prom.webp';
import './contacts.scss';

function Contacts({ scrollY, dataLang }) {
	return (
		<section id="contacts" className="contacts">
			<Container className="contacts-wrapper">
				<div className="contacts-box">
					<h4 className="contacts-title animate__animated">{dataLang.contactsText}</h4>
					<div className="contacts-phone-box">
						<div className="contacts-phone-element animate__animated">
							<Image className="contacts-icon" src={viberIcon} alt="icon" />
							<Image className="contacts-icon" src={telegramIcon} alt="icon" />

							<a href="tel:+380508000840" className="contacts-phone">
								+380508000840
							</a>
						</div>
						<div className="contacts-phone-element animate__animated">
							<Image className="contacts-icon" src={instaIcon} alt="icon" />
							<a href="https://www.instagram.com/r.i.c.h.s.t.o.n.e/" className="contacts-phone">
								@r.i.c.h.s.t.o.n.e
							</a>
						</div>
						<div className="contacts-phone-element animate__animated">
							<Image className="contacts-icon" src={emailIcon} alt="icon" />
							<div className="contacts-phone">richstone@i.ua</div>
						</div>
						<div className="contacts-phone-element animate__animated">
							<Image className="contacts-icon" src={prom} alt="icon" />
							<a href="https://rich-stone.prom.ua/ua/" className="contacts-phone">
								www.rich-stone.prom.ua
							</a>
						</div>
						<div className="contacts-phone-element animate__animated">
							<Image className="contacts-icon" src={adresIcon} alt="icon" />
							<div className="contacts-phone">{dataLang.contactsAdres}</div>
						</div>
					</div>
				</div>
				<div className="contacts-map">
					<div className="contacts-map-wrapper">
						<MapComponent />
					</div>
				</div>
			</Container>
		</section>
	);
}

export default Contacts;
