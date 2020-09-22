// create component parent div
const providerDropdown = document.createElement('div');

// set component class

// dropdown
providerDropdown.innerHTML = `
<label class="claimHeader">🔎 Browse Mutual Funds: </label>
<button class="btn btn-block border dropdown-toggle text-left" type="button" id="dropdownMenuButton"
		data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		Select Healthcare Provider..
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="z-index: 10">
		<a class="dropdown-item" href="./maxicare.html">Maxicare</a>
		<a class="dropdown-item" href="./philcare.html">Philcare</a>
		<a class="dropdown-item" href="./medicard.html">Medicard</a>
</div>
  `;

//append component to host page
document.getElementById('providerDropdown').appendChild(providerDropdown);