import { lazy, Suspense } from 'react';
import Spiner from '../../../components/spiner/Spiner';

import { Image, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import adresIcon from '../../../assets/contacts/adres.webp';
import instaIcon from '../../../assets/contacts/instagram.webp';
import emailIcon from '../../../assets/contacts/email.webp';
import telegaIcon from '../../../assets/contacts/telegram.webp';
import prom from '../../../assets/contacts/prom.webp';

import './sliderPage.scss';
const CarouselSimple = lazy(() => import('./CarouselSimple'));

function SliderPage({ indexPage, changePage, dataLang }) {
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
					<Suspense fallback={<Spiner />}>
						<CarouselSimple indexPage={indexPage} />
					</Suspense>
					<div className="sliderPage-phone-box">
						<div className="contacts-phone-element">
							<Image className="contacts-icon" src={telegaIcon} alt="icon" />
							<a href="tel:+380508000840" className="contacts-phone">
								+380508000840
							</a>
						</div>
						<div className="contacts-phone-element">
							<Image className="contacts-icon" src={instaIcon} alt="icon" />
							<a href="https://www.instagram.com/r.i.c.h.s.t.o.n.e/" className="contacts-phone">
								@r.i.c.h.s.t.o.n.e
							</a>
						</div>
						<div className="contacts-phone-element">
							<Image className="contacts-icon" src={emailIcon} alt="icon" />
							<div className="contacts-phone">richstone@i.ua</div>
						</div>
						<div className="contacts-phone-element animate__animated">
							<Image className="contacts-icon" src={prom} alt="icon" />
							<a href="https://rich-stone.prom.ua/ua/" className="contacts-phone">
								www.rich-stone.prom.ua
							</a>
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
