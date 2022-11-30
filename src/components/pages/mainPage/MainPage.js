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

//CSS
import './mainPage.scss';

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
	useEffect(() => {
		console.log(scrollY);
	}, [scrollY]);
	const [show, setShow] = useState(false);
	//Render MainPage
	return (
		<div className="mainPage">
			<OffNav show={show} setShow={setShow} />
			<MenuNavigation show={setShow} />
			<Home data={scrollY} />
			<About data={scrollY} />
			<Work data={scrollY} />
			{/*
			<Partnership data={scrollY} />
			<Materials data={scrollY} />
			<Contacts data={scrollY} /> */}
		</div>
	);
};
export default MainPage;
