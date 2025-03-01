// document.addEventListener("DOMContentLoaded", function () {
document.getElementById("rainbow_theme_btn").addEventListener("click", function () {
  let random_color1 = Math.floor(Math.random()*255);
  let random_color2 = Math.floor(Math.random()*255);
  let random_color3 = Math.floor(Math.random()*255);

  let random_color = "rgb(" + random_color1 + "," + random_color2 + "," + random_color3 + ", 0.6)";
  document.getElementById("body").style.backgroundColor = random_color;
});

let time = new Date();
let dateToday = time.toDateString();
document.getElementById("current-date").innerText=`${dateToday}`;

document.getElementById("blog-link").addEventListener("click", function(){
  window.location.href="./blog.discover.html"
});

/*
document.getElementById("back-to-desk").addEventListener("click", function(){
  window.location.href="/index.html"
  return;
});
*/

let cards = document.getElementsByClassName("card");
for (let card of cards) {
  card.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      alert("Board updated Successfully");

      let btnCard = event.target;
      btnCard.disabled = true;

      let taskCountElement = document.getElementById("taskcount-intotal");
      let taskCount = parseInt(taskCountElement.innerText);
      taskCountElement.innerText = taskCount - 1;

      let completedTaskElement = document.getElementById("finished-taskcount");
      let completedTaskCount = parseInt(completedTaskElement.innerText);
      completedTaskElement.innerText = completedTaskCount + 1;

      let historyMessage = document.createElement("p");
      historyMessage.className = "bg-blue-100 p-3 mx-2 rounded-xl text-xs";

      let taskName = btnCard.closest(".card").querySelector(".task-name").innerText;
      historyMessage.innerText = `You have completed the task "${taskName}" at ${new Date().toLocaleTimeString()}`;

      document.getElementById("history").appendChild(historyMessage);

      document.getElementById("messages-cleared").addEventListener("click", function() {
        document.getElementById("history").innerHTML = "";
      });

      if (parseInt(taskCountElement.innerText) === 0) {
        setTimeout(function () {
          alert("Congratulations! You have completed all the current tasks.");
        }, 100);
      }
    }
  });
}
// });