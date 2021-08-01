this.$slideOut = $('#slideOut');

// Slideout show
this.$slideOut.find('.slideOutTab').on('click', function() {
  $("#slideOut").toggleClass('showSlideOut');
});
$(window).click(function() {
// Slideout hide
});

$(document).mouseup(function(e) 
{
    var container = $('#slideOut');

    if (!container.is(e.target) && container.has(e.target).length === 0) 
   {
        container.removeClass('showSlideOut')();
    }
});

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
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

let sentences = document.querySelectorAll('.sentence');
let characterCount = 0;

for (let i = 0; i < sentences.length; i++) {
  let sentence = sentences[i];
  let newContent = '';

  // go through all characters of the sentence
  for (let j = 0; j < sentence.textContent.length; j++) {
    let substring = sentence.textContent.substr(j, 1);
    // if we have a character, wrap it
    if (substring !== " ") {
      newContent += `<span style="--animation-order: ${characterCount};">${substring}</span>`;
    } else {
      newContent += substring;
    }
    characterCount++;
  }
  sentence.innerHTML = newContent;
}
const toTop = document.querySelector(".gotopbtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


