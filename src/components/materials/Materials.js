import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

//images imports
import matImg_0 from '../../assets/materials/A-BC-1000.jpg';
import matImg_1 from '../../assets/materials/A-BQ-200.jpg';
import matImg_2 from '../../assets/materials/A-BQ-201.jpg';
import matImg_3 from '../../assets/materials/A-BQ-240.jpg';
import matImg_4 from '../../assets/materials/A-BQ-241.jpg';
import matImg_5 from '../../assets/materials/A-BQ-262.jpg';
import matImg_6 from '../../assets/materials/A-BQ-265.jpg';
import matImg_7 from '../../assets/materials/A-BQ-307.jpg';
import matImg_8 from '../../assets/materials/A-BQ-262.jpg';
/* import matImg_9 from '../../assets/materials/A-BS-120.jpg';
import matImg_10 from '../../assets/materials/A-BS-124.jpg';
import matImg_11 from '../../assets/materials/A-BQ-9453.jpg'; */

//scss imports
import './materials.scss';
const dataImg = [
	matImg_0,
	matImg_1,
	matImg_2,
	matImg_3,
	matImg_4,
	matImg_5,
	matImg_6,
	matImg_7,
	matImg_8,
];
const dataNames = [];
for (let i = 0; i < 9; i++) {
	dataNames.push(`matImg_${i}`);
}
function Materials() {
	return (
		<section id="materials" className="materials">
			<Container className="materials-wrapper">
				<div className="materials-title">Матерiали</div>
				<div className="materials-box">
					{dataImg.map((elem, idx) => {
						return (
							<div className="materials-item animate__animated" key={idx}>
								<Image className="materials-item-img" alt={dataNames[idx]} src={elem} />
							</div>
						);
					})}
				</div>
			</Container>
		</section>
	);
}
export default Materials;
