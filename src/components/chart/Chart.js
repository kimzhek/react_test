import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';



function ChartComponent() {
	ChartJS.register(ArcElement, Legend);

	/*
	* 데이터
	*/
	const config = [
		{
			label: "경형",
			value: parseInt(Math.random()*100),
			color: "#EB5D5D"
		},
		{
			label: "소형",
			value: parseInt(Math.random()*100),
			color: "#FF7A00"
		},
		{
			label: "준중형",
			value: parseInt(Math.random()*100),
			color: "#FFD600"
		},
		{
			label: "중형",
			value: parseInt(Math.random()*100),
			color: "#47BC34"
		},
		{
			label: "준대형",
			value: parseInt(Math.random()*100),
			color: "#139DEA"
		},
		{
			label: "대형",
			value: parseInt(Math.random()*100),
			color: "#0D5ACE"
		},
		{
			label: "상용",
			value: parseInt(Math.random()*100),
			color: "#D34FE9"
		},
		{
			label: "밴(MPV)",
			value: parseInt(Math.random()*100),
			color: "#6B4725"
		}
	];

	const [data, setData] = useState(config);

	/*
	* chart 데이터
	*/
	const chartData = {
		labels: data.map(e => e.label),
		datasets: [
			{
				data: data.map(e => e.value),
				backgroundColor: data.map(e => e.color),
				cutout: "90%",
				borderWidth: 0
			},
		],
	};

	/*
	* chart 옵션
	*/
	const chartOptions = {
		maintainAspectRatio: true, //false :  상위 div에 구속
		plugins: {
			htmlLegend: {
				containerID: 'legend-container',
			},
			legend: {
				display: false,
			}
		},
		onClick: function (evt, element) {
			console.log(evt, element);
			console.log("click 도넛 index : ", element[0].index);
		}
	};

	/*
	* data 업데이트
	*/
	const refreshData = () => {
		setData(
			data.map(e => {
				let randomValue = parseInt(Math.random()*100);
				// console.log({ ...e, [e.value]: e.value + randomValue });
				return { ...e, value: randomValue };
			})
		);
	};

	/*
	* 보유차량 등록 총대수
	*/
	const arrDate = [];
	data.forEach(e => arrDate.push(e.value));
	let totalDate = 0;
	for (let i = 0; i < arrDate.length; i++) {
		totalDate += arrDate[i];
	};

	// const htmlLegendPlugin = {
	// 	id: "htmlLegend",
	// 	afterUpdate(chart) {
	// 		console.log('fdsfdsfds')
	// 		const jsLegend = document.getElementById("legend-container");
	// 		const items = chart.chartOptions.plugins.legend.labels.generateLabels(chart);
	// 		const data = chart.data.datasets[0].data;
	// 		const ul = document.createElement("ul");
	// 		jsLegend.parentNode.innerHtML = "";
	// 		items.forEach((item, index) => {
	// 			const li = document.createElement("li");
	// 			const boxSpan = document.createElement("span");
	// 			const boxStrong = document.createElement("strong");
	// 			const boxEm = document.createElement("em");
	// 			const dataIndex = data[index] < 10 ? '0' + data[index] : data[index];
	// 			boxSpan.style.background = item.fillStyle;
	// 			li.appendChild(boxSpan);
	// 			boxStrong.appendChild(document.createTextNode(item.text));
	// 			li.appendChild(boxStrong);
	// 			boxEm.appendChild(document.createTextNode(dataIndex));
	// 			li.appendChild(boxEm);
	// 			ul.appendChild(li);
	// 		});
	// 		jsLegend.appendChild(ul);
	// 	}
	// };
	return (
		<div className="chart-wrap">
			{/* <div id="legend-container"></div> */}
			<ul className="chart-list">
				{data.map((e, i) => {
					const dataValue = e.value < 10 ? '0' + e.value : e.value;
					return (
						<li key={i}>
							<span style={{ background: e.color }}></span>
							<strong>{e.label}</strong>
							<em>{dataValue}</em>
						</li>
					);
				})}
			</ul>
			<div className="chart-box">
				<div className="total">
					<strong>{totalDate}</strong>
					<p>보유차량 등록대수</p>
				</div>
				{/* <Doughnut data={chartData} options={chartOptions} plugins={[htmlLegendPlugin]} /> */}
				<Doughnut data={chartData} options={chartOptions} />
				<button onClick={refreshData} className="refresh">새로고침</button>
			</div>
			
		</div>
	);
};
export default ChartComponent;