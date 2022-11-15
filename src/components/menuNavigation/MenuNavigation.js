import Nav from 'react-bootstrap/Nav';
import './menuNavigation.scss';
function MenuNavigation() {
	return (
		<section className="menuNavigation">
			<div className="menuNavigation-wrapper">
				<div className="menuNavigation-logo-box">
					<div className="menuNavigation-logo">Rich Stone</div>
				</div>
				<Nav className="menuNavigation-main" defaultActiveKey="/home" as="ul">
					<Nav.Item as="li">
						<Nav.Link className="menuNavigation-link" href="/home">
							About
						</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link className="menuNavigation-link" eventKey="link-2">
							Partners
						</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li">
						<Nav.Link className="menuNavigation-link" eventKey="link-3">
							Contacts
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</div>
		</section>
	);
}

export default MenuNavigation;
