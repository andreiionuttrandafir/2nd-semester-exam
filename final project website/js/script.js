var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
  
}

let filmIndustryButton = document.querySelector(".service-film-industry");
let ladiesGentsButton = document.querySelector(".service-ladies-gents");
let performersButton = document.querySelector(".service-performers");


filmIndustryButton.addEventListener('click', filmIndustryFunction)
ladiesGentsButton.addEventListener('click', ladiesGentsButtonFunction)
performersButton.addEventListener('click', performersButtonFunction)


function filmIndustryFunction(){
    document.querySelector(".parent-small-services").style.display = "block";
    
    document.querySelector(".service-films").style.display="block";
    document.querySelector(".service-stylists").style.display="block";
    document.querySelector(".service-fitting").style.display="block";
    document.querySelector(".service-duty").style.display="block";
    document.querySelector(".service-private").style.display="none";
    document.querySelector(".service-wardrobe").style.display="none";
    document.querySelector(".service-rental").style.display="block";
    
    document.querySelector(".desc-service-films").style.display = "none";
    document.querySelector(".desc-service-stylists").style.display = "none";
    document.querySelector(".desc-service-fitting").style.display = "none";
    document.querySelector(".desc-service-duty").style.display = "none";
    document.querySelector(".desc-service-private").style.display = "none";
    document.querySelector(".desc-service-wardrobe").style.display = "none";
    document.querySelector(".desc-service-rental").style.display = "none";
    
    document.querySelector(".service-film-industry").style.color = "#B99663";
    document.querySelector(".service-ladies-gents").style.color = "black";
    document.querySelector(".service-performers").style.color = "black";

}

function ladiesGentsButtonFunction(){
    document.querySelector(".parent-small-services").style.display = "block";
    
    document.querySelector(".service-films").style.display="none";
    document.querySelector(".service-stylists").style.display="none";
    document.querySelector(".service-fitting").style.display="none";
    document.querySelector(".service-duty").style.display="none";
    document.querySelector(".service-private").style.display="block";
    document.querySelector(".service-wardrobe").style.display="none";
    document.querySelector(".service-rental").style.display="block"; 
    
    document.querySelector(".desc-service-films").style.display = "none";
    document.querySelector(".desc-service-stylists").style.display = "none";
    document.querySelector(".desc-service-fitting").style.display = "none";
    document.querySelector(".desc-service-duty").style.display = "none";
    document.querySelector(".desc-service-private").style.display = "none";
    document.querySelector(".desc-service-wardrobe").style.display = "none";
    document.querySelector(".desc-service-rental").style.display = "none";
    
    document.querySelector(".service-film-industry").style.color = "black";
    document.querySelector(".service-ladies-gents").style.color = "#B99663";
    document.querySelector(".service-performers").style.color = "black";

}

function performersButtonFunction(){
    document.querySelector(".parent-small-services").style.display = "block";
    
    document.querySelector(".service-films").style.display="none";
    document.querySelector(".service-stylists").style.display="none";
    document.querySelector(".service-fitting").style.display="none";
    document.querySelector(".service-duty").style.display="none";
    document.querySelector(".service-private").style.display="none";
    document.querySelector(".service-wardrobe").style.display="block";
    document.querySelector(".service-rental").style.display="block";
     
    document.querySelector(".desc-service-films").style.display = "none";
    document.querySelector(".desc-service-stylists").style.display = "none";
    document.querySelector(".desc-service-fitting").style.display = "none";
    document.querySelector(".desc-service-duty").style.display = "none";
    document.querySelector(".desc-service-private").style.display = "none";
    document.querySelector(".desc-service-wardrobe").style.display = "none";
    document.querySelector(".desc-service-rental").style.display = "none";
    
    document.querySelector(".service-film-industry").style.color = "black";
    document.querySelector(".service-ladies-gents").style.color = "black";
    document.querySelector(".service-performers").style.color = "#B99663";
   
}

