let template = document.querySelector("#projectTemplate").content;
let carlist = document.querySelector("#projectList");
let page = 1;
let lookingForData = false;

function fetchUsedCars(){
  lookingForData=true;

  let urlParams = new URLSearchParams(window.location.search);

  let catid = urlParams.get("category");
  let endpoint = "http://canyouseethrough.me/kea2/theme7/wordpress/wp-json/wp/v2/gingi?_embed&per_page=3&page="+page
  if(catid){ // DRY
    endpoint = "http://canyouseethrough.me/kea2/theme7/wordpress/wp-json/wp/v2/gingi?_embed&per_page=3&page="+page + "&categories="+catid
  }



    fetch(endpoint)
      .then(e => e.json())
      .then(showCars);


}

function showCars(data){
  console.log(data)
  lookingForData=false;
  data.forEach(showSingleCar);
}

function showSingleCar(aCar){
  let clone = template.cloneNode(true);
  clone.querySelector("p").innerHTML = aCar.title.rendered;
  
	if(aCar.acf.gingis_project_image.url != ""){//img is there
		 clone.querySelector(".project-img").setAttribute("src", aCar.acf.gingis_project_image.url);
	 }
	
		
	
  carlist.appendChild(clone);
}
fetchUsedCars();

let button = document.querySelector(".button-more");

button.addEventListener('click', buttonPress);


function buttonPress(){
    console.log("Button has been clicked")
    page++;
    fetchUsedCars();
  
}









