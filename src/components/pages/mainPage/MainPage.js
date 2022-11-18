//import component
import { useEffect, useState } from 'react';
import MenuNavigation from '../../menuNavigation/MenuNavigation';
import Home from '../../home/Home';
import Work from '../../work/Work';
import Partnership from '../../partnership/Partnership';
import About from '../../about/About';
import Materials from '../../materials/Materials';
import Contacts from '../../contacts/Contacts';
import Scroller from '../../scroller/Scroller';

//CSS
import './mainPage.scss';

//lazy load

const MainPage = () => {
	const [windowPosition, setWindowPosition] = useState('home');
	useEffect(() => {
		console.log(windowPosition);
	}, [windowPosition]);
	useEffect(() => {
		const handleScroll = (event) => {
			if (window.scrollY === 0) {
				setWindowPosition('home');
			}
			if (window.scrollY >= 800 && window.scrollY <= 1500) {
				setWindowPosition('about');
			}
			if (window.scrollY >= 1600 && window.scrollY <= 2300) {
				setWindowPosition('work');
			}
			if (window.scrollY >= 2400 && window.scrollY <= 3100) {
				setWindowPosition('partners');
			}
			if (window.scrollY >= 3200 && window.scrollY <= 4000) {
				setWindowPosition('materials');
			}
			if (window.scrollY >= 4100) {
				setWindowPosition('contacts');
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	//Render MainPage
	return (
		<div className="mainPage">
			<MenuNavigation />
			{/* 		<Scroller /> */}
			<Home data={windowPosition} />
			<About data={windowPosition} />
			<Work data={windowPosition} />
			<Partnership data={windowPosition} />
			<Materials data={windowPosition} />
			<Contacts data={windowPosition} />
		</div>
	);
};
export default MainPage;
