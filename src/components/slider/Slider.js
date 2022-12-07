import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import { useToggler } from '../hook/useToggler.hook';
//img import
//bathroom
import B_D_1 from '../../assets/work/desktop/bathroom/imagecompressor/Desktop-1-min.png';
import B_D_2 from '../../assets/work/desktop/bathroom/imagecompressor/Desktop-2-min.png';
import B_D_3 from '../../assets/work/desktop/bathroom/imagecompressor/Desktop-3-min.png';
import B_M_1 from '../../assets/work/mobile/bathroom/imagecompressor/Mobile-1-min.png';
import B_M_2 from '../../assets/work/mobile/bathroom/imagecompressor/Mobile-2-min.png';
import B_M_3 from '../../assets/work/mobile/bathroom/imagecompressor/Mobile-3-min.png';
import B_T_1 from '../../assets/work/mobile/bathroom/imagecompressor/Tablet-1-min.png';
import B_T_2 from '../../assets/work/mobile/bathroom/imagecompressor/Tablet-2-min.png';
import B_T_3 from '../../assets/work/mobile/bathroom/imagecompressor/Tablet-3-min.png';
//flors
import F_D_1 from '../../assets/work/desktop/flors/imagecompressor/Desktop-1-min.png';
import F_D_2 from '../../assets/work/desktop/flors/imagecompressor/Desktop-2-min.png';
import F_D_3 from '../../assets/work/desktop/flors/imagecompressor/Desktop-3-min.png';
import F_M_1 from '../../assets/work/mobile/flors/imagecompressor/Mobile-1-min.png';
import F_M_2 from '../../assets/work/mobile/flors/imagecompressor/Mobile-2-min.png';
import F_M_3 from '../../assets/work/mobile/flors/imagecompressor/Mobile-3-min.png';
import F_T_1 from '../../assets/work/mobile/flors/imagecompressor/Tablet-1-min.png';
import F_T_2 from '../../assets/work/mobile/flors/imagecompressor/Tablet-2-min.png';
import F_T_3 from '../../assets/work/mobile/flors/imagecompressor/Tablet-3-min.png';
//sters
import S_D_1 from '../../assets/work/desktop/sters/imagecompressor/Desktop-1-min.png';
import S_D_2 from '../../assets/work/desktop/sters/imagecompressor/Desktop-2-min.png';
import S_D_3 from '../../assets/work/desktop/sters/imagecompressor/Desktop-3-min.png';
import S_M_1 from '../../assets/work/mobile/sters/imagecompressor/Mobile-1-min.png';
import S_M_2 from '../../assets/work/mobile/sters/imagecompressor/Mobile-2-min.png';
import S_M_3 from '../../assets/work/mobile/sters/imagecompressor/Mobile-3-min.png';
import S_T_1 from '../../assets/work/mobile/sters/imagecompressor/Tablet-1-min.png';
import S_T_2 from '../../assets/work/mobile/sters/imagecompressor/Tablet-2-min.png';
import S_T_3 from '../../assets/work/mobile/sters/imagecompressor/Tablet-3-min.png';
//stoleshnica
import St_D_1 from '../../assets/work/desktop/stoleshnichi/imagecompressor/Desktop-1-min.png';
import St_D_2 from '../../assets/work/desktop/stoleshnichi/imagecompressor/Desktop-2-min.png';
import St_D_3 from '../../assets/work/desktop/stoleshnichi/imagecompressor/Desktop-3-min.png';
import St_M_1 from '../../assets/work/mobile/stoleshnichi/imagecompressor/Mobile-1-min.png';
import St_M_2 from '../../assets/work/mobile/stoleshnichi/imagecompressor/Mobile-2-min.png';
import St_M_3 from '../../assets/work/mobile/stoleshnichi/imagecompressor/Mobile-3-min.png';
import St_T_1 from '../../assets/work/mobile/stoleshnichi/imagecompressor/Tablet-1-min.png';
import St_T_2 from '../../assets/work/mobile/stoleshnichi/imagecompressor/Tablet-2-min.png';
import St_T_3 from '../../assets/work/mobile/stoleshnichi/imagecompressor/Tablet-3-min.png';
//tables
import T_D_1 from '../../assets/work/desktop/tables/imagecompressor/Desktop-1-min.png';
import T_D_2 from '../../assets/work/desktop/tables/imagecompressor/Desktop-2-min.png';
import T_D_3 from '../../assets/work/desktop/tables/imagecompressor/Desktop-3-min.png';
import T_M_1 from '../../assets/work/mobile/tables/imagecompressor/Mobile-1-min.png';
import T_M_2 from '../../assets/work/mobile/tables/imagecompressor/Mobile-2-min.png';
import T_M_3 from '../../assets/work/mobile/tables/imagecompressor/Mobile-3-min.png';
import T_T_1 from '../../assets/work/mobile/tables/imagecompressor/Tablet-1-min.png';
import T_T_2 from '../../assets/work/mobile/tables/imagecompressor/Tablet-2-min.png';
import T_T_3 from '../../assets/work/mobile/tables/imagecompressor/Tablet-3-min.png';
//import scssimagecompressor/
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
