import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/logo/Frame200x201.png';

import './offNav.scss';
function OffNav({ show, setShow }) {
	const handleClose = () => setShow(false);

	return (
		<Offcanvas show={show} onHide={handleClose} placement="top" scroll={true}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title className="offcanvas-logo-box">
					<a href="/#home" className="offcanvas-logo">
						<Image
							className="offcanvas-logo-img animate__animated animate__zoomIn"
							src={logo}
						></Image>
					</a>
				</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Nav className="offcanvas-box" defaultActiveKey="1" as="ul">
					<Nav.Item as="li">
						<Nav.Link className="offcanvas-link animate__animated animate__zoomIn" href="/#about">
							Компания
						</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link className="offcanvas-link animate__animated animate__zoomIn" href="/#work">
							Галерая робiт
						</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link
							className="offcanvas-link animate__animated animate__zoomIn"
							href="/#partners"
						>
							Партнери
						</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link
							className="offcanvas-link animate__animated animate__zoomIn"
							href="/#materials"
						>
							Матерiали
						</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link
							className="offcanvas-link animate__animated animate__zoomIn"
							href="/#contacts"
						>
							Контакти
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Offcanvas.Body>
		</Offcanvas>
	);
}
export default OffNav;
