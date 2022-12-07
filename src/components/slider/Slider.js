import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import { useToggler } from '../hook/useToggler.hook';
//img import
//Desktop
import B_D_1 from '../../assets/work/desktop/b-1-min.webp';
import B_D_2 from '../../assets/work/desktop/b-2-min.webp';
import B_D_3 from '../../assets/work/desktop/b-3-min.webp';
import F_D_1 from '../../assets/work/desktop/f-1-min.webp';
import F_D_2 from '../../assets/work/desktop/f-2-min.webp';
import F_D_3 from '../../assets/work/desktop/f-3-min.webp';
import S_D_1 from '../../assets/work/desktop/s-1-min.webp';
import S_D_2 from '../../assets/work/desktop/s-2-min.webp';
import S_D_3 from '../../assets/work/desktop/s-3-min.webp';
import St_D_1 from '../../assets/work/desktop/st-1-min.webp';
import St_D_2 from '../../assets/work/desktop/st-2-min.webp';
import St_D_3 from '../../assets/work/desktop/st-3-min.webp';
import T_D_1 from '../../assets/work/desktop/t-1-min.webp';
import T_D_2 from '../../assets/work/desktop/t-2-min.webp';
import T_D_3 from '../../assets/work/desktop/t-3-min.webp';
//Tablet
import B_T_1 from '../../assets/work/tablet/b-1-min.webp';
import B_T_2 from '../../assets/work/tablet/b-2-min.webp';
import B_T_3 from '../../assets/work/tablet/b-3-min.webp';
import F_T_1 from '../../assets/work/tablet/f-1-min.webp';
import F_T_2 from '../../assets/work/tablet/f-2-min.webp';
import F_T_3 from '../../assets/work/tablet/f-3-min.webp';
import S_T_1 from '../../assets/work/tablet/s-1-min.webp';
import S_T_2 from '../../assets/work/tablet/s-2-min.webp';
import S_T_3 from '../../assets/work/tablet/s-3-min.webp';
import St_T_1 from '../../assets/work/tablet/st-1-min.webp';
import St_T_2 from '../../assets/work/tablet/st-2-min.webp';
import St_T_3 from '../../assets/work/tablet/st-3-min.webp';
import T_T_1 from '../../assets/work/tablet/t-1-min.webp';
import T_T_2 from '../../assets/work/tablet/t-2-min.webp';
import T_T_3 from '../../assets/work/tablet/t-3-min.webp';
//Mobile
import B_M_1 from '../../assets/work/mobile/b-1-min.webp';
import B_M_2 from '../../assets/work/mobile/b-2-min.webp';
import B_M_3 from '../../assets/work/mobile/b-3-min.webp';
import F_M_1 from '../../assets/work/mobile/f-1-min.webp';
import F_M_2 from '../../assets/work/mobile/f-2-min.webp';
import F_M_3 from '../../assets/work/mobile/f-3-min.webp';
import S_M_1 from '../../assets/work/mobile/s-1-min.webp';
import S_M_2 from '../../assets/work/mobile/s-2-min.webp';
import S_M_3 from '../../assets/work/mobile/s-3-min.webp';
import St_M_1 from '../../assets/work/mobile/st-1-min.webp';
import St_M_2 from '../../assets/work/mobile/st-2-min.webp';
import St_M_3 from '../../assets/work/mobile/st-3-min.webp';
import T_M_1 from '../../assets/work/mobile/t-1-min.webp';
import T_M_2 from '../../assets/work/mobile/t-2-min.webp';
import T_M_3 from '../../assets/work/mobile/t-3-min.webp';

//stoleshnica
//tables

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
