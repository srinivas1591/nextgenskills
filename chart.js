window.onload = function () {
var chart = new CanvasJS.Chart("chartContainer1", {
	animationEnabled: true,
	title:{
		text:"Sudents Comparision Chart for Subject A in January"
	},
	axisX:{
		interval: 1
	},
	axisY2:{
		interlacedColor: "rgba(1,77,101,.2)",
		gridColor: "rgba(1,77,101,.1)",
		title: "Number of Marks Obtained"
	},
	data: [{
		type: "bar",
		name: "marks",
		axisYType: "secondary",
		color: "#014D65",
		dataPoints: [
			{ y: 56, label: "Student A" },
			{ y: 72, label: "Student B" },
			{ y: 77, label: "Student C" },
			{ y: 63, label: "Student D" }
		]
	}]
});
chart.render();

var bar = new CanvasJS.Chart("chartContainer2", {
	animationEnabled: true,
	title:{
		text:"Sudents Comparision Chart for Subject B in January"
	},
	axisX:{
		interval: 1
	},
	axisY2:{
		interlacedColor: "rgba(1,77,101,.2)",
		gridColor: "rgba(1,77,101,.1)",
		title: "Number of Marks Obtained"
	},
	data: [{
		type: "bar",
		name: "marks",
		axisYType: "secondary",
		color: "#014D65",
		dataPoints: [
			{ y: 75, label: "Student A" },
			{ y: 63, label: "Student B" },
			{ y: 70, label: "Student C" },
			{ y: 63, label: "Student D" }
		]
	}]
});
bar.render();

var baru = new CanvasJS.Chart("chartContainer3", {
	animationEnabled: true,
	title:{
		text:"Sudents Comparision Chart for Subject C in January"
	},
	axisX:{
		interval: 1
	},
	axisY2:{
		interlacedColor: "rgba(1,77,101,.2)",
		gridColor: "rgba(1,77,101,.1)",
		title: "Number of Marks Obtained"
	},
	data: [{
		type: "bar",
		name: "marks",
		axisYType: "secondary",
		color: "#014D65",
		dataPoints: [
			{ y: 69, label: "Student A" },
			{ y: 90, label: "Student B" },
			{ y: 56, label: "Student C" },
			{ y: 59, label: "Student D" }
		]
	}]
});
baru.render();

var bari = new CanvasJS.Chart("chartContainer4", {
	animationEnabled: true,
	title:{
		text:"Sudents Comparision Chart for Subject D in January"
	},
	axisX:{
		interval: 1
	},
	axisY2:{
		interlacedColor: "rgba(1,77,101,.2)",
		gridColor: "rgba(1,77,101,.1)",
		title: "Number of Marks Obtained"
	},
	data: [{
		type: "bar",
		name: "marks",
		axisYType: "secondary",
		color: "#014D65",
		dataPoints: [
			{ y: 86, label: "Student A" },
			{ y: 85, label: "Student B" },
			{ y: 61, label: "Student C" },
			{ y: 72, label: "Student D" }
		]
	}]
});
bari.render();
}