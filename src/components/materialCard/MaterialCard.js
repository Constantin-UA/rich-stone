//import Card from 'react-bootstrap/Card';

import './materialCard.scss';

function MaterialCard({
	cardImg,
	cardTitle = 'Simple',
	cardDescr = 'Some text for card description.',
}) {
	return (
		<div className="card">
			<img className="card-img" src={cardImg} alt="bg" />
			<div className="card-body">
				<div className="card-title">{cardTitle}</div>
				{/* 				<div className="card-text">
					<p>{cardDescr.V}</p>
					<p>{cardDescr.M}</p>
					<p>{cardDescr.Z}</p>
					<p>{cardDescr.W}</p>
				</div> */}
			</div>
		</div>
	);
}

export default MaterialCard;
