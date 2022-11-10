//import component
import MenuNavigation from '../../menuNavigation/MenuNavigation';
import Image from 'react-bootstrap/Image';
import Bricks from '../../../assets/bg.jpg';
import Home from '../../home/Home';
import Work from '../../work/Work';
//CSS
import './mainPage.scss';

const MainPage = () => {
	//Render MainPage
	return (
		<div className="mainPage">
			<Image className="mainPage-bg" width={150} height={150} alt="lol" src={Bricks} />
			<MenuNavigation />
			<Home />
			<Work />
		</div>
	);
};
export default MainPage;
