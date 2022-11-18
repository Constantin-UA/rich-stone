import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './home.scss';
const toggleOn = (elem, remove, add) => {
	document.querySelector(`${elem}`).classList.remove(`${remove}`);
	document.querySelector(`${elem}`).classList.add(`${add}`);
};
const toggleOff = (elem, remove, add) => {
	document.querySelector(`${elem}`).classList.remove(`${remove}`);
	document.querySelector(`${elem}`).classList.add(`${add}`);
};
function Home({ data }) {
	useEffect(() => {
		if (data === 'home') {
			toggleOn('.home-Rich', 'animate__fadeOutLeftBig', 'animate__fadeInLeftBig');
			toggleOn('.home-Stone', 'animate__fadeOutRightBig', 'animate__fadeInRightBig');
			toggleOn('.home-text', 'animate__fadeOutUpBig', 'animate__fadeInUpBig');
		} else {
			toggleOff('.home-Rich', 'animate__fadeInLeftBig', 'animate__fadeOutLeftBig');
			toggleOff('.home-Stone', 'animate__fadeInRightBig', 'animate__fadeOutRightBig');
			toggleOff('.home-text', 'animate__fadeInUpBig', 'animate__fadeOutUpBig');
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
