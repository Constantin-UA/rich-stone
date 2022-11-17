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

function Partnership() {
	return (
		<section id="partners" className="partnership">
			<Image className="partnership-bg" alt="bg" src={BG} />
			<Container className="partnership-wrapper">
				<h3 className="partnership-title">Партнери</h3>
				<div className="partnership-box">
					{dataParntnerImg.map((element, idx) => (
						<Image className="partnership-icon" alt={idx} key={idx} src={element} />
					))}
				</div>
			</Container>
		</section>
	);
}

export default Partnership;
