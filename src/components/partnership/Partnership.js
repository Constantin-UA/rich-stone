import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import atem from '../../assets/partner/atem-min.png';
import avant from '../../assets/partner/avant-min.png';
import bienstone from '../../assets/partner/bienstone-min.png';
import caesa from '../../assets/partner/caesa-min.png';
import corian from '../../assets/partner/corian-min.png';
import hanex from '../../assets/partner/hanex-min.png';
import hanstone from '../../assets/partner/hanstone-min.png';
import himacs from '../../assets/partner/himacs-min.png';
import neomarm from '../../assets/partner/neomarm-min.png';
import quartz from '../../assets/partner/quartz-min.png';
import santa from '../../assets/partner/santa-min.png';
import silestone from '../../assets/partner/silestone-min.png';
import staron from '../../assets/partner/staron-min.png';
import radianz from '../../assets/partner/radianz-min.png';
import tristone from '../../assets/partner/tristone-min.png';
import vicostone from '../../assets/partner/vicostone-min.png';

import { useToggler } from '../hook/useToggler.hook';
import './partnership.scss';
const dataParntnerImg = [
	radianz,
	hanex,
	hanstone,
	vicostone,
	atem,
	bienstone,
	avant,
	neomarm,
	corian,
	tristone,
	silestone,
	himacs,
	staron,
	santa,
	caesa,
	quartz,
];
const dataParNames = [
	'radianz',
	'hanex',
	'hanstone',
	'vicostone',
	'atem',
	'bienstone',
	'avant',
	'neomarm',
	'corian',
	'tristone',
	'silestone',
	'himacs',
	'staron',
	'santa',
	'caesa',
	'quartz',
];

function Partnership({ data }) {
	const { toggler } = useToggler();
	useEffect(() => {
		const home = document.querySelector('.home').clientHeight;
		const about = document.querySelector('.about').clientHeight;
		const work = document.querySelector('.work').clientHeight;
		const partners = document.querySelector('.partnership').clientHeight;

		const min = home + about + work / 2;
		const max = home + about + work + partners / 2;

		if (data >= min && data <= max) {
			toggler('.partnership-box', 'animate__zoomOut', 'animate__zoomIn');
			toggler('.partnership-icon', 'animate__zoomOut', 'animate__zoomIn', true);
		} else {
			toggler('.partnership-box', 'animate__zoomIn', 'animate__zoomOut');
			toggler('.partnership-icon', 'animate__zoomIn', 'animate__zoomOut', true);
		}
	}, [data]);

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
