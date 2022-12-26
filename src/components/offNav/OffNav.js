import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/logo/Frame200x201.webp';
import instaIcon from '../../assets/contacts/instagram.webp';
import viberIcon from '../../assets/contacts/viber.webp';

import './offNav.scss';

function OffNav({ show, setShow, dataLang, setLang, dataLinks, page }) {
	const handleClose = () => setShow(false);
	return (
		<Offcanvas show={show} onHide={handleClose} placement="top" scroll={true}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title className="offcanvas-logo-box">
					<NavLink to="/#" className="offcanvas-logo" onClick={() => handleClose()}>
						<Image
							className="offcanvas-logo-img animate__animated animate__zoomIn"
							src={logo}
							alt="Rich Stone offNav logo"
						></Image>
					</NavLink>
				</Offcanvas.Title>
				<div className="offcanvas-lang">
					<button className="offcanvas-lang-ua" onClick={() => setLang('UA')}>
						UA
					</button>
					<div className="offcanvas-lang-line">/</div>
					<button className="offcanvas-lang-ru" onClick={() => setLang('RU')}>
						RU
					</button>
				</div>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Nav className="offcanvas-box" defaultActiveKey="1" as="ul">
					{
						<ViewNavbarMenu
							dataLang={dataLang}
							handleClose={handleClose}
							page={page}
							dataLinks={dataLinks}
						/>
					}
				</Nav>
				<div className="offcanvas-phone-box">
					<div className="offcanvas-phone-wrapper">
						<img className="offcanvas-icon" src={viberIcon} alt="icon" />
						<div className="offcanvas-phone">+380508000840</div>
					</div>
					<div className="offcanvas-phone-wrapper">
						<img className="offcanvas-icon" src={instaIcon} alt="icon" />
						<a
							href="https://instagram.com/stone__dnepr?igshid=YmMyMTA2M2Y="
							className="offcanvas-phone"
						>
							@stone_dnepr
						</a>
					</div>
				</div>
			</Offcanvas.Body>
		</Offcanvas>
	);
}
function ViewNavbarMenu({ dataLang, handleClose, page, dataLinks }) {
	if (page === 'main') {
		return dataLang.menuNavText.map((item, idx) => {
			return (
				<Nav.Item as="li" key={idx} onClick={() => handleClose()}>
					<Nav.Link
						className="offcanvas-link animate__animated animate__zoomIn"
						href={dataLang.menuNavHref[idx]}
					>
						{item}
					</Nav.Link>
				</Nav.Item>
			);
		});
	} else {
		return dataLang.sliderBtns.map((item, idx) => {
			return (
				<Nav.Item as="li" key={idx} onClick={() => handleClose()}>
					<NavLink
						end="true"
						className="offcanvas-link sliders-link animate__animated animate__zoomIn"
						to={dataLinks.linksNames[idx]}
					>
						{item}
					</NavLink>
				</Nav.Item>
			);
		});
	}
	/*
	 */
}
export default OffNav;
