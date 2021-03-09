function str(x) {
  return "sounds/" + x + ".mp3";
}
for (var i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    awaaz(this.innerHTML);
    this.classList.add("pressed");
    var y = this.classList;
    setTimeout(function() {
      y.remove("pressed");
    }, 200);
  })
}
document.addEventListener("keypress", function(event) {
  awaaz(event.key);
  var z = event.key;
  if (z === "w" || z === "a" || z === "s" || z === "d" || z === "j" || z === "k" || z === "l") {
    document.querySelector("." + z).classList.add("pressed");
    setTimeout(function() {
      document.querySelector("." + z).classList.remove("pressed");
    }, 200);
  }
})


function awaaz(x) {
  switch (x) {
    case "w":
      var crash = new Audio(str("crash"));
      crash.play();
      break;
    case "a":
      var kick = new Audio(str("kick-bass"));
      kick.play();

      break;
    case "s":
      var snare = new Audio(str("snare"));
      snare.play();

      break;
    case "d":
      var tom1 = new Audio(str("tom-1"));
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio(str("tom-2"));
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio(str("tom-3"));
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio(str("tom-4"));
      tom4.play();
      break;
    default:

  }
}
