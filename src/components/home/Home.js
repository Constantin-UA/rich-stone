import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useToggler } from '../hook/useToggler.hook';

//logo
import logoR_D from '../../assets/logo/R_115x160_Desktop.webp';
import logoR_M from '../../assets/logo/R_100x140_Mobile.webp';
import logoS_D from '../../assets/logo/S_115x160_Desktop.webp';
import logoS_M from '../../assets/logo/S_100x140_Mobile.webp';
//desktop bg
import bgD1 from '../../assets/home/Desktop-1.webp';
//tablet bg
import bgT1 from '../../assets/home/Tablet-1.webp';
//mobile bg
import bgM1 from '../../assets/home/Mobile-1.webp';

import './home.scss';

function Home({ data, scrollY }) {
	const { toggler } = useToggler();

	useEffect(() => {
		if (scrollY >= 0 && scrollY <= 400) {
			toggler('.home-logo-R-img', 'animate__fadeOutLeftBig', 'animate__fadeInLeftBig');
			toggler('.home-logo-S-img', 'animate__fadeOutRightBig', 'animate__fadeInRightBig');
			toggler('.home-logo-box', 'animate__zoomOut', 'animate__zoomIn');
			toggler('.home-text', 'animate__fadeOutUpBig', 'animate__fadeInUpBig');
		} else {
			toggler('.home-logo-R-img', 'animate__fadeInLeftBig', 'animate__fadeOutLeftBig');
			toggler('.home-logo-S-img', 'animate__fadeInRightBig', 'animate__fadeOutRightBig');
			toggler('.home-logo-box', 'animate__zoomIn', 'animate__zoomOut');
			toggler('.home-text', 'animate__fadeInUpBig', 'animate__fadeOutUpBig');
		}
	}, [scrollY, toggler]);

	return (
		<section id="home" className="home">
			<View />
			<Container className="home-wrapper">
				<div className="home-logo-box animate__animated">
					<div className="home-logo-R">
						<picture>
							<source media="(max-width: 426px)" srcSet={logoR_M} />
							<img className="home-logo-R-img animate__animated" src={logoR_D} alt="Rich logo R" />
						</picture>
					</div>
					<div className="home-logo-S">
						<picture>
							<source media="(max-width: 425px)" srcSet={logoS_M} />
							<img className="home-logo-S-img animate__animated" src={logoS_D} alt="Stone logo S" />
						</picture>
					</div>
				</div>
				<h1 className="home-text animate__animated">{data.homeData.text}</h1>
			</Container>
		</section>
	);
}

function View() {
	return (
		<picture className="home-bg-slide home-show">
			<source media="(max-width: 430px)" srcSet={bgM1} />
			<source media="(max-width: 768px)" srcSet={bgT1} />
			<img
				className="home-bg animate__animated animate__fadeIn "
				src={bgD1}
				alt="our works background"
				key="first slide"
			/>
		</picture>
	);
}
export default Home;
