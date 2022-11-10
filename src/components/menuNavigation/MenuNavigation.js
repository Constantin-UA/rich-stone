import Nav from 'react-bootstrap/Nav';
import './menuNavigation.scss';
function MenuNavigation() {
	return (
		<Nav className="MenuNavigation" defaultActiveKey="/home" as="ul" fill>
			<Nav.Item as="li">
				<Nav.Link href="/home">RICH STONE</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link eventKey="link-1">WORKS</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link eventKey="link-2">PARTNERS</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link eventKey="link-3">ABOUT</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link eventKey="link-4">MATERIALS</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link eventKey="link-5">CONTACTS</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}

export default MenuNavigation;
