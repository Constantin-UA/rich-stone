import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useToggler } from '../hook/useToggler.hook';
import { useState } from 'react';
import './home.scss';

function Home({ data }) {
	const { toggler } = useToggler();

	useEffect(() => {
		if (data >= 0 && data <= 400) {
			toggler('.home-Rich', 'animate__fadeOutLeftBig', 'animate__fadeInLeftBig');
			toggler('.home-Stone', 'animate__fadeOutRightBig', 'animate__fadeInRightBig');
			toggler('.home-text', 'animate__fadeOutUpBig', 'animate__fadeInUpBig');
		} else {
			toggler('.home-Rich', 'animate__fadeInLeftBig', 'animate__fadeOutLeftBig');
			toggler('.home-Stone', 'animate__fadeInRightBig', 'animate__fadeOutRightBig');
			toggler('.home-text', 'animate__fadeInUpBig', 'animate__fadeOutUpBig');
		}
	}, [data]);
	return (
		<section id="home" className="home">
			{/* <Image className="mainPage-bg" alt="bg" src={Bricks} /> */}
			<Container className="home-wrapper">
				<div className="home-logo-box">
					<h1 className="home-Rich animate__animated">Rich</h1>
					<h2 className="home-Stone animate__animated">Stone</h2>
				</div>
				<p className="home-text animate__animated">
					Вся розкіш та шляхетність натурального каменю!
				</p>
			</Container>
		</section>
	);
}
export default Home;