let serviceFilms = document.querySelector(".service-films");
let serviceStylists = document.querySelector(".service-stylists");
let serviceFitting = document.querySelector(".service-fitting");
let serviceDuty = document.querySelector(".service-duty");
let servicePrivate = document.querySelector(".service-private");
let serviceWardrobe = document.querySelector(".service-wardrobe");
let serviceRental = document.querySelector(".service-rental");

serviceFilms.addEventListener('click', serviceFilmsButtonFunction)
serviceStylists.addEventListener('click', serviceStylistsButtonFunction)
serviceFitting.addEventListener('click', serviceFittingButtonFunction)
serviceDuty.addEventListener('click', serviceDutyButtonFunction)
servicePrivate.addEventListener('click', servicePrivateButtonFunction)
serviceWardrobe.addEventListener('click', serviceWardrobeButtonFunction)
serviceRental.addEventListener('click', serviceRentalButtonFunction)

function serviceFilmsButtonFunction(){
    document.querySelector(".desc-service-films").style.display = "block";
    document.querySelector(".desc-service-stylists").style.display = "none";
    document.querySelector(".desc-service-fitting").style.display = "none";
    document.querySelector(".desc-service-duty").style.display = "none";
    document.querySelector(".desc-service-private").style.display = "none";
    document.querySelector(".desc-service-wardrobe").style.display = "none";
    document.querySelector(".desc-service-rental").style.display = "none";
    
    document.querySelector(".service-films").style.color = "#B99663";
    document.querySelector(".service-stylists").style.color = "black";
    document.querySelector(".service-fitting").style.color = "black";
    document.querySelector(".service-duty").style.color = "black";
    document.querySelector(".service-private").style.color = "black";
    document.querySelector(".service-wardrobe").style.color = "black";
    document.querySelector(".service-rental").style.color = "black";
}

function serviceStylistsButtonFunction(){
    document.querySelector(".desc-service-films").style.display = "none";
    document.querySelector(".desc-service-stylists").style.display = "block";
    document.querySelector(".desc-service-fitting").style.display = "none";
    document.querySelector(".desc-service-duty").style.display = "none";
    document.querySelector(".desc-service-private").style.display = "none";
    document.querySelector(".desc-service-wardrobe").style.display = "none";
    document.querySelector(".desc-service-rental").style.display = "none";
    
    document.querySelector(".service-films").style.color = "black";
    document.querySelector(".service-stylists").style.color = "#B99663";
    document.querySelector(".service-fitting").style.color = "black";
    document.querySelector(".service-duty").style.color = "black";
    document.querySelector(".service-private").style.color = "black";
    document.querySelector(".service-wardrobe").style.color = "black";
    document.querySelector(".service-rental").style.color = "black";
    
}

function serviceFittingButtonFunction(){
    document.querySelector(".desc-service-films").style.display = "none";
    document.querySelector(".desc-service-stylists").style.display = "none";
    document.querySelector(".desc-service-fitting").style.display = "block";
    document.querySelector(".desc-service-duty").style.display = "none";
    document.querySelector(".desc-service-private").style.display = "none";
    document.querySelector(".desc-service-wardrobe").style.display = "none";
    document.querySelector(".desc-service-rental").style.display = "none";
    
    document.querySelector(".service-films").style.color = "black";
    document.querySelector(".service-stylists").style.color = "black";
    document.querySelector(".service-fitting").style.color = "#B99663";
    document.querySelector(".service-duty").style.color = "black";
    document.querySelector(".service-private").style.color = "black";
    document.querySelector(".service-wardrobe").style.color = "black";
    document.querySelector(".service-rental").style.color = "black";
    
}

