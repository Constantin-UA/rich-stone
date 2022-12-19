import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/logo/Frame200x201.webp';

import './offNav.scss';
function OffNav({ show, setShow, dataLang, setLang }) {
	const handleClose = () => setShow(false);
	return (
		<Offcanvas show={show} onHide={handleClose} placement="top" scroll={true}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title className="offcanvas-logo-box">
					<a href="/#home" className="offcanvas-logo">
						<Image
							className="offcanvas-logo-img animate__animated animate__zoomIn"
							src={logo}
							alt="Rich Stone offNav logo"
						></Image>
					</a>
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
					{dataLang.menuNavText.map((item, idx) => {
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
					})}
				</Nav>
			</Offcanvas.Body>
		</Offcanvas>
	);
}
export default OffNav;
