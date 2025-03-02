// rainbow_theme_button_functionality
document.getElementById("rainbow_theme_btn").addEventListener("click", function () {
  let random_color1 = Math.floor(Math.random()*255);
  let random_color2 = Math.floor(Math.random()*255);
  let random_color3 = Math.floor(Math.random()*255);

  let random_color = "rgb(" + random_color1 + "," + random_color2 + "," + random_color3 + ", 0.6)";
  document.getElementById("body").style.backgroundColor = random_color;
});

// current_date_functionality
let time = new Date();
let day = time.toLocaleDateString('en-us', {weekday: 'long'});
let date = time.toLocaleDateString('en-us', {year: 'numeric', month: 'long', day: 'numeric'});
document.getElementById("current-date").innerHTML = `${day},<br><strong>${date}.</strong>`;

// redirect_to_blog_page_functionality
document.getElementById("blog-link").addEventListener("click", function(){
  window.location.href="./blog.discover.html"
});

// multiple_event_handler_functionalities
let cards = document.getElementsByClassName("card");
for (let card of cards) {
  card.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      alert("Board updated Successfully");
      // btn_disabling
      let btnCard = event.target;
      btnCard.disabled = true;
      // total_task_counter_updating
      let taskCountElement = document.getElementById("taskcount-intotal");
      let taskCount = parseInt(taskCountElement.innerText);
      taskCountElement.innerText = taskCount - 1;
      // completed_task_counter_updating
      let completedTaskElement = document.getElementById("finished-taskcount");
      let completedTaskCount = parseInt(completedTaskElement.innerText);
      completedTaskElement.innerText = completedTaskCount + 1;
      // history_message_template_creating
      let historyMessage = document.createElement("p");
      historyMessage.className = "bg-blue-100 p-3 mx-2 rounded-xl text-xs";
      // inserting_completed_task_name_in_history_message
      let taskName = btnCard.closest(".card").querySelector(".task-name").innerText;
      historyMessage.innerText = `You have completed the task "${taskName}" at ${new Date().toLocaleTimeString()}`;
      // displaying_history_message_in_activity_log
      document.getElementById("history").appendChild(historyMessage);
      // clearing_activity_log
      document.getElementById("messages-cleared").addEventListener("click", function() {
        document.getElementById("history").innerHTML = "";
      });
      // displaying_final_message
      if (parseInt(taskCountElement.innerText) === 0) {
        setTimeout(function () {
          alert("Congratulations! You have completed all the current tasks.");
        }, 100);
      }
    }
  });
}
