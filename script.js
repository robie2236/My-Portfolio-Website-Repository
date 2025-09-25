function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Get the modal and its content elements
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("captionText");
var span = document.getElementsByClassName("close-btn")[0];

// This function is called from the 'onclick' event in the HTML
function openImageModal(clickedImage) {
  modal.style.display = "block";
  modalImg.src = clickedImage.src;
  captionText.innerHTML = clickedImage.alt;
}

// When the user clicks on the close button, close the modal
span.onclick = function() {
  modal.style.display = "none";
}