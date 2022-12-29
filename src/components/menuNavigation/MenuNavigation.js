import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/LogoAll70x120.webp';
import logoS from '../../assets/logo/Frame200x201.webp';
import instaIcon from '../../assets/contacts/instagram.webp';
import emailIcon from '../../assets/contacts/email.webp';
import viberIcon from '../../assets/contacts/viber.webp';
import telegramIcon from '../../assets/contacts/telegram.webp';
import { dataLinks } from '../../data';
import './menuNavigation.scss';

function MenuNavigation({ show, dataLang, setLang, page, changePage }) {
	const onClick = (e) => {
		if (document.querySelector('.menuNavigation').offsetWidth < 769) {
			show(true);
		} else {
			window.scrollTo(0, 0);
		}
	};
	return (
		<header className="menuNavigation animate__animated animate__fadeInDown">
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
				<ViewNav dataLang={dataLang} page={page} changePage={changePage} />
				<div className="menuNavigation-phone-box">
					<div className="menuNavigation-phone-wrapper">
						<div className="menuNavigation-phone-left">
							<img className="menuNavigation-icon" src={viberIcon} alt="icon" />
							<img className="menuNavigation-icon" src={telegramIcon} alt="icon" />
							<img className="menuNavigation-icon" src={instaIcon} alt="icon" />
							<img className="menuNavigation-icon" src={emailIcon} alt="icon" />
						</div>
						<div className="menuNavigation-phone-right">
							<a href="tel:+380508000840" className="menuNavigation-phone">
								+380508000840
							</a>
							<a
								href="https://www.instagram.com/r.i.c.h_s.t.o.n.e/"
								className="menuNavigation-phone"
							>
								@r.i.c.h_s.t.o.n.e
							</a>
							<div className="menuNavigation-phone">richstone@i.ua</div>
						</div>
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
		</header>
	);
}

function ViewNav({ dataLang, page, changePage }) {
	if (page === 'main') {
		return (
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
		);
	} else {
		return (
			<Nav className="menuNavigation-box" defaultActiveKey="1">
				<Nav.Item onClick={() => changePage('main')}>
					<NavLink to="/" className="menuNavigation-link animate__animated animate__fadeInDown">
						{dataLang.menuNavSlider[0]}
					</NavLink>
				</Nav.Item>
				<Nav.Item>
					<Dropdown>
						<Dropdown.Toggle variant="outline-warning" id="dropdown-basic">
							{dataLang.menuNavSlider[1]}
						</Dropdown.Toggle>

						<Dropdown.Menu as="ul">
							{dataLang.sliderBtns.map((item, idx) => {
								return (
									<Dropdown.Item className="menuNavigation-drop-link" key={idx} as="li">
										<NavLink
											end="true"
											to={dataLinks.linksNames[idx]}
											className="menuNavigation-link animate__animated animate__fadeInDown"
											onClick={() => changePage('main')}
											style={({ isActive }) => ({
												WebkitTextFillColor: isActive ? '#fff' : 'transparent',
											})}
										>
											{item}
										</NavLink>
									</Dropdown.Item>
								);
							})}
						</Dropdown.Menu>
					</Dropdown>
				</Nav.Item>
			</Nav>
		);
	}
}

export default MenuNavigation;
/* 	<div className="menuNavigation-phone-wrapper"> */
