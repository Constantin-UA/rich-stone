import { Container } from 'react-bootstrap';
import './home.scss';
function Home() {
	return (
		<section id="home" className="home">
			{/* <Image className="mainPage-bg" alt="bg" src={Bricks} /> */}
			<Container className="home-wrapper">
				<div className="home-logo-box">
					<h1 className="home-Rich">Rich</h1>
					<h2 className="home-Stone">Stone</h2>
				</div>
				<p className="home-text">Вся розкіш та шляхетність натурального каменю!</p>
			</Container>
		</section>
	);
}
export default Home;
