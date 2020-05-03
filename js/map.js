  var button = document.querySelector(".contacts-button-map");
  var popup_map = document.querySelector(".modal-map");
  var close = popup.querySelector(".modal-close");

  button.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup_map.classList.add("modal-show");
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup_map.classList.remove("modal-show");
  });
