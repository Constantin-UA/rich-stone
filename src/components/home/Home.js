import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useToggler } from '../hook/useToggler.hook';
import { useState } from 'react';
import Image from 'react-bootstrap/Image';

import logoR from '../../assets/logo/R117x159.png';
import logoS from '../../assets/logo/S110x152.png';
import bg1 from '../../assets/home/Desktop-1-min.png';
import bg2 from '../../assets/home/Desktop-2-min.png';
import bg3 from '../../assets/home/Desktop-3-min.png';
import bgM1 from '../../assets/home/Mobile-1-min.png';
import bgM2 from '../../assets/home/Mobile-2-min.png';
import bgM3 from '../../assets/home/Mobile-3-min.png';

import './home.scss';

function Home({ data }) {
	const [start, setStart] = useState(true);
	const [background, setBackground] = useState(
		<picture>
			<source media="(max-width: 756px)" srcSet={bgM1} />
			<img className="home-bg animate__animated animate__fadeIn" src={bg1} alt="bg" />
		</picture>
		//<Image className="home-bg animate__animated animate__fadeIn" src={bg1} alt="bg" />
	);
	const [position, setPositon] = useState(0);
	const { toggler } = useToggler();

	useEffect(() => {
		if (data >= 0 && data <= 400) {
			toggler('.home-logo-R-img', 'animate__fadeOutLeftBig', 'animate__fadeInLeftBig');
			toggler('.home-logo-S-img', 'animate__fadeOutRightBig', 'animate__fadeInRightBig');
			toggler('.home-logo-box', 'animate__zoomOut', 'animate__zoomIn');
			toggler('.home-text', 'animate__fadeOutUpBig', 'animate__fadeInUpBig');
			setStart(true);
		} else {
			toggler('.home-logo-R-img', 'animate__fadeInLeftBig', 'animate__fadeOutLeftBig');
			toggler('.home-logo-S-img', 'animate__fadeInRightBig', 'animate__fadeOutRightBig');
			toggler('.home-logo-box', 'animate__zoomIn', 'animate__zoomOut');
			toggler('.home-text', 'animate__fadeInUpBig', 'animate__fadeOutUpBig');
			setStart(false);
		}
	}, [data]);

	useEffect(() => {
		const changeBg = setInterval(() => {
			if (start) {
				if (position === 0) {
					setBackground(
						<picture>
							<source media="(max-width: 756px)" srcSet={bgM2} />
							<img
								className="home-bg animate__animated animate__fadeIn"
								src={bg2}
								alt="bg"
								key={position}
							/>
						</picture>
					);
					setPositon(1);
				} else if (position === 1) {
					setBackground(
						<picture>
							<source media="(max-width: 756px)" srcSet={bgM3} />
							<img
								className="home-bg animate__animated animate__fadeIn"
								src={bg3}
								alt="bg"
								key={position}
							/>
						</picture>
					);
					setPositon(2);
				} else if (position === 2) {
					setBackground(
						<picture>
							<source media="(max-width: 756px)" srcSet={bgM1} />
							<img
								className="home-bg animate__animated animate__fadeIn"
								src={bg1}
								alt="bg"
								key={position}
							/>
						</picture>
					);
					setPositon(0);
				}
			}
		}, 8000);
		return () => {
			clearInterval(changeBg);
		};
	}, [position, start]);

	useEffect(() => {
		const fadeOutBg = setTimeout(() => {
			toggler('.home-bg', 'animate__fadeIn', 'animate__fadeOut');
		}, 7500);
		return () => {
			clearTimeout(fadeOutBg);
		};
	}, [background]);
	return (
		<section id="home" className="home">
			{background}
			<Container className="home-wrapper">
				<div className="home-logo-box animate__animated">
					<div className="home-logo-R">
						<Image className="home-logo-R-img animate__animated" src={logoR}></Image>
					</div>
					<div className="home-logo-S">
						<Image className="home-logo-S-img animate__animated" src={logoS}></Image>
					</div>
				</div>
				<h1 className="home-text animate__animated">
					Вся розкіш та шляхетність натурального каменю!
				</h1>
			</Container>
		</section>
	);
}

export default Home;
