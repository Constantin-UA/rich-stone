//import component
import { useEffect, useState } from 'react';
import OffNav from '../../offNav/OffNav';
import MenuNavigation from '../../menuNavigation/MenuNavigation';
import Home from '../../home/Home';
import Work from '../../work/Work';
import Partnership from '../../partnership/Partnership';
import About from '../../about/About';
import Materials from '../../materials/Materials';
import Contacts from '../../contacts/Contacts';
import Spiner from '../../spiner/Spiner';
//CSS
import './mainPage.scss';

const MainPage = () => {
	const [scrollY, setScrollY] = useState(0);
	useEffect(() => {
		const handleScroll = (event) => {
			setScrollY(window.scrollY);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const [show, setShow] = useState(false);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(false);
	}, []);
	//Render MainPage
	const view = loading ? <Spiner /> : <View show={show} setShow={setShow} scrollY={scrollY} />;
	return <div className="mainPage">{view}</div>;
};
function View({ scrollY, show, setShow }) {
	return (
		<>
			<OffNav show={show} setShow={setShow} />
			<MenuNavigation show={setShow} />
			<Home data={scrollY} />
			<About data={scrollY} />
			<Work data={scrollY} />
			<Partnership data={scrollY} />
			<Materials data={scrollY} />
			<Contacts data={scrollY} />
		</>
	);
}
export default MainPage;