function serviceDutyButtonFunction(){
    document.querySelector(".desc-service-films").style.display = "none";
    document.querySelector(".desc-service-stylists").style.display = "none";
    document.querySelector(".desc-service-fitting").style.display = "none";
    document.querySelector(".desc-service-duty").style.display = "block";
    document.querySelector(".desc-service-private").style.display = "none";
    document.querySelector(".desc-service-wardrobe").style.display = "none";
    document.querySelector(".desc-service-rental").style.display = "none";
    
    document.querySelector(".service-films").style.color = "black";
    document.querySelector(".service-stylists").style.color = "black";
    document.querySelector(".service-fitting").style.color = "black";
    document.querySelector(".service-duty").style.color = "#B99663";
    document.querySelector(".service-private").style.color = "black";
    document.querySelector(".service-wardrobe").style.color = "black";
    document.querySelector(".service-rental").style.color= "black";
}

function servicePrivateButtonFunction(){
    document.querySelector(".desc-service-films").style.display = "none";
    document.querySelector(".desc-service-stylists").style.display = "none";
    document.querySelector(".desc-service-fitting").style.display = "none";
    document.querySelector(".desc-service-duty").style.display = "none";
    document.querySelector(".desc-service-private").style.display = "block";
    document.querySelector(".desc-service-wardrobe").style.display = "none";
    document.querySelector(".desc-service-rental").style.display = "none";
    
    document.querySelector(".service-films").style.color = "black";
    document.querySelector(".service-stylists").style.color = "black";
    document.querySelector(".service-fitting").style.color = "black";
    document.querySelector(".service-duty").style.color = "black";
    document.querySelector(".service-private").style.color = "#B99663";
    document.querySelector(".service-wardrobe").style.color = "black";
    document.querySelector(".service-rental").style.color = "black";
}

function serviceWardrobeButtonFunction(){
    document.querySelector(".desc-service-films").style.display = "none";
    document.querySelector(".desc-service-stylists").style.display = "none";
    document.querySelector(".desc-service-fitting").style.display = "none";
    document.querySelector(".desc-service-duty").style.display = "none";
    document.querySelector(".desc-service-private").style.display = "none";
    document.querySelector(".desc-service-wardrobe").style.display = "block";
    document.querySelector(".desc-service-rental").style.display = "none";
    
    document.querySelector(".service-films").style.color = "black";
    document.querySelector(".service-stylists").style.color = "black";
    document.querySelector(".service-fitting").style.color = "black";
    document.querySelector(".service-duty").style.color = "black";
    document.querySelector(".service-private").style.color = "black";
    document.querySelector(".service-wardrobe").style.color = "#B99663";
    document.querySelector(".service-rental").style.color = "black";
}

function serviceRentalButtonFunction(){
    document.querySelector(".desc-service-films").style.display = "none";
    document.querySelector(".desc-service-stylists").style.display = "none";
    document.querySelector(".desc-service-fitting").style.display = "none";
    document.querySelector(".desc-service-duty").style.display = "none";
    document.querySelector(".desc-service-private").style.display = "none";
    document.querySelector(".desc-service-wardrobe").style.display = "none";
    document.querySelector(".desc-service-rental").style.display = "block";
    
    document.querySelector(".service-films").style.color = "black";
    document.querySelector(".service-stylists").style.color = "black";
    document.querySelector(".service-fitting").style.color = "black";
    document.querySelector(".service-duty").style.color = "black";
    document.querySelector(".service-private").style.color = "black";
    document.querySelector(".service-wardrobe").style.color = "black";
    document.querySelector(".service-rental").style.color = "#B99663";
}

let vivienImage = document.querySelector(".vivien-image");
let andreiImage = document.querySelector(".andrei-image");
let razvanImage = document.querySelector(".razvan-image");
let katiImage = document.querySelector(".kati-image");

let vivienText = document.querySelector(".vivien-text");
let andreiText = document.querySelector(".andrei-text");
let razvanText = document.querySelector(".razvan-text");
let katiText = document.querySelector(".kati-text");

let vivienSub = document.querySelector(".vivien-sub");
let andreiSub = document.querySelector(".andrei-sub");
let razvanSub = document.querySelector(".razvan-sub");
let katiSub = document.querySelector(".kati-sub");

vivienText.addEventListener('click', vivienFunction)
andreiText.addEventListener('click', andreiFunction)
razvanText.addEventListener('click', razvanFunction)
katiText.addEventListener('click', katiFunction);


