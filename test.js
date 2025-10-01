// Get the modal
var modal = document.getElementById("project1-modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("project1-img");
var modalImg = document.getElementById("project1-fullimage");
var captionText = document.getElementById("project1-caption");

// Store the full-size image URL
// Since your thumbnail name is "Hello Retro Issue No.1.png", let's assume the full-size is the same.
// If not, you'd need to manually specify it here.
var fullSizeImgSrc = "./Assets/assets/Finalize/Magazine Cover/Hello Retro Issue No.1.png";

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = fullSizeImgSrc;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Also close the modal if the user clicks anywhere outside of the image
modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}