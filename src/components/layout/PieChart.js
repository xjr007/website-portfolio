import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const PieSkill = () => {
	return (
		<PieChart
			animate={true}
			lineWidth={70}
			paddingAngle={1}
			viewBoxSize={1}
			data={[
				{ title: 'Python', value: 60, color: 'orange' },
				{ title: '', value: 40, color: 'brown   ' },
			]}
		/>
	);
};

export default PieSkill;
