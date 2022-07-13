$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $(".selection__floor-img");
  var counterUp = $(".selection__counter-up");
  var counterDown = $(".selection__counter-down");
  var modal = $(".modal");
  var modalCloseButton = $(".modal__button-cross");
  var viewFlatsButton = $(".selection__button");
  var flatPath = $(".modal__flat-img");
  var flatInfo = $(".modal__item");
  var headerLink = $(".header__item");

  floorPath.on("mouseover", function () {
    floorPath.removeClass("selection__floor-img--active");
    currentFloor = $(this).attr("data-floor");
    $(".number").text(currentFloor);
  });

  flatPath.on("mouseover", function () {
    flatPath.removeClass("modal__flat-img--active");
    flatInfo.removeClass("modal__item--active");
    currentFlat = $(this).attr("data-flat");
    $(`[data-flat=${currentFlat}]`).addClass("modal__item--active");
  });

  flatInfo.on("mouseover", function () {
    flatPath.removeClass("modal__flat-img--active");
    flatInfo.removeClass("modal__item--active");
    currentFlat = $(this).attr("data-flat");
    $(`[data-flat=${currentFlat}]`).addClass("modal__flat-img--active");
  });

  floorPath.on("click", toggleModal);
  modalCloseButton.on("click", toggleModal);
  viewFlatsButton.on("click", toggleModal);

  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGroupping: false,
      });
      $(".number").text(usCurrentFloor);
      floorPath.removeClass("selection__floor-img--active");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("selection__floor-img--active");
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGroupping: false,
      });
      $(".number").text(usCurrentFloor);
      floorPath.removeClass("selection__floor-img--active");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("selection__floor-img--active");
    }
  });

  function toggleModal() {
    modal.toggleClass("active");
  }
});


const headerLink = document.querySelectorAll('.header__item'), 
      navMenu = document.querySelector('.header__items');

      navMenu.addEventListener('click', (e) => {
        const links = e.target.closest('.header__item');

        if (links) {

          headerLink.forEach((item, i) => {

            if (item === links) {
              headerLink[i].classList.add('header__item--active');
            } else {
              headerLink[i].classList.remove('header__item--active');
            }
          });
        }
      });