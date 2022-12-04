import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/logo/LogoAll.png';
import logoS from '../../assets/logo/Frame200x201.png';
import './menuNavigation.scss';
function MenuNavigation({ show }) {
	const onClick = (e) => {
		if (document.querySelector('.menuNavigation').offsetWidth < 770) {
			show(true);
		} else {
			window.scrollTo(0, 0);
		}
	};
	return (
		<section className="menuNavigation animate__animated animate__fadeInDown">
			<div className="menuNavigation-wrapper">
				<div className="menuNavigation-logo-box" onClick={onClick}>
					<a href="/#home" className="menuNavigation-logo">
						<picture>
							<source media="(max-width: 756px)" srcSet={logoS} />
							<img className="menuNavigation-logo-img animate__animated" src={logo} alt="bg" />
						</picture>
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
