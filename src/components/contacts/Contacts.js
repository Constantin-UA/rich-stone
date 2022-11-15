import './contacts.scss';

function Contacts() {
	return (
		<section className="contacts">
			<div className="contacts-wrapper">
				<div className="contacts-box">
					<div className="contacts-logo">Logo</div>
					<h6 className="contacts-title">Contacts</h6>
					<div className="contacts-phone-box">
						<div className="contacts-phone-element">
							<div className="contacts-icon">icon</div>
							<div className="contacts-phone">+380999999999</div>
						</div>
						<div className="contacts-phone-element">
							<div className="contacts-icon">icon</div>
							<div className="contacts-phone">+380999999999</div>
						</div>
						<div className="contacts-phone-element">
							<div className="contacts-icon">icon</div>
							<div className="contacts-phone">+380999999999</div>
						</div>
					</div>
				</div>
				<div className="contacts-map">map</div>
			</div>
		</section>
	);
}

export default Contacts;
