import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/logo/LogoAll70x120.png';
import logoS from '../../assets/logo/Frame200x201.webp';
import instaIcon from '../../assets/contacts/instagram.webp';
import emailIcon from '../../assets/contacts/email.webp';
import viberIcon from '../../assets/contacts/viber.webp';
import './menuNavigation.scss';

function MenuNavigation({ show, dataLang, setLang }) {
	const onClick = (e) => {
		if (document.querySelector('.menuNavigation').offsetWidth < 768) {
			show(true);
		} else {
			window.scrollTo(0, 0);
		}
	};
	return (
		<section className="menuNavigation animate__animated animate__fadeInDown">
			<div className="menuNavigation-wrapper">
				<div className="menuNavigation-logo" onClick={onClick}>
					<div className="menuNavigation-logo-wrapper">
						<picture>
							<source media="(max-width: 768px)" srcSet={logoS} />
							<img
								className="menuNavigation-logo-img animate__animated"
								src={logo}
								alt="background logo Rich Stone"
							/>
						</picture>
					</div>
				</div>
				<Nav className="menuNavigation-box" defaultActiveKey="1" as="ul">
					{dataLang.menuNavText.map((item, idx) => {
						return (
							<Nav.Item as="li" key={idx}>
								<Nav.Link
									className="menuNavigation-link animate__animated animate__fadeInDown"
									href={dataLang.menuNavHref[idx]}
								>
									{item}
								</Nav.Link>
							</Nav.Item>
						);
					})}
				</Nav>
				<div className="menuNavigation-phone-box">
					<div className="menuNavigation-phone-wrapper">
						<img className="menuNavigation-icon" src={viberIcon} alt="icon" />
						<div className="menuNavigation-phone">+380508000840</div>
					</div>
					<div className="menuNavigation-phone-wrapper">
						<img className="menuNavigation-icon" src={instaIcon} alt="icon" />
						<a
							href="https://instagram.com/stone__dnepr?igshid=YmMyMTA2M2Y="
							className="menuNavigation-phone"
						>
							@stone_dnepr
						</a>
					</div>
					<div className="menuNavigation-phone-wrapper">
						<img className="menuNavigation-icon" src={emailIcon} alt="icon" />
						<div className="menuNavigation-phone">richstone@i.ua</div>
					</div>
				</div>
				<div className="menuNavigation-lang">
					<button className="menuNavigation-lang-ua" onClick={() => setLang('UA')}>
						UA
					</button>
					<div className="menuNavigation-lang-line">/</div>
					<button className="menuNavigation-lang-ru" onClick={() => setLang('RU')}>
						RU
					</button>
				</div>
			</div>
		</section>
	);
}

export default MenuNavigation;
