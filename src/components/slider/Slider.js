import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import { useToggler } from '../hook/useToggler.hook';
//img import
//bathroom
import B_D_1 from '../../assets/work/desktop/bathroom/Desktop-1.png';
import B_D_2 from '../../assets/work/desktop/bathroom/Desktop-2.png';
import B_D_3 from '../../assets/work/desktop/bathroom/Desktop-3.png';
import B_M_1 from '../../assets/work/mobile/bathroom/Mobile-1.jpg';
import B_M_2 from '../../assets/work/mobile/bathroom/Mobile-2.jpg';
import B_M_3 from '../../assets/work/mobile/bathroom/Mobile-3.jpg';
import B_T_1 from '../../assets/work/mobile/bathroom/Tablet-1.jpg';
import B_T_2 from '../../assets/work/mobile/bathroom/Tablet-2.jpg';
import B_T_3 from '../../assets/work/mobile/bathroom/Tablet-3.jpg';
//flors
import F_D_1 from '../../assets/work/desktop/flors/Desktop-1.png';
import F_D_2 from '../../assets/work/desktop/flors/Desktop-2.png';
import F_D_3 from '../../assets/work/desktop/flors/Desktop-3.png';
import F_M_1 from '../../assets/work/mobile/flors/Mobile-1.png';
import F_M_2 from '../../assets/work/mobile/flors/Mobile-2.png';
import F_M_3 from '../../assets/work/mobile/flors/Mobile-3.png';
import F_T_1 from '../../assets/work/mobile/flors/Tablet-1.png';
import F_T_2 from '../../assets/work/mobile/flors/Tablet-2.png';
import F_T_3 from '../../assets/work/mobile/flors/Tablet-3.png';
//sters
import S_D_1 from '../../assets/work/desktop/sters/Desktop-1.png';
import S_D_2 from '../../assets/work/desktop/sters/Desktop-2.png';
import S_D_3 from '../../assets/work/desktop/sters/Desktop-3.png';
import S_M_1 from '../../assets/work/mobile/sters/Mobile-1.png';
import S_M_2 from '../../assets/work/mobile/sters/Mobile-2.png';
import S_M_3 from '../../assets/work/mobile/sters/Mobile-3.png';
import S_T_1 from '../../assets/work/mobile/sters/Tablet-1.png';
import S_T_2 from '../../assets/work/mobile/sters/Tablet-2.png';
import S_T_3 from '../../assets/work/mobile/sters/Tablet-3.png';
//stoleshnica
import St_D_1 from '../../assets/work/desktop/stoleshnichi/Desktop-1.png';
import St_D_2 from '../../assets/work/desktop/stoleshnichi/Desktop-2.png';
import St_D_3 from '../../assets/work/desktop/stoleshnichi/Desktop-3.png';
import St_M_1 from '../../assets/work/mobile/stoleshnichi/Mobile-1.png';
import St_M_2 from '../../assets/work/mobile/stoleshnichi/Mobile-2.png';
import St_M_3 from '../../assets/work/mobile/stoleshnichi/Mobile-3.png';
import St_T_1 from '../../assets/work/mobile/stoleshnichi/Tablet-1.png';
import St_T_2 from '../../assets/work/mobile/stoleshnichi/Tablet-2.png';
import St_T_3 from '../../assets/work/mobile/stoleshnichi/Tablet-3.png';
//tables
import T_D_1 from '../../assets/work/desktop/tables/Desktop-1.png';
import T_D_2 from '../../assets/work/desktop/tables/Desktop-2.png';
import T_D_3 from '../../assets/work/desktop/tables/Desktop-3.png';
import T_M_1 from '../../assets/work/mobile/tables/Mobile-1.png';
import T_M_2 from '../../assets/work/mobile/tables/Mobile-2.png';
import T_M_3 from '../../assets/work/mobile/tables/Mobile-3.png';
import T_T_1 from '../../assets/work/mobile/tables/Tablet-1.png';
import T_T_2 from '../../assets/work/mobile/tables/Tablet-2.png';
import T_T_3 from '../../assets/work/mobile/tables/Tablet-3.png';
//import scss
import './slider.scss';

function CarouselFade({ data }) {
	const [slidesD, setSlides] = useState([
		B_D_1,
		B_D_2,
		B_D_3,
		F_D_1,
		F_D_2,
		F_D_3,
		S_D_1,
		S_D_2,
		S_D_3,
		St_D_1,
		St_D_2,
		St_D_3,
		T_D_1,
		T_D_2,
		T_D_3,
	]);
	const [slidesM, setSlidesM] = useState([
		B_M_1,
		B_M_2,
		B_M_3,
		F_M_1,
		F_M_2,
		F_M_3,
		S_M_1,
		S_M_2,
		S_M_3,
		St_M_1,
		St_M_2,
		St_M_3,
		T_M_1,
		T_M_2,
		T_M_3,
	]);
	const [slidesT, setSlidesT] = useState([
		B_T_1,
		B_T_2,
		B_T_3,
		F_T_1,
		F_T_2,
		F_T_3,
		S_T_1,
		S_T_2,
		S_T_3,
		St_T_1,
		St_T_2,
		St_T_3,
		T_T_1,
		T_T_2,
		T_T_3,
	]);
	const { togglerToSlider } = useToggler();

	useEffect(() => {
		const about = document.querySelector('.about').clientHeight;
		const work = document.querySelector('.work').clientHeight;
		const min = about + work / 2;
		const max = about + work + work / 2;

		if (data >= min && data <= max) {
			togglerToSlider(
				'.carousel',
				['animate__animated', 'animate__zoomOut'],
				['animate__animated', 'animate__zoomIn']
			);
		} else {
			togglerToSlider(
				'.carousel',
				['animate__animated', 'animate__zoomIn'],
				['animate__animated', 'animate__zoomOut']
			);
		}
	}, [data, togglerToSlider]);
	return (
		<Carousel controls={true} indicators={false} interval={8000} fade>
			{slidesD.map((src, idx) => {
				return (
					<Carousel.Item key={idx}>
						<picture>
							<source media="(max-width: 536px)" srcSet={slidesM[idx]} />
							<source media="(max-width: 769px)" srcSet={slidesT[idx]} />
							<img className="home-bg" src={src} alt="bg" />
						</picture>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
}

export default CarouselFade;
