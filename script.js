// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

/**************************************** End of Modal ****************************************/


/********************************* Change nav color on scroll *********************************/
var myNav = document.querySelector('.navbar');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 800 ) {
        myNav.style.backgroundColor = "#203354";
    } 
    else {
        myNav.style.backgroundColor = "transparent";
    }
};
