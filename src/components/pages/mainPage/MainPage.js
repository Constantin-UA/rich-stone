//import component
import MenuNavigation from '../../menuNavigation/MenuNavigation';
import Image from 'react-bootstrap/Image';
import Bricks from '../../../assets/bg.jpg';
import Home from '../../home/Home';
import Work from '../../work/Work';
import Partnership from '../../partnership/Partnership';
import About from '../../about/About';
import Materials from '../../materials/Materials';
//CSS
import './mainPage.scss';
import Contacts from '../../contacts/Contacts';

const MainPage = () => {
	//Render MainPage
	return (
		<div className="mainPage">
			{/* <Image className="mainPage-bg" alt="bg" src={Bricks} /> */}
			<MenuNavigation />
			<Partnership />
			{/* 					
						<Home />
			<Work />
			<About />
			<Materials />
			<Contacts /> */}
		</div>
	);
};
export default MainPage;
