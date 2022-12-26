import './materialCard.scss';

function MaterialCard({ cardImg, cardTitle = 'Simple' }) {
	return (
		<div className="materialCard">
			<img className="materialCard-img" src={cardImg} alt="bg" />
			<div className="materialCard-wrapper">
				<div className="materialCard-title">{cardTitle}</div>
			</div>
		</div>
	);
}

export default MaterialCard;
