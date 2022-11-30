import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useToggler } from '../hook/useToggler.hook';
import { useState } from 'react';
import Image from 'react-bootstrap/Image';

import logoR from '../../assets/home/R.png';
import logoS from '../../assets/home/S.png';

import './home.scss';

function Home({ data }) {
	const [bgTitles, setBgTitles] = useState(['img-1', 'img-2', 'img-3', 'img-4', 'img-5']);
	const [backClass, setBackClass] = useState('home img-1');
	const [count, setCount] = useState(0);
	const { toggler } = useToggler();

	useEffect(() => {
		if (data >= 0 && data <= 400) {
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
	}, [data]);

	useEffect(() => {
		console.log('effect home bg');
		const changeBg = setInterval(() => {
			setBackClass('home ' + bgTitles[count]);
			if (count < 4) {
				setCount(count + 1);
			} else {
				setCount(0);
			}
		}, 5000);
		return () => {
			clearInterval(changeBg);
		};
	}, []);
	return (
		<section id="home" className="home">
			<div className={backClass}></div>
			<Container className="home-wrapper">
				<div className="home-logo-box animate__animated">
					{/* <h1 className="home-Rich animate__animated">Rich</h1>
					<h2 className="home-Stone animate__animated">Stone</h2> */}
					<div className="home-logo-R">
						<Image className="home-logo-R-img animate__animated" src={logoR}></Image>
					</div>
					<div className="home-logo-S">
						<Image className="home-logo-S-img animate__animated" src={logoS}></Image>
					</div>
				</div>
				<p className="home-text animate__animated">
					Вся розкіш та шляхетність натурального каменю!
				</p>
			</Container>
		</section>
	);
}
export default Home;
