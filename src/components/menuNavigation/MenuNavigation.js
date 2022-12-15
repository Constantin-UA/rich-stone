import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/logo/LogoAll70x120.png';
import logoS from '../../assets/logo/Frame200x201.webp';
import './menuNavigation.scss';

function MenuNavigation({ show, data }) {
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
							<img
								className="menuNavigation-logo-img animate__animated"
								src={logo}
								alt="background logo Rich Stone"
							/>
						</picture>
					</a>
				</div>
				<Nav className="menuNavigation-box" defaultActiveKey="1" as="ul">
					{data.menuNavText.map((item, idx) => {
						return (
							<Nav.Item as="li" key={idx}>
								<Nav.Link
									className="menuNavigation-link animate__animated animate__fadeInDown"
									href={data.menuNavHref[idx]}
								>
									{item}
								</Nav.Link>
							</Nav.Item>
						);
					})}
				</Nav>
			</div>
		</section>
	);
}

export default MenuNavigation;
