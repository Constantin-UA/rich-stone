//import Card from 'react-bootstrap/Card';

import './materialCard.scss';

function MaterialCard({ cardImg, cardTitle = 'Simple' }) {
	return (
		<div className="card">
			<img className="card-img" src={cardImg} alt="bg" />
			<div className="card-body">
				<div className="card-title">{cardTitle}</div>
			</div>
		</div>
	);
}

export default MaterialCard;
