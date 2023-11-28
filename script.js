(function () {
  "use strict";
  // || Navigation Operations ||
  var menu = document.getElementById("menuButton");
  var closeMenu = document.getElementById("closeButton");
  var dropDownMenu = document.getElementById("dropDownContainer");

  menu.onclick = function (event) {
    event.preventDefault();
    dropDownContainer.className = "showing";
  };

  closeMenu.onclick = function (event) {
    event.preventDefault();
    dropDownMenu.className = "hidden";
  };

  // || Opening and Closing Gallery Overlay ||

  var galleryOpen01 = document.getElementById("galleryButton1");
  var galleryOpen02 = document.getElementById("galleryButton2");
  var galleryOpen03 = document.getElementById("galleryButton3");
  var galleryOpen04 = document.getElementById("galleryButton4");
  var galleryOpen05 = document.getElementById("galleryButton5");

  var galleryOpen = document.getElementsByName("button");

  var gallery = document.getElementById("galleryView");

  var galleryClose = document.getElementById("closeGallery");

  galleryOpen01.onclick = function (e) {
    e.preventDefault();
    gallery.className = "showGallery";
    currentImage = 0;
    slide.src = `../images/${ndsImages[currentImage]}`;
    imageSummary.innerHTML = `${gallerySummary[currentImage]}`;
    document.getElementById("theWholeThing").style.overflowY="hidden";
  };

  galleryOpen02.onclick = function (e) {
    e.preventDefault();
    gallery.className = "showGallery";
    currentImage = 1;
    slide.src = `../images/${ndsImages[currentImage]}`;
    imageSummary.innerHTML = `${gallerySummary[currentImage]}`;
    document.getElementById("theWholeThing").style.overflowY="hidden";
  };
  
  galleryOpen03.onclick = function (e) {
    e.preventDefault();
    gallery.className = "showGallery";
    currentImage = 2;
    slide.src = `../images/${ndsImages[currentImage]}`;
    imageSummary.innerHTML = `${gallerySummary[currentImage]}`;
    document.getElementById("theWholeThing").style.overflowY="hidden";
  };

  galleryOpen04.onclick = function (e) {
    e.preventDefault();
    gallery.className = "showGallery";
    currentImage = 3;
    slide.src = `../images/${ndsImages[currentImage]}`;
    imageSummary.innerHTML = `${gallerySummary[currentImage]}`;
    document.getElementById("theWholeThing").style.overflowY="hidden";
  };

  galleryOpen05.onclick = function (e) {
    e.preventDefault();
    gallery.className = "showGallery";
    currentImage = 4;
    slide.src = `../images/${ndsImages[currentImage]}`;
    imageSummary.innerHTML = `${gallerySummary[currentImage]}`;
    document.getElementById("theWholeThing").style.overflowY="hidden";
  };

  galleryClose.onclick = function (e) {
    e.preventDefault();
    gallery.className = "hideAMGallery";document.getElementById("theWholeThing").style.overflowY="scroll";
  };

  // || Gallery Opperations ||
  const ndsImages = [
    "NDSphoto00.jpg",
    "NDSphoto01.jpeg",
    "NDSphoto02.jpeg",
    "NDSphoto03.jpeg",
    "NDSphoto04.jpeg",
  ];

  const gallerySummary = [
    "00 Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores quos cupiditate atque error ea laborum cumque perspiciatis voluptatum saepe?",
    "01 Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores quos cupiditate atque error ea laborum cumque perspiciatis voluptatum saepe?",
    "02 Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores quos cupiditate atque error ea laborum cumque perspiciatis voluptatum saepe?",
    "03 Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores quos cupiditate atque error ea laborum cumque perspiciatis voluptatum saepe?",
    "04 Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores quos cupiditate atque error ea laborum cumque perspiciatis voluptatum saepe?",
  ];

  let currentImage = 0;

  var slide = document.getElementById("galleryImageOverlay");

  var nextImage = document.getElementById("nextImage");

  var previousImage = document.getElementById("previousImage");

  var imageSummary = document.getElementById("galleryImageSummary");

  function nextPhoto() {
    currentImage++;
    if (currentImage > ndsImages.length - 1) {
      currentImage = 0;
    }
    slide.src = `../images/${ndsImages[currentImage]}`;
    imageSummary.innerHTML = `${gallerySummary[currentImage]}`;
  }

  nextImage.addEventListener("click", function (e) {
    e.preventDefault();
    nextPhoto();
  });

  function previousPhoto() {
    currentImage--;
    if (currentImage < 0) {
      currentImage = ndsImages.length - 1;
    }
    slide.src = `../images/${ndsImages[currentImage]}`;
    imageSummary.innerHTML = `${gallerySummary[currentImage]}`;
  }

  previousImage.addEventListener("click", function (e) {
    e.preventDefault();
    previousPhoto();
  });
})();
