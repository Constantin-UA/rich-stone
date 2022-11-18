import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import BG from '../../assets/partner/bg.jpg';
import atem from '../../assets/partner/atem.png';
import avant from '../../assets/partner/avant.png';
import bienstone from '../../assets/partner/bienstone.png';
import caesa from '../../assets/partner/caesa.png';
import corian from '../../assets/partner/corian.png';
import hanex from '../../assets/partner/hanex.png';
import hanstone from '../../assets/partner/hanstone.png';
import himacs from '../../assets/partner/himacs.png';
import neomarm from '../../assets/partner/neomarm.png';
import quartz from '../../assets/partner/quartz.png';
import santa from '../../assets/partner/santa.png';
import silestone from '../../assets/partner/silestone.png';
import staron from '../../assets/partner/staron.png';
import stone from '../../assets/partner/stone.png';
import teksolan from '../../assets/partner/teksolan.png';
import tekstone from '../../assets/partner/tekstone.png';
import radianz from '../../assets/partner/radianz.png';

import tristone from '../../assets/partner/tristone.png';
import vicostone from '../../assets/partner/vicostone.png';

import './partnership.scss';
const dataParntnerImg = [
	radianz,
	hanex,
	hanstone,
	vicostone,
	atem,
	bienstone,
	stone,
	avant,
	tekstone,
	neomarm,
	corian,
	tristone,
	silestone,
	himacs,
	teksolan,
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
	'stone',
	'avant',
	'tekstone',
	'neomarm',
	'corian',
	'tristone',
	'silestone',
	'himacs',
	'teksolan',
	'staron',
	'santa',
	'caesa',
	'quartz',
];
const toggleOn = (elem, remove, add) => {
	document.querySelector(`${elem}`).classList.remove(`${remove}`);
	document.querySelector(`${elem}`).classList.add(`${add}`);
};
const toggleOff = (elem, remove, add) => {
	document.querySelector(`${elem}`).classList.remove(`${remove}`);
	document.querySelector(`${elem}`).classList.add(`${add}`);
};
function Partnership({ data }) {
	useEffect(() => {
		if (data === 'partners') {
			toggleOn('.partnership-title', 'animate__zoomOut', 'animate__zoomIn');
			toggleOn('.partnership-box', 'animate__zoomOut', 'animate__zoomIn');
			document.querySelectorAll('.partnership-icon').forEach((elem) => {
				elem.classList.remove('animate__zoomOut');
				elem.classList.add('animate__zoomIn');
			});
		} else {
			document.querySelectorAll('.partnership-icon').forEach((elem) => {
				elem.classList.remove('animate__zoomIn');
				elem.classList.add('animate__zoomOut');
			});
			toggleOff('.partnership-title', 'animate__zoomIn', 'animate__zoomOut');
			toggleOff('.partnership-box', 'animate__zoomIn', 'animate__zoomOut');
		}
	}, [data]);

	return (
		<section id="partners" className="partnership">
			<Image className="partnership-bg" alt="bg" src={BG} />
			<Container className="partnership-wrapper">
				<h3 className="partnership-title animate__animated">Партнери</h3>
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
