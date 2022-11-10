import { Container } from 'react-bootstrap';
import './home.scss';

function Home() {
	return (
		<section className="home">
			<Container className="home-wrapper">
				<h1 className="home-header">Rich Stone</h1>
				<p className="home-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam cum
					repellendus qui delectus in! Eum cupiditate itaque neque est.
				</p>
				<button className="home-btn">Lorem, ipsum dolor.</button>
			</Container>
		</section>
	);
}
export default Home;
