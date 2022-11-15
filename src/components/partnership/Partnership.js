import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
/* import BG from '../../assets/1.jpg'; */
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
	atem,
	avant,
	bienstone,
	caesa,
	corian,
	hanex,
	hanstone,
	himacs,
	neomarm,
	quartz,
	santa,
	silestone,
	staron,
	stone,
	teksolan,
	tristone,
	vicostone,
	tekstone,
	radianz,
];
const dataParntnerImgNames = [
	'atem',
	'avant',
	'bienstone',
	'caesa',
	'corian',
	'hanex',
	'hanstone',
	'himacs',
	'neomarm',
	'quartz',
	'santa',
	'silestone',
	'staron',
	'stone',
	'teksolan',
	'tristone',
	'vicostone',
	'tekstone',
	'radianz',
];
function Partnership() {
	return (
		<section className="partnership">
			{/* 			<Image className="partnership-bg" alt="bg" src={BG} /> */}
			<Container className="partnership-wrapper">
				<h3 className="partnership-title">PARTNERSHIP</h3>
				<div className="partnership-box">
					{dataParntnerImg.map((element, idx) => (
						<Image
							className={`partnership-icon partnership-icon-${dataParntnerImgNames[idx]}`}
							alt={dataParntnerImgNames[idx]}
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
