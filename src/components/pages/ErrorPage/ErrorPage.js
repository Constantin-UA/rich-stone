import Image from 'react-bootstrap/Image';

//import image
import errorImg from '../../../assets/error/1.png';
// scss import
import './errorPage.scss';

function ErrorPage() {
	return (
		<section className="errorPage">
			<Image className="errorPage-img" alt="bg" src={errorImg} />
			<h1 className="errorPage-title">ERROR!</h1>
			<p className="errorPage-text">Something is wrong.</p>
		</section>
	);
}

export default ErrorPage;
