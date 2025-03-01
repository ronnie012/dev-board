document.getElementById("rainbow_theme_btn").addEventListener("click", function () {
  let random_color1 = Math.floor(Math.random()*255);
  let random_color2 = Math.floor(Math.random()*255);
  let random_color3 = Math.floor(Math.random()*255);

  let random_color = "rgb(" + random_color1 + "," + random_color2 + "," + random_color3 + ", 0.6)";
  document.getElementById("body").style.backgroundColor = random_color;
})
