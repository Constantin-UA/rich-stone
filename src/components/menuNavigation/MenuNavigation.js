import Nav from 'react-bootstrap/Nav';
import './menuNavigation.scss';
function MenuNavigation() {
	return (
		<section className="menuNavigation">
			<div className="menuNavigation-wrapper">
				<div className="menuNavigation-logo-box">
					<a href="/#home" className="menuNavigation-logo">
						Rich Stone
					</a>
				</div>
				<Nav className="menuNavigation-main" defaultActiveKey="1" as="ul">
					<Nav.Item as="li">
						<Nav.Link className="menuNavigation-link" href="/#about">
							Компания
						</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link className="menuNavigation-link" href="/#work">
							Галерая робiт
						</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link className="menuNavigation-link" href="/#partners">
							Партнери
						</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link className="menuNavigation-link" href="/#contacts">
							Контакти
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</div>
		</section>
	);
}

export default MenuNavigation;
