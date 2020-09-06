// parse url for data
function getUrlVars() {
	let vars = {};
	let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (
		m,
		key,
		value
	) {
		vars[key] = value;
	});
	if (vars == {}) {
		window.location.href = './404.html';
	} else {
		return vars;
	}
}

let provider = getUrlVars()['provider'].toLowerCase();
let providerBig = getUrlVars()['provider'];
let id = getUrlVars()['id'];
let api = String('https://api.steinhq.com/v1/storages/5f4750095d3cdc44fcd7d3a6/' + provider + '?search={"id":"' + id + '"}');

// assign api data to HTML IDs
function dataFill(json) {
	document.querySelector('meta[name="title"]').setAttribute('content', json[0].planName);
	document.querySelector('meta[name="description"]').setAttribute('content', json[0].description);
	document.title = json[0].planName + ' | Plan Details';
	document.getElementById("imageURL").src = json[0].imageURL;
	document.getElementById("planName").innerHTML = json[0].planName;
	document.getElementById("provider").innerHTML = json[0].provider;
	document.getElementById("benefitLimit").innerHTML = json[0].benefitLimit;
	document.getElementById("limitType").innerHTML = json[0].limitType;
	document.getElementById("age").innerHTML = json[0].age;
	document.getElementById("lifeInsurance").innerHTML = json[0].lifeInsurance;
	document.getElementById("adb").innerHTML = json[0].adb;
	document.getElementById("description").innerHTML = json[0].description;
	document.getElementById("hospitalAccess").innerHTML = json[0].hospitalAccess;
	document.getElementById("roomAndBoard").innerHTML = json[0].roomAndBoard;
	document.getElementById("hospitalNetwork").href = json[0].hospitalNetwork;

	// split and feed ape list
	let ape = json[0].ape;
	let apeList = ape.split(";");
	for (let i = 0; i < apeList.length; i++) {
		let li = document.createElement('li');
		li.className = "mb-1 text-left";
		li.textContent = apeList[i];
		document.getElementById('ape').appendChild(li);
	};

	// split and feed emergencyNonaccredited list
	let emergencyNonaccredited = json[0].emergencyNonaccredited;
	let emergencyNonaccreditedList = emergencyNonaccredited.split(";");
	for (let i = 0; i < emergencyNonaccreditedList.length; i++) {
		let li = document.createElement('li');
		li.className = "mb-1 text-left";
		li.textContent = emergencyNonaccreditedList[i];
		document.getElementById('emergencyNonaccredited').appendChild(li);
	};

	// split and feed preexistingCoverage list
	let preexistingCoverage = json[0].preexistingCoverage;
	let preexistingCoverageList = preexistingCoverage.split(";");
	for (let i = 0; i < preexistingCoverageList.length; i++) {
		let li = document.createElement('li');
		li.className = "mb-1 text-left";
		li.textContent = preexistingCoverageList[i];
		document.getElementById('preexistingCoverage').appendChild(li);
	};

	// split and feed topHospitals list
	let topHospitals = json[0].topHospitals;
	let topHospitalsList = topHospitals.split(";");
	for (let i = 0; i < topHospitalsList.length; i++) {
		let li = document.createElement('li');
		li.className = "mb-1 text-left";
		li.textContent = topHospitalsList[i];
		document.getElementById('topHospitals').appendChild(li);
	};

	// split and feed ecu list, hide if none
	let ecu = json[0].ecu;
	if (ecu == "Not Applicable") {
		document.getElementById("ecuCont").classList.add("d-none");
	} else {
		let ecuList = ecu.split(";");
		for (let i = 0; i < ecuList.length; i++) {
			let li = document.createElement('li');
			li.className = "mb-1 text-left";
			li.textContent = ecuList[i];
			document.getElementById('ecu').appendChild(li);
		};
	};

	// split and feed congenitalCoverage list, hide if none
	let congenitalCoverage = json[0].congenitalCoverage;
	if (congenitalCoverage == "Not Applicable" || "None") {
		document.getElementById("congenitalCoverageCont").classList.add("d-none");
	} else {
		let congenitalCoverageList = congenitalCoverage.split(";");
		for (let i = 0; i < congenitalCoverageList.length; i++) {
			let li = document.createElement('li');
			li.className = "mb-1 text-left";
			li.textContent = congenitalCoverageList[i];
			document.getElementById('congenitalCoverage').appendChild(li);
		};
	};

	// split and feed dentalBenefits list, hide if none
	let dentalBenefits = json[0].dentalBenefits;
	if (dentalBenefits == "Not Applicable") {
		document.getElementById("dentalBenefitsCont").classList.add("d-none");
	} else {
		let dentalBenefitsList = dentalBenefits.split(";");
		for (let i = 0; i < dentalBenefitsList.length; i++) {
			let li = document.createElement('li');
			li.className = "mb-1 text-left";
			li.textContent = dentalBenefitsList[i];
			document.getElementById('dentalBenefits').appendChild(li);
		};
	};

	// split and feed travelAssist list, hide if none
	let travelAssist = json[0].travelAssist;
	if (travelAssist == "Not Applicable") {
		document.getElementById("travelAssistCont").classList.add("d-none");
	} else {
		// let travelAssistList = travelAssist.split(";");
		// for (let i = 0; i < travelAssistList.length; i++) {
		// 	let li = document.createElement('li');
		// 	li.className = "mb-1 text-left";
		// 	li.textContent = travelAssistList[i];
		// 	document.getElementById('travelAssist').appendChild(li);
		// };
		document.getElementById('travelAssist').innerHTML = json[0].travelAssist;

	};

	// split and feed otherBenefits list, hide if none
	let otherBenefits = json[0].otherBenefits;
	if (otherBenefits == "Not Applicable") {
		document.getElementById("otherBenefitsCont").classList.add("d-none");
	} else {
		let otherBenefitsList = otherBenefits.split(";");
		for (let i = 0; i < otherBenefitsList.length; i++) {
			let li = document.createElement('li');
			li.className = "mb-1 text-left";
			li.textContent = otherBenefitsList[i];
			document.getElementById('otherBenefits').appendChild(li);
		};
	};

	// split and feed ambulance list, hide if none
	let ambulance = json[0].ambulance;
	if (ambulance == "Not Applicable") {
		document.getElementById("ambulanceCont").classList.add("d-none");
	} else {
		let ambulanceList = ambulance.split(";");
		for (let i = 0; i < ambulanceList.length; i++) {
			let li = document.createElement('li');
			li.className = "mb-1 text-left";
			li.textContent = ambulanceList[i];
			document.getElementById('ambulance').appendChild(li);
		};
	};


}

// fill data
let output = fetch(api)
	.then((response) => response.json())
	.then((json) => {
		// this.dataFill(json);
		this.dataFill(json);
		console.log(json);
	})