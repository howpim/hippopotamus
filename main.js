
const parallax = document.getElementById("parallax");
console.log(parallax);

 window.addEventListener("scroll", function() {
    let offset = window.pageYOffset ;
    parallax.style.backgroundPositionY = ( offset * 0.7 - 100 ) + "px";
    console.log(( offset * 0.7 + 100 ) + "px")
})  

// Get the modal
var modal = document.getElementById("Nasa-Modal")
var body = document.querySelector("body")
// Get the button that opens the modal
var button1 = document.getElementById("1stModal")

// Get the <span> element that closes the modal
var close1 = document.getElementById("closeup1")
// When the user clicks on the button, open the modal
button1.onclick = function() {
    modal.style.display = "flex";
    body.style.overflow = "hidden";
}
// When the user clicks on <span> (x), close the modal
close1.onclick = function() {
    modal.style.display = "none";
    body.style.overflow = "auto";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
    if (event.target == wdModal) {
        wdModal.style.display = "none";
        body.style.overflow = "auto";
    }
    if (event.target == settingsModal) {
        settingsModal.style.display = "none";
        body.style.overflow = "auto";
    }
    if (event.target == documentationModal) {
        documentationModal.style.display = "none";
        body.style.overflow = "auto";
    }
    if (event.target == innovationsModal) {
        innovationsModal.style.display = "none";
        body.style.overflow = "auto";
    }
    if (event.target == designModal) {
        designModal.style.display = "none";
        body.style.overflow = "auto";
    }
} 
// Modal WD
var wdModal = document.getElementById("WD-Modal")
var button2 = document.getElementById("2ndModal")
var close2 = document.getElementById("closeup2")
button2.onclick = function() {
    wdModal.style.display =  "flex";
    body.style.overflow = "hidden";
}
close2.onclick = function() {
    wdModal.style.display = "none";
    body.style.overflow = "auto";
}
// Settings Modal
var settingsModal = document.getElementById("settings-Modal")
var button3 = document.getElementById("3rdModal")
var close3 = document.getElementById("closeup3")
button3.onclick = function() {
    settingsModal.style.display =  "flex";
    body.style.overflow = "hidden";
}
close3.onclick = function() {
    settingsModal.style.display = "none";
    body.style.overflow = "auto";
}
// Documentation Modal
var documentationModal = document.getElementById("documentation-Modal")
var button4 = document.getElementById("4thModal")
var close4 = document.getElementById("closeup4")
button4.onclick = function() {
    documentationModal.style.display =  "flex";
    body.style.overflow = "hidden";
}
close4.onclick = function() {
    documentationModal.style.display = "none";
    body.style.overflow = "auto";
}
// Innovations Modal
var innovationsModal = document.getElementById("Innovations-Modal")
var button5 = document.getElementById("5thModal")
var close5 = document.getElementById("closeup5")
button5.onclick = function() {
    innovationsModal.style.display =  "flex";
    body.style.overflow = "hidden";
}
close5.onclick = function() {
    innovationsModal.style.display = "none";
    body.style.overflow = "auto";
}
// Design Modal
var designModal = document.getElementById("Design-Modal")
var button6 = document.getElementById("6thModal")
var close6 = document.getElementById("closeup6")
button6.onclick = function() {
    designModal.style.display =  "flex";
    body.style.overflow = "hidden";
}
close6.onclick = function() {
    designModal.style.display = "none";
    body.style.overflow = "auto";
}

/* filter 
const imagesWrapper = document.querySelector('.animal-images')
const allImages = document.querySelectorAll('.filter-images')
const webImages = document.querySelectorAll('[data-bird]')
const uiImages = document.querySelectorAll('[data-cate]')
const mockImages = document.querySelectorAll('[data-doge]')
console.log (imagesWrapper)
console.log (allImages)
console.log (webImages)
console.log (uiImages)
console.log (mockImages)

filterWorks = (e) => {
    document.querySelectorAll('.filter-images').forEach((item) => imagesWrapper.removeChild(item))
    const work = e.id
    switch (work) {
      case 'filter-button-bird':
        webImages.forEach((el) => imagesWrapper.appendChild(el))
        break
      case 'filter-button-cate':
        uiImages.forEach((el) => imagesWrapper.appendChild(el))
        break
      case 'filter-button-doge':
        mockImages.forEach((el) => imagesWrapper.appendChild(el))
        break
      case 'filter-button-all':
        allImages.forEach((el) => imagesWrapper.appendChild(el))
        break
    }
  }
  
  const latestButtons = document.querySelectorAll('.filter-button')
  let hoverButton = document.querySelector('.filter-button:hover')
  const allButton = document.querySelector('#filter-button-all')
  if (!hoverButton) {
    allButton.classList.add('filter-button:hover');
    hoverButton = allButton;
    filterWorks(hoverButton)
  }
  latestButtons.forEach(e => e.addEventListener('click', () => {
    if (e != hoverButton) {
      e.classList.add('filter-button-hover')
      hoverButton.classList.remove('filter-button-hover')
      hoverButton = e;
    }
    filterWorks(e)
  })) */
  // filerSelection(c)
  filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filter-images");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}
  function addClass(element, name) {
      var i, arr1, arr2; 
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
        }
      }
  }
  function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

var btnContainer = document.getElementById("filter-buttons");
var btns = btnContainer.getElementsByClassName("filter-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// jQuery slick
$(document).ready(function () {
  $('.team-slick').slick({
    infinite: true,
    dots: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
  {
    breakpoint: 1114,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
      }
  },
  {
    breakpoint: 751,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ]
  });
})
// window scroll
const aboutButton = document.getElementById("about-button");
aboutButton.onclick = function() {
  const elmnt = document.getElementById("main-div");
  elmnt.scrollIntoView({
    behavior: 'smooth',
  }); 
  console.log(elmnt);
}
const aboutButton2 = document.getElementById("about-implementing");
aboutButton2.onclick = function() {
  const elmnt1 = document.getElementById("implementing");
  elmnt1.scrollIntoView({
    behavior: 'smooth',
  }); 
  console.log(elmnt1);
}
const aboutButton3 = document.getElementById("about-portfolio");
aboutButton3.onclick = function() {
  const elmnt2 = document.getElementById("lates-work1");
  elmnt2.scrollIntoView({
    behavior: 'smooth',
  }); 
  console.log(elmnt2);
}
const aboutButton4 = document.getElementById("about-blog");
aboutButton4.onclick = function() {
  const elmnt3 = document.getElementById("blog-headrer");
  elmnt3.scrollIntoView({
    behavior: 'smooth',
  }); 
  console.log(elmnt3);
}
const aboutButton5 = document.getElementById("about-contact");
aboutButton5.onclick = function() {
  const elmnt4 = document.getElementById("contact-us-general1")
  elmnt4.scrollIntoView({
    behavior: 'smooth',
  }); 
  console.log(elmnt4);
}
const aboutButton6 = document.getElementById("agree");
aboutButton6.onclick = function() {
  const elmnt5 = document.getElementById("contact-us-general1")
  elmnt5.scrollIntoView({
    behavior: 'smooth',
  }); 
  console.log(elmnt5);
}
const aboutButton7 = document.getElementById("disagree");
aboutButton7.onclick = function() {
  const elmnt6 = document.getElementById("main-div")
  elmnt6.scrollIntoView({
    behavior: 'smooth',
  }); 
  console.log(elmnt6);
}