// We use this functions for the 'Team members' page.
// When the user clicks a name the images change and also appears his/her position in the company.

function vivienFunction(){
	vivienImage.style.display = "block";
	andreiImage.style.display = "none";
	razvanImage.style.display = "none";
    katiImage.style.display = "none";
    
	
	vivienSub.style.display = "block";
	andreiSub.style.display = "none";
	razvanSub.style.display = "none";
    katiSub.style.display = "none";
}

function andreiFunction(){
	vivienImage.style.display = "none";
	andreiImage.style.display = "block";
	razvanImage.style.display = "none";
    katiImage.style.display = "none";
	
	vivienSub.style.display = "none";
	andreiSub.style.display = "block";
	razvanSub.style.display = "none";
    katiSub.style.display = "none";
}

function razvanFunction(){
	vivienImage.style.display = "none";
	andreiImage.style.display = "none";
	razvanImage.style.display = "block";
    katiImage.style.display = "none";
	
	vivienSub.style.display = "none";
	andreiSub.style.display = "none";
	razvanSub.style.display = "block";
    katiSub.style.display = "none";
}

function katiFunction(){
   vivienImage.style.display = "none";
	andreiImage.style.display = "none";
	razvanImage.style.display = "none";
    katiImage.style.display = "block";
	
	vivienSub.style.display = "none";
	andreiSub.style.display = "none";
	razvanSub.style.display = "none";
    katiSub.style.display = "block";
}

//scroll script

window.onscroll = function() {lineScroll()};
// We are using the function onscroll in order to show some animations on some point.
// For example the first page is between 0 and 500 px when it gets over 500 then another animations starts.
function lineScroll() {
    
    if(document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop < 300){
        document.querySelector(".divArrows").style.opacity = "1";
        
    }else{
        document.querySelector(".divArrows").style.opacity = "0";
        
    }
    if (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop <500) {
        document.querySelector(".hr1").style.width = "30%"; 
        // With these animations we show on which page is the user by making the line longer.
		
    } else{
        document.querySelector(".hr1").style.width = "15%";
		
    }
	
	if (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop <1200) {
        document.querySelector(".hr2").style.width = "30%";
		

		
    } else {
        document.querySelector(".hr2").style.width = "15%";
		
		
		
    }
	
	if (document.documentElement.scrollTop > 1200 && document.documentElement.scrollTop <1900) {
        document.querySelector(".hr3").style.width = "30%";
		
    } else {
        document.querySelector(".hr3").style.width = "15%";
	
    }
	
	if (document.documentElement.scrollTop > 1900 && document.documentElement.scrollTop <2400) {
        document.querySelector(".hr4").style.width = "30%";
    } else {
        document.querySelector(".hr4").style.width = "15%";
    }
	
	if (document.documentElement.scrollTop > 2400 && document.documentElement.scrollTop <3000) {
        document.querySelector(".hr5").style.width = "30%";
    } else {
        document.querySelector(".hr5").style.width = "15%";
    }
	
	if (document.documentElement.scrollTop > 3000 && document.documentElement.scrollTop <4000) {
        document.querySelector(".hr6").style.width = "30%";
    } else {
        document.querySelector(".hr6").style.width = "15%";
    }
}


let myNav = document.querySelector("#myNav");
let counter = 1;


function myFunction(x){
	x.classList.toggle("change");
	x.style.zIndex = "1000";
	
	if(counter%2 === 1){
        document.querySelector("#myNav").style.display = "block";
	    setTimeout(function(){ 
           document.querySelector("#myNav").style.opacity = "1";
	      }, 10);
	}
	else{
	document.querySelector("#myNav").style.opacity = "0";
	
	setTimeout(function(){ 
        document.querySelector("#myNav").style.display = "none"; }, 600);
	}
	counter++; //we are counting the clicks in order to see how the burger menu animation looks.
    // If the user clicks the first time then on counter we will have an uneven number.
    // If the user clicks the second time in order to close the menu the counter will be even.
}





	