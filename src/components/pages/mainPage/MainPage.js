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
	const [scrollY, setScrollY] = useState(0);
	useEffect(() => {
		const handleScroll = (event) => {
			//let clientHeight = document.querySelector('.mainPage').clientHeight;
			setScrollY(window.scrollY);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	//const [windowPosition, setWindowPosition] = useState('home');
	//const [scrollyy, setScrollyy] = useState(0);
	/*	useEffect(() => {
		console.log(windowPosition);
	}, [windowPosition]);
	useEffect(() => {
		const handleScroll = (event) => {
			setScrollyy(window.scrollY);
			 let offsetHeight = document.querySelector('.mainPage').offsetHeight;
			let clientHeight = document.querySelector('.mainPage').clientHeight;
			let scrollY = window.scrollY;

			console.log('client', clientHeight);
			console.log('offset', offsetHeight);
			 */ //4800px
	/*
			if (scrollY === 0) {
				setWindowPosition('home');
			} else if (scrollY > 0 && scrollY < clientHeight / 6) {
				setWindowPosition('about');
			} else if (scrollY > clientHeight / 6 && scrollY < (clientHeight / 6) * 2) {
				setWindowPosition('work');
			} else if (scrollY > (clientHeight / 6) * 2 && scrollY < (clientHeight / 6) * 3) {
				setWindowPosition('partners');
			} else if (scrollY > (clientHeight / 6) * 3 && scrollY < (clientHeight / 6) * 4) {
				setWindowPosition('materials');
			} else if (scrollY > (clientHeight / 6) * 4 && scrollY < (clientHeight / 6) * 5) {
				setWindowPosition('contacts');
			}
			
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);*/
	//Render MainPage
	return (
		<div className="mainPage">
			<MenuNavigation />
			<Home data={scrollY} />
			<About data={scrollY} />
			<Work data={scrollY} />
			<Partnership data={scrollY} />
			<Materials data={scrollY} />
			<Contacts data={scrollY} />
		</div>
	);
};
export default MainPage;
