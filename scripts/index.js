$("textarea").keyup(function() {
  var textAreaString = $("textarea")[0].value;
  var wordCount = countWords(textAreaString);

  $(".word-count").text(wordCount);
  $(".char-count").text(textAreaString.length);
});

$("textarea").keyup(function(event) {

  // Problem 1: When you press the control or option key on the keyboard, the word count increases by one, yet the character count doesn't. It registers an array of size 0 with lenght of 1?

  if (event.keyCode == 8) {
    if ($("textarea")[0].value == "") {
      resetStatistics();
    }
  }
});

function countWords(str) {
  return str.trim().split(/\s+/).length;
}

function resetStatistics() {
  $(".word-count").text("0");
  $(".char-count").text("0");
}

$(".clear-field-icon").hover(function() {
  $(".clear-field-explanation").css("display", "flex");
}, function() {
  $(".clear-field-explanation").css("display", "none");
});

$(".clear-field-icon").click(function() {
  $("textarea")[0].value = "";
$("textarea")[0].focus();
  resetStatistics();
});

// Problem 2: Instead of a click, I originally had a hover listener on the font-size icon, but I realized that I couldn't hover on the hovered element. I tried increasing the hover size and z-index of the hover-hovered element, but it still didn't do anything.
$(".font-size-icon").click(function() {
  if ($(".change-font-size-explanation").css("display") == "flex") {
    $(".change-font-size-explanation").css("display", "none");
  } else {
    $(".change-font-size-explanation").css("display", "flex");
  }
});

$(".font-size-options").click(function(event) {
  var iconId = event.target.id;
  // add unclicked class to all icons, remove unclicked class from selected character and add clicked class
  $(".font-size-options").addClass("unclicked");
  $("#" + iconId).removeClass("unclicked");
  $("#" + iconId).addClass("clicked");

  if (iconId == "small-font") {
    $("textarea").css("font-size", "1.5rem");
  } else if (iconId == "medium-font") {
    $("textarea").css("font-size", "2rem");
  } else {
    $("textarea").css("font-size", "2.5rem");
  }
 });

// Hey, Brian! Keep you up the hard work! You've come pretty far. Don't stop now!

var mql = window.matchMedia("(max-width: 760px)");

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 700 pixels wide or less */
    $(".feature").css("display", "none");
  } else {
    $(".feature").css("display", "flex");
  }
}

mql.addListener(screenTest);
