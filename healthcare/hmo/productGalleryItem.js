//get url name and set it as API endpoint
let extensionRemove = window.location.href.split('/').pop().replace('.html', '');
let queryRemove = extensionRemove.split('?')[0];
let hashRemove = queryRemove.split('#')[0];
let key = hashRemove;


// create component parent div  and fetch json
const productGalleryItem = document.createElement('data-stein-url');
productGalleryItem.setAttribute("data-stein-url", "https://api.steinhq.com/v1/storages/5f4750095d3cdc44fcd7d3a6/" + key);
productGalleryItem.classList = "row mt-4"

// create fund cards/modals
productGalleryItem.innerHTML = `
          <div class="col-lg-4 col-md-6 mb-3">
		  <div class="card h-100">
		  <div class="text-center">
			  <img data-src="{{imageURL}}" alt="{{planName}}" class="previewimg lazyload mt-4 px-4">
		  </div>
		  <h5 class="text-center mb-2 claimHeader mt-3 mx-2"><a href="" class="claimHeader">{{planName}}</a>
		  </h5>
		  <h6 class="text-left mb-2 claimHeader mt-3 ml-3 mx-2"><a href=""
				  class="claimHeader">{{provider}}</a>
		  </h6>
		  <div class="my-1 mx-3 mt-2">
			  <p class="text-justify"><small>{{description}}</small></p>
			  <div class="text-center mb-3 mt-3">
				  <a class="btn px-4 text-white rfbtn btn-block"
					  href="./details.html?provider={{provider}}&id={{id}}">Learn More!</a>
			  </div>
		  </div>
	  </div>
		</div>
  `;

//append component to host page
document.getElementById('productGallery').appendChild(productGalleryItem);