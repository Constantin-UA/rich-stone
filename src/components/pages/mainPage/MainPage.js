//import component
import MenuNavigation from '../../menuNavigation/MenuNavigation';
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
			<MenuNavigation />
			<Home />
			<About />
			<Work />
			<Partnership />
			<Materials />
			<Contacts />
		</div>
	);
};
export default MainPage;
