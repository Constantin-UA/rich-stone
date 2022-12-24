import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

import './sliderPage.scss';

function SliderPage({ slides, title, changePage }) {
	useEffect(() => {
		changePage('slider');
	});

	return (
		<>
			<Helmet>
				<title>Rich Stone - {title.toLowerCase()}</title>
			</Helmet>
			<div className="sliderPage">
				<Container className="sliderPage-wrapper">
					<Carousel
						className="animate__animated animate__zoomIn"
						controls={true}
						indicators={true}
						interval={24000}
						fade
					>
						{slides.map((src, idx) => {
							return (
								<Carousel.Item key={idx}>
									<img className="slide-bg" src={src} alt="bg" />
								</Carousel.Item>
							);
						})}
					</Carousel>
				</Container>
			</div>
		</>
	);
}

export default SliderPage;
