import ModalMaterial from '../modalMaterial/ModalMaterial';

import { useState } from 'react';

import './materialCard.scss';

function MaterialCard({ cardImg, cardTitle = 'Simple', cardDescription }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<div className="materialCard" onClick={handleShow}>
				<img className="materialCard-img" src={cardImg} alt="bg" />
				<div className="materialCard-wrapper">
					<div className="materialCard-title">{cardTitle}</div>
				</div>
			</div>
			<ModalMaterial
				show={show}
				handleClose={handleClose}
				cardTitle={cardTitle}
				cardDescription={cardDescription}
			/>
		</>
	);
}

export default MaterialCard;
