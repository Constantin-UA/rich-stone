import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
import MaterialCard from '../materialCard/MaterialCard';
import { useToggler } from '../hook/useToggler.hook';

//scss imports
import './materials.scss';

function Materials({ scrollY, dataLang, materialImg }) {
	const { toggler } = useToggler();

	useEffect(() => {
		const clientHeight = document.querySelector('.mainPage').clientHeight,
			home = document.querySelector('.home').clientHeight,
			mater = document.querySelector('.materials').clientHeight,
			contacts = document.querySelector('.contacts').clientHeight;

		const min = clientHeight - home - contacts - mater / 2;
		const max = clientHeight - home - contacts / 2;

		if (scrollY >= min && scrollY <= max) {
			toggler('.materials-box', 'animate__zoomOut', 'animate__zoomIn');
			toggler('.materials-item', 'animate__zoomOut', 'animate__zoomIn', true);
		} else {
			toggler('.materials-box', 'animate__zoomIn', 'animate__zoomOut');
			toggler('.materials-item', 'animate__zoomIn', 'animate__zoomOut', true);
		}
	}, [scrollY, toggler]);
	return (
		<section id="materials" className="materials">
			<Container className="materials-wrapper">
				<div className="materials-box animate__animated">
					{materialImg.map((elem, idx) => {
						return (
							<div className="materials-item animate__animated" key={idx}>
								<MaterialCard cardImg={elem} cardTitle={dataLang.materialData.dataTitle[idx]} />
							</div>
						);
					})}
				</div>
			</Container>
		</section>
	);
}
export default Materials;
