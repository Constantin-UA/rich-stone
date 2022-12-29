import Modal from 'react-bootstrap/Modal';

import './modalMaterial.scss';

function ModalMaterial({ show, handleClose, cardTitle, cardDescription }) {
	return (
		<Modal centered={true} show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{cardTitle}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>{cardDescription}</p>
			</Modal.Body>
		</Modal>
	);
}
export default ModalMaterial;
