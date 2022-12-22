//import component
import { useEffect, useState, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import Spiner from '../../spiner/Spiner';
import Home from '../../home/Home';
import About from '../../about/About';
//data
import { dataImg } from '../../../data';
//CSS
import './mainPage.scss';

const Materials = lazy(() => import('../../materials/Materials'));
const Partnership = lazy(() => import('../../partnership/Partnership'));
const Contacts = lazy(() => import('../../contacts/Contacts'));
const Work = lazy(() => import('../../work/Work'));
const MainPage = ({ dataLang }) => {
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

	//Render MainPage

	return (
		<>
			<Helmet>
				<link rel="apple-touch-icon" sizes="57x57" href="./favicons/apple-icon-57x57.png" />
				<link rel="apple-touch-icon" sizes="60x60" href="./favicons/apple-icon-60x60.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="./favicons/apple-icon-72x72.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="./favicons/apple-icon-76x76.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="./favicons/apple-icon-114x114.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="./favicons/apple-icon-120x120.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="./favicons/apple-icon-144x144.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="./favicons/apple-icon-152x152.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="./favicons/apple-icon-180x180.png" />
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="./favicons/android-icon-192x192.png"
				/>
				<link rel="icon" type="image/png" sizes="32x32" href="./favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="96x96" href="./favicons/favicon-96x96.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="./favicons/favicon-16x16.png" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="./favicons/ms-icon-144x144.png" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#ffffff" />
			</Helmet>
			<div className="mainPage">
				<Home scrollY={scrollY} dataLang={dataLang} />
				<About scrollY={scrollY} dataLang={dataLang} />
				<Suspense fallback={<Spiner />}>
					<Work scrollY={scrollY} dataLang={dataLang} images={dataImg.images} />
					<Partnership
						scrollY={scrollY}
						dataLang={dataLang}
						dataParntnerImg={dataImg.dataParntnerImg}
					/>
					<Contacts scrollY={scrollY} dataLang={dataLang} />
				</Suspense>
			</div>
		</>
	);
};

export default MainPage;
/* <Materials scrollY={scrollY} dataLang={dataLang} materialImg={dataImg.materialImg} /> */
