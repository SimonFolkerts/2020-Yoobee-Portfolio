$(function () {
  $(".column").hover(
    function () {
      $(this).find("h3").show();
    },
    function () {
      $(this).find("h3").hide();
    }
  );

  //TODO needs to get from config
  var word = [
    "2002-CH-WDP",
    "Graduating class of 2020",
    "Yoobee Christchurch Web",
  ];
  var element = document.getElementsByTagName("h1")[0];
  var wordIndex = 1;
  var timeout = 20000; //20 seconds
  var resetTimeout = 1000;

  var resetAnimation = function () {
    element.classList.remove("flip");
  };

  setInterval(function () {
    switch (wordIndex) {
      case 0:
        element.classList.add("flip");
        element.textContent = word[wordIndex];
        wordIndex = 1;
        setTimeout(resetAnimation, resetTimeout);
        break;

      case 1:
        element.classList.add("flip");
        element.textContent = word[wordIndex];
        wordIndex = 2;
        setTimeout(resetAnimation, resetTimeout);
        break;

      case 2:
        element.classList.add("flip");
        element.textContent = word[wordIndex];
        wordIndex = 0;
        setTimeout(resetAnimation, resetTimeout);
        break;
    }
  }, timeout);
});
