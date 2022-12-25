import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import { useToggler } from '../hook/useToggler.hook';
import './partnership.scss';

function Partnership({ scrollY, dataLang, dataParntnerImg }) {
	const { toggler } = useToggler();
	useEffect(() => {
		const about = document.querySelector('.about').clientHeight;
		const work = document.querySelector('.work').clientHeight;
		const partners = document.querySelector('.partnership').clientHeight;
		const min = about + work;
		const max = min + partners + partners / 2;
		if (scrollY >= min && scrollY <= max) {
			toggler('.partnership-box', 'animate__zoomOut', 'animate__zoomIn');
			toggler('.partnership-icon', 'animate__zoomOut', 'animate__zoomIn', true);
		} else {
			toggler('.partnership-box', 'animate__zoomIn', 'animate__zoomOut');
			toggler('.partnership-icon', 'animate__zoomIn', 'animate__zoomOut', true);
		}
	}, [scrollY, toggler]);

	return (
		<section id="partners" className="partnership">
			<Container className="partnership-wrapper">
				<div className="partnership-box animate__animated">
					{dataParntnerImg.map((element, idx) => (
						<Image
							className="partnership-icon animate__animated"
							alt={idx}
							key={idx}
							src={element}
						/>
					))}
				</div>
			</Container>
		</section>
	);
}

export default Partnership;
