import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/navLogo.png';
import './menuNavigation.scss';
function MenuNavigation({ show }) {
	const onClick = (e) => {
		show(true);
	};
	return (
		<section className="menuNavigation animate__animated animate__fadeInDown">
			<div className="menuNavigation-wrapper">
				<div className="menuNavigation-logo-box" onClick={onClick}>
					<a href="/#home" className="menuNavigation-logo">
						<Image className="menuNavigation-logo-img animate__animated" src={logo}></Image>
					</a>
				</div>
				<Nav className="menuNavigation-box" defaultActiveKey="1" as="ul">
					<Nav.Item as="li">
						<Nav.Link
							className="menuNavigation-link animate__animated animate__fadeInDown"
							href="/#about"
						>
							Компания
						</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link
							className="menuNavigation-link animate__animated animate__fadeInDown"
							href="/#work"
						>
							Галерая робiт
						</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link
							className="menuNavigation-link animate__animated animate__fadeInDown"
							href="/#partners"
						>
							Партнери
						</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link
							className="menuNavigation-link animate__animated animate__fadeInDown"
							href="/#materials"
						>
							Матерiали
						</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link
							className="menuNavigation-link animate__animated animate__fadeInDown"
							href="/#contacts"
						>
							Контакти
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</div>
		</section>
	);
}

export default MenuNavigation;
