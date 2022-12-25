import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
//import image
import errorImg from '../../../assets/error/1.png';
// scss import
import './errorPage.scss';

function ErrorPage() {
	return (
		<section className="errorPage">
			<Image className="errorPage-img" alt="bg" src={errorImg} />
			<h1 className="errorPage-title">Щось трапилось!</h1>
			<p className="errorPage-text">Звернiться до творця.</p>
			<Link to="/" className="errorPage-link">
				Go Back
			</Link>
		</section>
	);
}

export default ErrorPage;
